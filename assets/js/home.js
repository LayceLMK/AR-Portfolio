/* ===== Page d'accueil : projets, expériences, comptes rendus, lecteur PDF ===== */
(() => {
    const { t, getLang, observeReveals, toast } = window.Site
    const PROJECTS = window.PROJECTS || []
    const EXPERIENCES = window.EXPERIENCES || []
    const isEN = () => getLang() === 'en'

    const UI = {
        details: { fr: 'Voir le détail', en: 'View details' },
        read: { fr: 'Lire', en: 'Read' },
        download: { fr: 'Télécharger', en: 'Download' },
        onRequest: { fr: 'Disponible sur demande', en: 'Available on request' },
        report: { fr: 'Compte rendu', en: 'Report' },
        about: { fr: 'Le projet', en: 'The project' },
        skills: { fr: 'Compétences mobilisées', en: 'Skills applied' },
        tech: { fr: 'Technologies', en: 'Technologies' },
        docs: { fr: 'Documents', en: 'Documents' },
        prev: { fr: '← Précédent', en: '← Previous' },
        next: { fr: 'Suivant →', en: 'Next →' },
        featured: { fr: 'Projet phare', en: 'Featured' },
        copied: { fr: 'Adresse copiée', en: 'Address copied' },
        projects: { fr: 'Projet', en: 'Project' },
        internship: { fr: 'Stage', en: 'Internship' },
        resume: { fr: 'CV — Rohan Alamelou', en: 'Résumé — Rohan Alamelou' },
        allDocs: { fr: 'Comptes rendus', en: 'Reports' },
        allDocsTitle: { fr: 'Tous les documents en un coup d’œil', en: 'Every document at a glance' },
        allDocsText: { fr: 'Rapports de stage, comptes rendus de SAE et de TP, et CV : à lire en ligne ou à télécharger.', en: 'Internship reports, project and lab reports, and my résumé: read online or download.' },
        allDocsBtn: { fr: 'Voir les comptes rendus', en: 'See the reports' }
    }

    const ICON_DOC = '<svg viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>'
    const ICON_LOCK = '<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>'

    /* Une ligne « document » réutilisée partout */
    const docRow = (d, sub) => {
        if (!d.file) {
            return `<div class="doc doc--soon"><span class="doc__ico">${ICON_LOCK}</span>
                <span class="doc__txt"><b>${t(d.label)}</b><small>${t(UI.onRequest)}</small></span></div>`
        }
        return `<div class="doc"><span class="doc__ico">${ICON_DOC}</span>
            <span class="doc__txt"><b>${t(d.label)}</b><small>${sub ? sub + ' · ' : ''}PDF · ${d.size || ''}</small></span>
            <span class="doc__act">
                <button type="button" class="solid" data-pdf-open="${d.file}" data-pdf-title="${t(d.label).replace(/"/g, '&quot;')}">${t(UI.read)}</button>
                <a href="${d.file}" download>${t(UI.download)}</a>
            </span></div>`
    }

    /* ---------- Expériences ---------- */
    const renderXP = () => {
        const box = document.getElementById('xp-list')
        if (!box) return
        box.innerHTML = EXPERIENCES.map((x) => {
            const bullets = `<ul class="bullets">${t(x.bullets).map((b) => `<li>${b}</li>`).join('')}</ul>`
            const tags = x.tags.map((g) => `<span class="tag">${g}</span>`).join('')
            if (x.feature) {
                return `<article class="feature card reveal">
                    <div class="feature__main">
                        <div class="meta"><span>${t(x.date)}</span>${tags}</div>
                        <h3 class="feature__title">${t(x.title)}</h3>
                        <p class="feature__org">${t(x.org)}</p>
                        ${bullets}
                        ${x.note ? `<p class="paper"><span class="paper__ico">${ICON_DOC}</span><span>${t(x.note)}</span></p>` : ''}
                    </div>
                    <div class="feature__side">${x.kpis.map((k) => `<div class="kpi"><div class="kpi__n">${k.n}</div><div class="kpi__l">${t(k.l)}</div></div>`).join('')}</div>
                </article>`
            }
            return `<article class="xp card reveal">
                <div>
                    <div class="meta"><span>${t(x.date)}</span>${tags}</div>
                    <h3 class="xp__title">${t(x.title)}</h3>
                    <p class="xp__org">${t(x.org)}</p>
                    ${bullets}
                </div>
                <div class="doc-mini">${x.docs.map((d) => docRow(d)).join('')}</div>
            </article>`
        }).join('')
    }

    /* ---------- Projets ---------- */
    const renderProjects = () => {
        const box = document.getElementById('projects')
        if (!box) return
        box.innerHTML = PROJECTS.map((p, i) => `
            <button type="button" class="project card reveal d${(i % 3) + 1}${p.wide ? ' project--wide' : ''}" data-project="${p.id}">
                <div class="project__media">
                    ${p.wide ? `<span class="tag tag--hot feat-label">${t(UI.featured)}</span>` : ''}
                    <img src="${p.cover}" alt="${t(p.title).replace(/<[^>]+>/g, '')}" loading="lazy" width="800" height="533">
                    <span class="project__n">${String(i + 1).padStart(2, '0')} / ${String(PROJECTS.length).padStart(2, '0')}</span>
                </div>
                <div class="project__body">
                    <span class="tag">${t(p.context)}</span>
                    <h3 class="project__title">${t(p.title)}</h3>
                    <p>${t(p.short)}</p>
                    ${p.wide ? `<div class="project__kpis">${p.kpis.map((k) => `<div><b>${k.n}</b><span>${t(k.l)}</span></div>`).join('')}</div>` : ''}
                    <div class="project__tags">${p.tags.map((g) => `<span class="tool">${g}</span>`).join('')}</div>
                    <span class="more">${t(UI.details)} <span class="arr">→</span></span>
                </div>
            </button>`).join('') + `
            <a href="#documents" class="project card project--cta reveal d3">
                <span class="tag tag--hot">${t(UI.allDocs)}</span>
                <h3 class="project__title">${t(UI.allDocsTitle)}</h3>
                <p>${t(UI.allDocsText)}</p>
                <span class="more">${t(UI.allDocsBtn)} <span class="arr">→</span></span>
            </a>`
    }

    /* ---------- Tous les comptes rendus ---------- */
    const renderDocs = () => {
        const box = document.getElementById('docs-grid')
        if (!box) return
        const all = []
        EXPERIENCES.forEach((x) => x.docs.forEach((d) => all.push([d, t(UI.internship)])))
        PROJECTS.forEach((p) => p.docs.forEach((d) => all.push([d, t(p.context)])))
        all.push([{ label: UI.resume, file: 'assets/pdf/CV_Rohan_ALAMELOU.pdf', size: '90 Ko' }, 'CV'])
        // Les documents disponibles d'abord
        all.sort((a, b) => (b[0].file ? 1 : 0) - (a[0].file ? 1 : 0))
        box.innerHTML = all.map(([d, sub], i) => `<div class="reveal d${(i % 2) + 1}">${docRow(d, sub)}</div>`).join('')
    }

    /* ---------- Panneau de détail ---------- */
    const drawer = document.getElementById('drawer')
    const drawerContent = document.getElementById('drawer-content')
    const prevBtn = document.getElementById('d-prev')
    const nextBtn = document.getElementById('d-next')
    let current = -1
    let lastFocus = null

    const fillDrawer = (i) => {
        const p = PROJECTS[i]
        current = i
        document.getElementById('d-context').textContent = t(p.context)
        drawerContent.innerHTML = `
            <div class="d-cover"><img src="${p.cover}" alt=""></div>
            <div class="d-inner">
                <h2 class="d-title" id="d-title">${t(p.title)}</h2>
                <div class="d-meta">${p.tags.map((g) => `<span class="tag">${g}</span>`).join('')}</div>
                <div class="d-kpis">${p.kpis.map((k) => `<div class="d-kpi"><b>${k.n}</b><span>${t(k.l)}</span></div>`).join('')}</div>
                <div class="d-sec"><h3 class="d-h">${t(UI.about)}</h3>${t(p.body).map((x) => `<p>${x}</p>`).join('')}</div>
                <div class="d-sec"><h3 class="d-h">${t(UI.skills)}</h3><ul class="bullets">${t(p.skills).map((s) => `<li>${s}</li>`).join('')}</ul></div>
                <div class="d-sec"><h3 class="d-h">${t(UI.tech)}</h3><div class="d-tech">${p.tech.map(([n, img]) => `<span class="chip"><img src="assets/img/${img}" alt="">${n}</span>`).join('')}</div></div>
                <div class="d-sec"><h3 class="d-h">${t(UI.docs)}</h3><div class="d-docs">${p.docs.map((d) => docRow(d)).join('')}</div></div>
            </div>`
        drawerContent.scrollTop = 0
        const prev = PROJECTS[i - 1], next = PROJECTS[i + 1]
        prevBtn.disabled = !prev
        nextBtn.disabled = !next
        prevBtn.innerHTML = prev ? `${t(UI.prev)}` : t(UI.prev)
        nextBtn.innerHTML = next ? `${t(UI.next)}` : t(UI.next)
    }

    const openDrawer = (i) => {
        lastFocus = document.activeElement
        fillDrawer(i)
        drawer.classList.add('is-open')
        drawer.setAttribute('aria-hidden', 'false')
        document.body.classList.add('is-locked')
        setTimeout(() => drawer.querySelector('.drawer__close').focus(), 50)
    }
    const closeDrawer = () => {
        drawer.classList.remove('is-open')
        drawer.setAttribute('aria-hidden', 'true')
        document.body.classList.remove('is-locked')
        current = -1
        if (lastFocus) lastFocus.focus()
    }

    document.addEventListener('click', (e) => {
        const card = e.target.closest('[data-project]')
        if (card) openDrawer(PROJECTS.findIndex((p) => p.id === card.dataset.project))
    })
    drawer.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeDrawer() })
    prevBtn.addEventListener('click', () => current > 0 && fillDrawer(current - 1))
    nextBtn.addEventListener('click', () => current < PROJECTS.length - 1 && fillDrawer(current + 1))

    /* ---------- Lecteur PDF ---------- */
    const modal = document.getElementById('pdf-modal')
    const frame = document.getElementById('pdf-frame')
    const smallScreen = () => window.matchMedia('(max-width: 680px)').matches

    const openPdf = (file, title) => {
        // Sur téléphone, les PDF s'affichent mieux dans un nouvel onglet
        if (smallScreen()) { window.open(file, '_blank', 'noopener'); return }
        document.getElementById('pdf-title').textContent = title || 'Document'
        document.getElementById('pdf-open').href = file
        document.getElementById('pdf-dl').href = file
        frame.src = file
        modal.classList.add('is-open')
        modal.setAttribute('aria-hidden', 'false')
        document.body.classList.add('is-locked')
    }
    const closePdf = () => {
        modal.classList.remove('is-open')
        modal.setAttribute('aria-hidden', 'true')
        frame.src = 'about:blank'
        if (!drawer.classList.contains('is-open')) document.body.classList.remove('is-locked')
    }

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-pdf-open]')
        if (btn) { e.preventDefault(); openPdf(btn.dataset.pdfOpen, btn.dataset.pdfTitle); return }
        const link = e.target.closest('a[data-pdf]')
        if (link) { e.preventDefault(); openPdf(link.getAttribute('href'), t(UI.resume)) }
    })
    modal.addEventListener('click', (e) => { if (e.target === modal || e.target.closest('[data-close]')) closePdf() })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal.classList.contains('is-open')) closePdf()
            else if (drawer.classList.contains('is-open')) closeDrawer()
        }
        if (drawer.classList.contains('is-open') && !modal.classList.contains('is-open')) {
            if (e.key === 'ArrowRight' && current < PROJECTS.length - 1) fillDrawer(current + 1)
            if (e.key === 'ArrowLeft' && current > 0) fillDrawer(current - 1)
        }
    })

    /* ---------- Copier l'email ---------- */
    document.addEventListener('click', (e) => {
        const c = e.target.closest('[data-copy]')
        if (!c) return
        e.preventDefault()
        e.stopPropagation()
        const done = () => toast(t(UI.copied))
        if (navigator.clipboard) navigator.clipboard.writeText(c.dataset.copy).then(done, done)
        else done()
    })

    /* ---------- Compteurs et barres animés ---------- */
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (!e.isIntersecting) return
                const el = e.target
                io.unobserve(el)
                if (el.dataset.w) { el.style.width = el.dataset.w + '%'; return }
                const end = +el.dataset.count
                const start = performance.now()
                const step = (now) => {
                    const k = Math.min((now - start) / 1200, 1)
                    el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)))
                    if (k < 1) requestAnimationFrame(step)
                }
                requestAnimationFrame(step)
            })
        }, { threshold: 0.4 })
        document.querySelectorAll('[data-count], .bar i[data-w]').forEach((el) => io.observe(el))
    } else {
        document.querySelectorAll('.bar i[data-w]').forEach((el) => (el.style.width = el.dataset.w + '%'))
    }

    /* ---------- Terminal du hero ---------- */
    const term = document.getElementById('term')
    const SCRIPT = {
        fr: [['whoami', 'rohan.alamelou'], ['cat focus.txt', 'SOC · Pentest · Réseau · GRC'], ['status --alternance', 'ouvert ✓']],
        en: [['whoami', 'rohan.alamelou'], ['cat focus.txt', 'SOC · Pentest · Network · GRC'], ['status --alternance', 'open ✓']]
    }
    let termRun = 0
    const runTerm = () => {
        if (!term) return
        const run = ++termRun
        const lines = SCRIPT[isEN() ? 'en' : 'fr']
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduced) {
            term.innerHTML = lines.map(([c, o]) => `<span class="p">$</span> ${c}\n<span class="o">${o}</span>`).join('\n')
            return
        }
        let html = ''
        let li = 0, ci = 0
        const tick = () => {
            if (run !== termRun) return
            if (li >= lines.length) { term.innerHTML = html + '<span class="p">$</span> <span class="cur"></span>'; return }
            const [cmd, out] = lines[li]
            if (ci <= cmd.length) {
                term.innerHTML = html + `<span class="p">$</span> ${cmd.slice(0, ci)}<span class="cur"></span>`
                ci++
                setTimeout(tick, 55 + Math.random() * 50)
            } else {
                html += `<span class="p">$</span> ${cmd}\n<span class="o">${out}</span>\n`
                li++; ci = 0
                term.innerHTML = html
                setTimeout(tick, 420)
            }
        }
        setTimeout(tick, 700)
    }

    /* ---------- Rendu + changement de langue ---------- */
    const renderAll = () => {
        renderXP()
        renderProjects()
        renderDocs()
        observeReveals()
        document.querySelectorAll('#xp-list .reveal, #projects .reveal, #docs-grid .reveal').forEach((el) => {
            // Après un changement de langue, ce qui était déjà visible le reste
            if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in')
        })
    }
    renderAll()
    runTerm()
    document.addEventListener('langchange', () => {
        renderAll()
        runTerm()
        if (current >= 0) fillDrawer(current)
    })
})()
