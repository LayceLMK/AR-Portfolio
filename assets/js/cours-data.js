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
 *   url   : le lien : une page du site (ex: "revisions/prog-systeme.html"), un PDF dans assets/pdf/ ou un autre site
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
                { titre: "Révisions Prog Système — cours, TD 1 à 8, Mini-GLIBC, man et QCM", url: "revisions/prog-systeme.html", type: "interactif", date: "2026-11-21" }
            ]
        }
    ]
}
