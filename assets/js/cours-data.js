/*
 * ===== HUB COURS & RÉVISIONS — DONNÉES =====
 *
 * C'est le SEUL fichier à modifier pour ajouter une matière ou une fiche.
 *
 * Ajouter une fiche dans une matière existante :
 *   copie une ligne { titre: ..., url: ..., type: ..., date: ... } dans "ressources"
 *   et change les valeurs. N'oublie pas la virgule entre deux fiches.
 *
 * Champs d'une ressource :
 *   titre : le nom affiché
 *   url   : le lien (lien d'un artifact Claude, PDF dans assets/pdf/, autre site...)
 *   type  : "fiche" (fiche de révision), "interactif" (page avec quiz/exos),
 *           "td" (TD / exercices corrigés), "oral" (préparation d'oral), "pdf"
 *   date  : date de création ou de mise à jour, format AAAA-MM-JJ
 *
 * Champs d'une matière :
 *   id     : identifiant court, sans espace ni accent (sert aux filtres)
 *   nom    : nom affiché
 *   icone  : nom d'une icône Boxicons (https://boxicons.com, ex: "bx-chip")
 *   examen : (facultatif) date du prochain examen, format AAAA-MM-JJ
 */

window.COURS_DATA = {
    formation: "INSA Centre Val de Loire — Sécurité et Technologies Informatiques",
    annee: "2026-2027",

    matieres: [
        {
            id: "prog-systeme",
            nom: "Programmation Système",
            icone: "bx-terminal",
            examen: "2026-12-03",
            ressources: [
                { titre: "Révisions Prog Système", url: "https://claude.ai/artifact/WiapkMjpway7ZQGpAHZH3e", type: "interactif", date: "2026-11-21" }
            ]
        },
        {
            id: "archi",
            nom: "Architecture & Assembleur",
            icone: "bx-chip",
            ressources: [
                { titre: "Révisions Partiel Archi & Assembleur", url: "https://claude.ai/artifact/Ur47vGHTnEc9V4qGz8yEfq", type: "interactif", date: "2026-11-22" }
            ]
        },
        {
            id: "reseau",
            nom: "Réseau (sockets en C)",
            icone: "bx-network-chart",
            ressources: [
                { titre: "Révision Réseau C — Sockets, NTP, UDP/TCP, IRC", url: "https://claude.ai/artifact/K5y2QYmdqZTEJSL9kVaBeA", type: "fiche", date: "2026-11-09" }
            ]
        },
        {
            id: "poo-java",
            nom: "POO Java",
            icone: "bx-coffee",
            ressources: [
                { titre: "Fiche récap POO Java — partiel du 9 novembre", url: "https://claude.ai/artifact/DPU8FdQ3hSSEvL8M1YY3md", type: "fiche", date: "2026-11-08" },
                { titre: "POO : fiche express de la veille", url: "https://claude.ai/artifact/78ojYcZm634cxejjQTUHpN", type: "fiche", date: "2026-11-08" },
                { titre: "POO Java : ce que le CM ajoute", url: "https://claude.ai/artifact/NCL7XfsPrxvw4ssERfTRyu", type: "fiche", date: "2026-11-08" }
            ]
        },
        {
            id: "algo",
            nom: "Algorithmique & Complexité",
            icone: "bx-git-branch",
            ressources: [
                { titre: "Fiche de révision : Algorithmique et complexité", url: "https://claude.ai/artifact/TeYUcLRuNitzrbKfZC9VPL", type: "fiche", date: "2026-10-20" },
                { titre: "Fiche d'examen : complexité, récurrences, théorème général", url: "https://claude.ai/artifact/FSsVAwn68N9qs4dYL4KMwJ", type: "fiche", date: "2026-10-21" }
            ]
        },
        {
            id: "eco",
            nom: "Économie & Sciences humaines",
            icone: "bx-globe",
            ressources: [
                { titre: "TD1 — Les nouvelles formes du travail", url: "https://claude.ai/artifact/Qx9bEyt95ATUQWScPZjwEf", type: "td", date: "2026-11-09" },
                { titre: "Oral : le désordre mondial", url: "https://claude.ai/artifact/E4bQh39uLyEU4Br4viZTXg", type: "oral", date: "2026-11-22" }
            ]
        }
    ]
}
