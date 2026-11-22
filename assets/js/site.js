/* ===== Comportements communs à toutes les pages ===== */
window.Site = (() => {
    const header = document.getElementById('header')
    const menu = document.getElementById('nav-menu')
    const toggle = document.getElementById('nav-toggle')

    /* En-tête flouté après un peu de défilement */
    const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    /* Menu mobile */
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            const open = menu.classList.toggle('is-open')
            toggle.classList.toggle('is-open', open)
            toggle.setAttribute('aria-expanded', open)
        })
        menu.querySelectorAll('.nav__link').forEach((l) => l.addEventListener('click', () => {
            menu.classList.remove('is-open')
            toggle.classList.remove('is-open')
        }))
    }

    /* Lien du menu actif selon la section visible */
    const links = [...document.querySelectorAll('.nav__link[href^="#"]')]
    const targets = links.map((l) => document.querySelector(l.getAttribute('href'))).filter(Boolean)
    if (targets.length && 'IntersectionObserver' in window) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (!e.isIntersecting) return
                links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id))
            })
        }, { rootMargin: '-45% 0px -50% 0px' })
        targets.forEach((t) => spy.observe(t))
        const hero = document.querySelector('.hero')
        if (hero) new IntersectionObserver(([e]) => {
            if (e.isIntersecting) links.forEach((l) => l.classList.remove('is-active'))
        }, { rootMargin: '-45% 0px -50% 0px' }).observe(hero)
    }

    /* Apparition douce des éléments .reveal */
    const revealObs = 'IntersectionObserver' in window
        ? new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('is-in')
                    revealObs.unobserve(e.target)
                }
            })
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
        : null
    const observeReveals = (root = document) => {
        root.querySelectorAll('.reveal:not(.is-in)').forEach((el) => (revealObs ? revealObs.observe(el) : el.classList.add('is-in')))
    }
    observeReveals()

    /* Langue FR / EN : chaque élément traduit porte son texte anglais dans data-en */
    let lang = 'fr'
    try { lang = localStorage.getItem('ra-lang') || 'fr' } catch (e) { /* stockage indisponible */ }

    const applyLang = (next, silent) => {
        lang = next
        document.documentElement.lang = lang
        document.querySelectorAll('[data-en]').forEach((el) => {
            if (el.dataset.fr === undefined) el.dataset.fr = el.innerHTML
            el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.fr
        })
        document.querySelectorAll('.lang button').forEach((b) => { b.classList.toggle('is-on', b.dataset.lang === lang); b.setAttribute('aria-pressed', b.dataset.lang === lang) })
        try { localStorage.setItem('ra-lang', lang) } catch (e) { /* ignore */ }
        if (!silent) document.dispatchEvent(new CustomEvent('langchange', { detail: lang }))
    }
    document.querySelectorAll('.lang button').forEach((b) => b.addEventListener('click', () => applyLang(b.dataset.lang)))
    if (lang !== 'fr') applyLang(lang, true)

    /* Petit message temporaire */
    const toastEl = document.getElementById('toast')
    let toastTimer
    const toast = (msg) => {
        if (!toastEl) return
        toastEl.textContent = msg
        toastEl.classList.add('is-on')
        clearTimeout(toastTimer)
        toastTimer = setTimeout(() => toastEl.classList.remove('is-on'), 2200)
    }

    return {
        getLang: () => lang,
        t: (obj) => (obj && typeof obj === 'object' ? obj[lang] || obj.fr : obj),
        observeReveals,
        toast
    }
})()
