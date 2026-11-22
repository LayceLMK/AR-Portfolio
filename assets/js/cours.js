/*===== HUB COURS & RÉVISIONS =====*/
/* Affiche les matières et fiches définies dans cours-data.js. Rien à modifier ici pour ajouter du contenu. */

(() => {
    const data = window.COURS_DATA
    if (!data) return

    const TYPES = {
        fiche:      { label: 'Fiche',      icon: 'bx-file' },
        interactif: { label: 'Interactif', icon: 'bx-joystick' },
        td:         { label: 'TD',         icon: 'bx-edit' },
        oral:       { label: 'Oral',       icon: 'bx-microphone' },
        pdf:        { label: 'PDF',        icon: 'bxs-file-pdf' }
    }

    const grid = document.getElementById('hub-grid')
    const filters = document.getElementById('hub-filters')
    const search = document.getElementById('hub-search')
    const empty = document.getElementById('hub-empty')
    const stats = document.getElementById('hub-stats')
    const nextExam = document.getElementById('hub-next-exam')

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const parseDate = (s) => {
        const [y, m, d] = s.split('-').map(Number)
        return new Date(y, m - 1, d)
    }
    const formatDate = (s) => parseDate(s).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
    const daysUntil = (s) => Math.round((parseDate(s) - today) / 86400000)

    // Pour chercher sans tenir compte des accents ni des majuscules
    const normalize = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

    const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

    /* --- En-tête : formation, compteurs, prochain examen --- */
    document.getElementById('hub-formation').textContent = `${data.formation} · ${data.annee}`

    const total = data.matieres.reduce((n, m) => n + m.ressources.length, 0)
    stats.innerHTML = `
        <div class="hub__stat"><span class="hub__stat-value">${data.matieres.length}</span><span class="hub__stat-label">matière${data.matieres.length > 1 ? 's' : ''}</span></div>
        <div class="hub__stat"><span class="hub__stat-value">${total}</span><span class="hub__stat-label">ressource${total > 1 ? 's' : ''}</span></div>`

    const upcoming = data.matieres
        .filter((m) => m.examen && daysUntil(m.examen) >= 0)
        .sort((a, b) => parseDate(a.examen) - parseDate(b.examen))[0]

    if (upcoming) {
        const d = daysUntil(upcoming.examen)
        const when = d === 0 ? "aujourd'hui" : d === 1 ? 'demain' : `dans ${d} jours`
        nextExam.innerHTML = `<i class='bx bx-alarm'></i><span>Prochain examen : <strong>${escapeHTML(upcoming.nom)}</strong>, ${when} (${formatDate(upcoming.examen)})</span>`
        nextExam.hidden = false
    }

    /* --- Boutons de filtre par matière --- */
    let activeFilter = 'all'
    const makeChip = (id, label) => {
        const b = document.createElement('button')
        b.type = 'button'
        b.className = 'hub__chip' + (id === activeFilter ? ' is-active' : '')
        b.dataset.filter = id
        b.textContent = label
        filters.appendChild(b)
    }
    makeChip('all', 'Toutes')
    data.matieres.forEach((m) => makeChip(m.id, m.nom))

    filters.addEventListener('click', (e) => {
        const chip = e.target.closest('.hub__chip')
        if (!chip) return
        activeFilter = chip.dataset.filter
        filters.querySelectorAll('.hub__chip').forEach((c) => c.classList.toggle('is-active', c === chip))
        render()
    })

    search.addEventListener('input', render)

    /* --- Affichage des cartes --- */
    function render() {
        const q = normalize(search.value.trim())
        let shown = 0

        const cards = data.matieres
            .filter((m) => activeFilter === 'all' || m.id === activeFilter)
            .map((m) => {
                const matchSubject = q && normalize(m.nom).includes(q)
                const items = m.ressources
                    .filter((r) => !q || matchSubject || normalize(r.titre).includes(q))
                    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))

                if (q && items.length === 0) return ''
                shown += 1

                let examBadge = ''
                if (m.examen && daysUntil(m.examen) >= 0) {
                    const d = daysUntil(m.examen)
                    const urgent = d <= 14 ? ' hub__exam--soon' : ''
                    examBadge = `<span class="hub__exam${urgent}"><i class='bx bx-calendar'></i> Exam ${formatDate(m.examen)}</span>`
                }

                const list = items.length
                    ? items.map((r) => {
                        const t = TYPES[r.type] || TYPES.fiche
                        // Les pages du site s'ouvrent dans le même onglet, les liens externes dans un nouvel onglet
                        const external = /^https?:\/\//.test(r.url)
                        return `
                        <li>
                            <a class="hub__res" href="${escapeHTML(r.url)}"${external ? ' target="_blank" rel="noopener"' : ''}>
                                <i class='bx ${t.icon} hub__res-icon'></i>
                                <span class="hub__res-body">
                                    <span class="hub__res-title">${escapeHTML(r.titre)}</span>
                                    <span class="hub__res-meta"><span class="hub__tag hub__tag--${escapeHTML(r.type)}">${t.label}</span>${r.date ? formatDate(r.date) : ''}</span>
                                </span>
                                <i class='bx ${external ? 'bx-link-external' : 'bx-right-arrow-alt'} hub__res-arrow'></i>
                            </a>
                        </li>`
                    }).join('')
                    : `<li class="hub__res-empty">Aucune fiche pour l'instant.</li>`

                return `
                <article class="hub__card">
                    <header class="hub__card-head">
                        <span class="hub__card-icon"><i class='bx ${escapeHTML(m.icone || 'bx-book')}'></i></span>
                        <div class="hub__card-info">
                            <h2 class="hub__card-title">${escapeHTML(m.nom)}</h2>
                            <span class="hub__card-count">${m.ressources.length} ressource${m.ressources.length > 1 ? 's' : ''}</span>
                            ${examBadge}
                        </div>
                    </header>
                    <ul class="hub__res-list">${list}</ul>
                </article>`
            })
            .join('')

        grid.innerHTML = cards
        empty.hidden = shown > 0
    }

    render()
})()
