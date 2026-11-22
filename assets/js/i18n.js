
window.PortfolioI18n = (() => {
    const langButton = document.getElementById('lang-button')
    let currentLang = 'fr'

    const setHTML = (el, html) => {
        if (el) el.innerHTML = html
    }

    const translations = {
        fr: {
            nav: ['Accueil', 'Profil', 'Comp&eacute;tences', 'Projets', 'Cours', 'Contact'],
            home: {
                greet: 'Bonjour,<br>je suis',
                contact: 'Contact'
            },
            about: {
                title: 'Profil',
                subtitle: '&Agrave; propos de moi',
                extra: [
                    '<strong>Langues :</strong> Fran&ccedil;ais, Anglais (niveau C1)',
                    '<strong>Soft skills :</strong> Adaptabilit&eacute;, travail en &eacute;quipe, r&eacute;solution de probl&egrave;mes, pers&eacute;v&eacute;rance',
                    '<strong>Certifications :</strong> EF SET (B2/C1), ANSSI MOOC',
                    '<strong>Centres d&rsquo;int&eacute;r&ecirc;t :</strong> Technologie, sport, jeux vid&eacute;o'
                ],
                paragraphs: [
                    'Actuellement en BUT R&eacute;seaux &amp; T&eacute;l&eacute;communications &ndash; parcours Cybers&eacute;curit&eacute;, j&rsquo;&eacute;volue au croisement des r&eacute;seaux et de la cybers&eacute;curit&eacute;.',
                    'J&rsquo;&eacute;tudie et pratique au quotidien afin de concevoir, d&eacute;ployer et s&eacute;curiser des architectures techniques, du Docker au SIEM, en passant par la supervision, l&rsquo;analyse de logs et la d&eacute;tection d&rsquo;incidents.',
                    '&Agrave; travers mes projets, je d&eacute;veloppe une approche rigoureuse et m&eacute;thodique, avec un objectif clair : comprendre en profondeur les syst&egrave;mes pour mieux les prot&eacute;ger.',
                    'Automatisation, surveillance, r&eacute;silience et tra&ccedil;abilit&eacute; sont au c&oelig;ur de ma d&eacute;marche.',
                    'Ce portfolio refl&egrave;te mon &eacute;volution et constitue la trace concr&egrave;te de ma progression constante dans ces domaines. Il met en valeur mes projets en r&eacute;seaux et en cybers&eacute;curit&eacute;, ainsi que mes exp&eacute;riences professionnelles, en coh&eacute;rence avec mon ambition &agrave; moyen terme : &eacute;voluer vers une activit&eacute; freelance sp&eacute;cialis&eacute;e en r&eacute;seaux et cybers&eacute;curit&eacute;.'
                ],
                cv: 'Voir mon CV'
            },
            skills: {
                title: 'Comp&eacute;tences',
                groups: [
                    {
                        title: 'Cybers&eacute;curit&eacute;',
                        items: [
                            'D&eacute;fense r&eacute;seau via pare-feu OPNsense, pfSense et Stormshield',
                            'Pentesting, Burp Suite et Kali Linux',
                            'WAF NGINX, IDS/IPS et s&eacute;curisation d&rsquo;architectures',
                            'Audit de s&eacute;curit&eacute;, EBIOS et analyses d&rsquo;incidents',
                            'SIEM/Wazuh pour corr&eacute;lation et d&eacute;tection'
                        ],
                        levelLabel: 'Expertise',
                        levelValue: 'Avanc&eacute;'
                    },
                    {
                        title: 'R&eacute;seaux',
                        items: [
                            'Conception et segmentation VLAN, plan d&rsquo;adressage',
                            'Routage dynamique OSPF/BGP',
                            'Services r&eacute;seau DHCP/DNS',
                            'Interconnexion MPLS et routage inter-sites',
                            'Pare-feu et filtrage (Stormshield, OPNsense, pfSense)'
                        ],
                        levelLabel: 'Expertise',
                        levelValue: 'Avanc&eacute;'
                    },
                    {
                        title: 'Supervision',
                        items: [
                            'Stack Grafana pour dashboards et alerting',
                            'Centralisation des logs et corr&eacute;lation',
                            'Wazuh pour d&eacute;tection et supervision s&eacute;curit&eacute;',
                            'Mise en place d&rsquo;alertes et suivi d&rsquo;incidents'
                        ],
                        levelLabel: 'Expertise',
                        levelValue: 'Interm&eacute;diaire'
                    },
                    {
                        title: 'Virtualisation &amp; Syst&egrave;mes',
                        items: [
                            'Linux (Debian, Kali) &amp; Windows Server AD/DNS',
                            'VirtualBox et environnements de test',
                            'Conteneurs Docker et orchestration l&eacute;g&egrave;re',
                            'Gestion des services et durcissement de base'
                        ],
                        levelLabel: 'Expertise',
                        levelValue: 'Interm&eacute;diaire'
                    }
                ]
            },
            parcours: {
                title: 'Parcours',
                educationHeading: 'Formation',
                educationItems: [
                    {
                        text: 'Dipl&ocirc;me du Baccalaur&eacute;at',
                        list: ['Sp&eacute;cialisation : Math&eacute;matiques et Num&eacute;rique et sciences de l&rsquo;informatique']
                    },
                    {
                        text: 'BUT R&eacute;seaux &amp; T&eacute;l&eacute;coms',
                        list: ['Sp&eacute;cialisation : Cybers&eacute;curit&eacute;']
                    }
                ],
                experienceHeading: 'Exp&eacute;rience professionnelle',
                experienceItems: [
                    {
                        text: 'Stage en t&eacute;l&eacute;phonie et R&eacute;seaux',
                        list: ['Ercom : Technicien en t&eacute;l&eacute;phonie VoIP et r&eacute;seau']
                    },
                    {
                        text: 'Stage &agrave; University of the West of England',
                        list: ['Recherche en cybers&eacute;curit&eacute;']
                    }
                ]
            },
            projects: {
                title: 'Projets r&eacute;alis&eacute;s',
                overlay: 'Voir compte rendu',
                techTitle: 'Technologies/Services utilis&eacute;s',
                items: {
                    'exp-moodle': {
                        title: 'Mise en place de services Moodle &amp; Samba',
                        texts: [
                            'Ce projet, r&eacute;alis&eacute; d&egrave;s la premi&egrave;re ann&eacute;e, constitue une &eacute;tape fondatrice de mon parcours. Il a consolid&eacute; mes comp&eacute;tences en r&eacute;seaux et en administration syst&egrave;me, tout en d&eacute;montrant ma capacit&eacute; &agrave; concevoir et d&eacute;ployer une infrastructure compl&egrave;te, structur&eacute;e et op&eacute;rationnelle.<br><br>Il repose sur la conception d&rsquo;une architecture multi-VLAN entre un site principal et une succursale : mise en &oelig;uvre de trunks, de sous-interfaces 802.1Q, d&rsquo;un plan d&rsquo;adressage coh&eacute;rent, du routage inter-VLAN et de routes statiques inter-sites. Chaque VLAN dispose de son pool DHCP d&eacute;di&eacute;, garantissant une gestion efficace des adresses IP.<br><br>Le projet int&egrave;gre &eacute;galement une dimension syst&egrave;me et services, avec le d&eacute;ploiement de Moodle et Samba sur un serveur Linux d&eacute;di&eacute;. Cette approche globale illustre ma capacit&eacute; &agrave; relier infrastructure r&eacute;seau, services applicatifs et besoins utilisateurs, dans une logique proche des environnements professionnels.',
                            '<strong>Comp&eacute;tences d&eacute;velopp&eacute;es :</strong>'
                        ],
                        list: [
                            'Segmentation du r&eacute;seau en VLAN et mise en place de trunks.',
                            'Routage inter-VLAN via router-on-a-stick.',
                            'Attribution d&rsquo;adresses avec DHCP sur plusieurs sous-r&eacute;seaux.',
                            'Conception d&rsquo;un plan d&rsquo;adressage IP coh&eacute;rent.',
                            'D&eacute;ploiement de services r&eacute;seau Linux (Moodle, Samba).'
                        ]
                    },
                    'exp-pfsense': {
                        title: 'SAE 2.01 : Construction d&rsquo;un r&eacute;seau d&rsquo;entreprise',
                        texts: [
                            'Ce projet, l&rsquo;un des plus structurants de ma premi&egrave;re ann&eacute;e, m&rsquo;a permis de concevoir et d&eacute;ployer une infrastructure r&eacute;seau compl&egrave;te, de la phase de conception jusqu&rsquo;&agrave; la mise en production. Il a jou&eacute; un r&ocirc;le cl&eacute; dans la consolidation de mes comp&eacute;tences et la validation de mon socle technique.',
                            'L&rsquo;architecture repose sur une topologie segment&eacute;e en VLAN (Direction, Gestion, ComTech), un plan d&rsquo;adressage structur&eacute;, des trunks et le routage inter-VLAN. Les services essentiels (DHCP, HTTP, FTP, SSH) ont &eacute;t&eacute; d&eacute;ploy&eacute;s sur un serveur Debian.',
                            'La dimension s&eacute;curit&eacute; occupe une place centrale, avec l&rsquo;int&eacute;gration de pfSense pour le filtrage LAN/DMZ/WAN, la mise en &oelig;uvre du NAT et des r&egrave;gles de s&eacute;curit&eacute; adapt&eacute;es, valid&eacute;es par des tests de connectivit&eacute;. Ce projet illustre une approche compl&egrave;te, proche des environnements professionnels, alliant r&eacute;seau, services et s&eacute;curit&eacute;.',
                            '<strong>Comp&eacute;tences d&eacute;velopp&eacute;es :</strong>'
                        ],
                        list: [
                            'Conception d&rsquo;une architecture r&eacute;seau d&rsquo;entreprise compl&egrave;te.',
                            'Configuration des VLAN, trunks et routage inter-VLAN.',
                            'Mise en place des services DHCP, HTTP, FTP et SSH.',
                            'Param&eacute;trage du pare-feu pfSense, NAT et r&egrave;gles.',
                            'Validation de la connectivit&eacute; par des tests.'
                        ]
                    },
                    'exp-ad': {
                        title: 'Audit de s&eacute;curit&eacute; Active Directory',
                        texts: [
                            'Ce projet porte sur la r&eacute;alisation d&rsquo;un audit de s&eacute;curit&eacute; Active Directory visant &agrave; &eacute;valuer la posture de s&eacute;curit&eacute; globale d&rsquo;un syst&egrave;me d&rsquo;information. Il a permis d&rsquo;identifier les principales faiblesses de configuration, d&rsquo;analyser les risques associ&eacute;s et de mesurer l&rsquo;&eacute;cart avec les bonnes pratiques en vigueur.',
                            'L&rsquo;analyse met en &eacute;vidence plusieurs vuln&eacute;rabilit&eacute;s critiques impactant la gestion des comptes &agrave; privil&egrave;ges, la r&eacute;silience de l&rsquo;infrastructure et la capacit&eacute; de d&eacute;tection des incidents. &Agrave; l&rsquo;issue de l&rsquo;audit, un plan d&rsquo;action prioris&eacute; a &eacute;t&eacute; d&eacute;fini afin de r&eacute;duire rapidement les risques majeurs et d&rsquo;inscrire l&rsquo;infrastructure dans une d&eacute;marche d&rsquo;am&eacute;lioration continue.',
                            'Ce projet illustre une approche m&eacute;thodique de l&rsquo;audit de s&eacute;curit&eacute;, alliant analyse technique, &eacute;valuation des risques et recommandations op&eacute;rationnelles, dans une logique proche des environnements professionnels.',
                            '<strong>Comp&eacute;tences d&eacute;velopp&eacute;es :</strong>'
                        ],
                        list: [
                            'Application d&rsquo;une m&eacute;thodologie d&rsquo;audit de s&eacute;curit&eacute; AD.',
                            'Utilisation de PingCastle pour l&rsquo;analyse.',
                            'Identification et priorisation des vuln&eacute;rabilit&eacute;s AD.'
                        ]
                    },
                    'exp-siem': {
                        title: 'SIEM &amp; Supervision',
                        texts: [
                            'Ce projet correspond &agrave; une SAE de BUT3 centr&eacute;e sur la s&eacute;curisation et la supervision d&rsquo;une infrastructure SI, inspir&eacute;e d&rsquo;un environnement r&eacute;aliste. L&rsquo;objectif : concevoir une architecture coh&eacute;rente, appliquer une logique de d&eacute;fense en profondeur, puis valider la d&eacute;tection et la remont&eacute;e d&rsquo;alertes sur l&rsquo;ensemble du p&eacute;rim&egrave;tre.',
                            'L&rsquo;infrastructure s&rsquo;appuie sur une segmentation r&eacute;seau et un filtrage p&eacute;rim&eacute;trique via pare-feu, avec une matrice de flux ma&icirc;tris&eacute;e et une exposition minimale des services. C&ocirc;t&eacute; supervision, une plateforme de collecte et visualisation des logs a &eacute;t&eacute; d&eacute;ploy&eacute;e, avec un reverse proxy s&eacute;curisant l&rsquo;acc&egrave;s aux tableaux de bord.',
                            'Sur la partie services, une VM applicative h&eacute;berge des composants conteneuris&eacute;s (dont un service collaboratif), int&eacute;grant d&egrave;s la conception la centralisation des journaux et une surveillance runtime pour d&eacute;tecter des comportements suspects. Enfin, le projet met en place un SIEM pour corr&eacute;ler les &eacute;v&eacute;nements, qualifier les alertes et d&eacute;clencher des notifications, afin d&rsquo;am&eacute;liorer la r&eacute;activit&eacute; de l&rsquo;&eacute;quipe.',
                            'Ce travail illustre une approche compl&egrave;te m&ecirc;lant r&eacute;seau, s&eacute;curit&eacute;, supervision et exploitation, avec une logique de projet proche des pratiques professionnelles.',
                            '<strong>Comp&eacute;tences d&eacute;velopp&eacute;es :</strong>'
                        ],
                        list: [
                            'Centralisation et corr&eacute;lation des logs.',
                            'Mise en place d&rsquo;alertes et suivi des incidents.',
                            'Cr&eacute;ation de dashboards de supervision avec Grafana.',
                            'S&eacute;curisation p&eacute;rim&eacute;trique via OPNsense.'
                        ]
                    },
                    'exp-waf': {
                        title: 'WAF &amp; D&eacute;tection',
                        texts: [
                            'Ce projet (SAE5.Cyber.03 &ndash; TP Wazuh) vise &agrave; mettre en place une supervision et une s&eacute;curisation avanc&eacute;es d&rsquo;un syst&egrave;me d&rsquo;information. L&rsquo;objectif est de centraliser les logs, d&eacute;tecter rapidement les comportements anormaux et am&eacute;liorer la r&eacute;action face aux incidents.',
                            'L&rsquo;environnement d&eacute;ploy&eacute; s&rsquo;appuie sur un r&eacute;seau structur&eacute; autour d&rsquo;un pare-feu OPNsense, int&eacute;grant un serveur Active Directory, un serveur Linux h&eacute;bergeant des services web, et un serveur Wazuh charg&eacute; de collecter et analyser les &eacute;v&eacute;nements.',
                            'Le projet inclut la cr&eacute;ation d&rsquo;un dashboard de supervision, la configuration des services de s&eacute;curit&eacute; c&ocirc;t&eacute; pare-feu (filtrage et protection web) et l&rsquo;ajout d&rsquo;un syst&egrave;me d&rsquo;alerting permettant de recevoir des notifications en temps r&eacute;el. La solution a &eacute;t&eacute; valid&eacute;e par des tests simulant des activit&eacute;s malveillantes.',
                            'Ce travail d&eacute;montre une approche compl&egrave;te combinant r&eacute;seau, supervision, s&eacute;curit&eacute; et alerting, avec une logique directement applicable en environnement professionnel.',
                            '<strong>Comp&eacute;tences d&eacute;velopp&eacute;es :</strong>'
                        ],
                        list: [
                            'D&eacute;ploiement d&rsquo;un WAF et protection web.',
                            'Configuration et ajustement des r&egrave;gles de s&eacute;curit&eacute;.',
                            'R&eacute;alisation de tests de s&eacute;curit&eacute; applicative.',
                            'Centralisation des logs et analyse des &eacute;v&eacute;nements.',
                            'Mise en place d&rsquo;un dashboard et d&rsquo;un syst&egrave;me d&rsquo;alerting.'
                        ]
                    },
                    'exp-ctf': {
                        title: 'CTF &amp; Pentest',
                        texts: [
                            'S&eacute;rie d&rsquo;exercices sur machines d&rsquo;entra&icirc;nement (Machine 1 &agrave; 11) pour appliquer les bases du pentest : identification de services, faiblesses de configuration et validation par sc&eacute;narios contr&ocirc;l&eacute;s (reconnaissance &rarr; exploitation &rarr; &eacute;l&eacute;vation de privil&egrave;ges &rarr; flags).',
                            'Travaux vari&eacute;s : exploration web (CMS, r&eacute;pertoires, formulaires), analyse de fichiers sensibles, r&eacute;cup&eacute;ration d&rsquo;identifiants, et escalade de privil&egrave;ges via erreurs de configuration ou droits excessifs.',
                            'R&eacute;sultat : progression des r&eacute;flexes d&rsquo;analyse, lecture d&rsquo;indices, et adoption d&rsquo;une d&eacute;marche structur&eacute;e et reproductible.',
                            '<strong>Comp&eacute;tences d&eacute;velopp&eacute;es :</strong>'
                        ],
                        list: [
                            'Application d&rsquo;une m&eacute;thodologie de pentest compl&egrave;te.',
                            'Utilisation d&rsquo;OSINT pour la reconnaissance.',
                            'Exploitation de failles et &eacute;l&eacute;vation de privil&egrave;ges.',
                            'R&eacute;daction d&rsquo;un reporting clair et structur&eacute;.'
                        ]
                    },
                    'exp-stage-telecom': {
                        title: 'Stage en T&eacute;l&eacute;com &amp; Infrastructure R&eacute;seau',
                        texts: [
                            'Ce rapport pr&eacute;sente mon stage de huit semaines r&eacute;alis&eacute; au sein de l&rsquo;entreprise ERCOM SAS, sp&eacute;cialis&eacute;e en t&eacute;l&eacute;phonie d&rsquo;entreprise, r&eacute;seaux et infrastructures de communication. Cette immersion m&rsquo;a permis de mettre en pratique mes connaissances th&eacute;oriques dans un contexte professionnel r&eacute;el, &agrave; travers des missions vari&eacute;es allant de l&rsquo;installation et la supervision de syst&egrave;mes de t&eacute;l&eacute;phonie IP &agrave; la maintenance d&rsquo;infrastructures r&eacute;seau et au c&acirc;blage informatique. Cette exp&eacute;rience a renforc&eacute; mes comp&eacute;tences techniques, mon autonomie et ma compr&eacute;hension des exigences du terrain, tout en confirmant mon int&eacute;r&ecirc;t pour les m&eacute;tiers des r&eacute;seaux et t&eacute;l&eacute;communications.',
                            '<strong>Comp&eacute;tences d&eacute;velopp&eacute;es :</strong>'
                        ],
                        list: [
                            'Mise en &oelig;uvre et maintenance de solutions VoIP.',
                            'Interventions terrain et support utilisateurs.',
                            'Supervision et r&eacute;solution de probl&egrave;mes r&eacute;seau.',
                            'Maintenance pr&eacute;ventive et corrective des &eacute;quipements.'
                        ]
                    },
                    'exp-docker': {
                        title: 'Supervision des conteneurs Docker',
                        texts: [
                            'Ce TP de supervision repose sur une cha&icirc;ne d&rsquo;observabilit&eacute; moderne d&eacute;ploy&eacute;e avec Docker et Docker Compose, garantissant une infrastructure reproductible et facile &agrave; maintenir. Les services supervis&eacute;s incluent notamment une base PostgreSQL et plusieurs conteneurs applicatifs.',
                            'La collecte et l&rsquo;analyse des donn&eacute;es sont assur&eacute;es par Prometheus et cAdvisor pour les m&eacute;triques syst&egrave;me et conteneurs, ainsi que par Loki et Grafana Alloy pour la centralisation et l&rsquo;exploitation des logs. Les requ&ecirc;tes PromQL, LogQL et SQL permettent une analyse fine et corr&eacute;l&eacute;e du comportement des services.',
                            'La visualisation et la prise de d&eacute;cision s&rsquo;appuient sur Grafana, &agrave; travers des tableaux de bord dynamiques et des indicateurs cl&eacute;s, tandis que Alertmanager et des webhooks Discord assurent un syst&egrave;me d&rsquo;alerte r&eacute;actif, facilitant la d&eacute;tection et la gestion rapide des incidents.',
                            '<strong>Comp&eacute;tences d&eacute;velopp&eacute;es :</strong>'
                        ],
                        list: [
                            'D&eacute;ploiement et orchestration de services avec Docker et Compose.',
                            'Supervision via Grafana et tableaux de bord.',
                            'Collecte de m&eacute;triques avec Prometheus et cAdvisor.',
                            'Centralisation des logs avec Loki et Alloy.',
                            'Analyse des donn&eacute;es via PromQL, LogQL et SQL.',
                            'Mise en place d&rsquo;alertes avec Alertmanager et webhooks.',
                            'Monitoring des services PostgreSQL et conteneurs.',
                            'Gestion d&rsquo;environnements Linux pour la supervision.'
                        ]
                    }
                }
            },
            contact: {
                title: 'Contact',
                cards: ['T&eacute;l&eacute;phone', 'Email', 'LinkedIn']
            },
            footer: {
                copy: '&#169; Rohan ALAMELOU. Tous droits r&eacute;serv&eacute;s'
            },
            modal: {
                label: 'Aper&ccedil;u du document',
                close: 'Fermer',
                title: 'Document'
            },
            langButton: {
                text: 'EN',
                aria: 'Passer en anglais'
            }
        },
        en: {
            nav: ['Home', 'Profile', 'Skills', 'Projects', 'Courses', 'Contact'],
            home: {
                greet: 'Hello,<br>I am',
                contact: 'Contact'
            },
            about: {
                title: 'Profile',
                subtitle: 'About me',
                extra: [
                    '<strong>Languages:</strong> French, English (C1 level)',
                    '<strong>Soft skills:</strong> Adaptability, teamwork, problem solving, perseverance',
                    '<strong>Certifications:</strong> EF SET (B2/C1), ANSSI MOOC',
                    '<strong>Interests:</strong> Technology, sports, video games'
                ],
                paragraphs: [
                    'Currently pursuing a BUT in Networks &amp; Telecommunications (Cybersecurity track), I work at the intersection of networks and cybersecurity.',
                    'I study and practice daily to design, deploy, and secure technical architectures, from Docker to SIEM, including monitoring, log analysis, and incident detection.',
                    'Through my projects, I develop a rigorous and methodical approach with a clear goal: understand systems in depth to better protect them.',
                    'Automation, monitoring, resilience, and traceability are at the core of my approach.',
                    'This portfolio reflects my evolution and provides a concrete record of my steady progress in these fields. It highlights my networking and cybersecurity projects, as well as my professional experiences, aligned with my mid-term ambition: to move toward freelance work specialized in networks and cybersecurity.'
                ],
                cv: 'View my CV'
            },
            skills: {
                title: 'Skills',
                groups: [
                    {
                        title: 'Cybersecurity',
                        items: [
                            'Network defense with OPNsense, pfSense, and Stormshield firewalls',
                            'Pentesting, Burp Suite, and Kali Linux',
                            'NGINX WAF, IDS/IPS, and architecture hardening',
                            'Security audits, EBIOS, and incident analysis',
                            'SIEM/Wazuh for correlation and detection'
                        ],
                        levelLabel: 'Expertise',
                        levelValue: 'Advanced'
                    },
                    {
                        title: 'Networking',
                        items: [
                            'VLAN design and segmentation, addressing plan',
                            'Dynamic routing OSPF/BGP',
                            'Network services DHCP/DNS',
                            'MPLS interconnection and inter-site routing',
                            'Firewalls and filtering (Stormshield, OPNsense, pfSense)'
                        ],
                        levelLabel: 'Expertise',
                        levelValue: 'Advanced'
                    },
                    {
                        title: 'Monitoring',
                        items: [
                            'Grafana stack for dashboards and alerting',
                            'Log centralization and correlation',
                            'Wazuh for detection and security monitoring',
                            'Alert setup and incident tracking'
                        ],
                        levelLabel: 'Expertise',
                        levelValue: 'Intermediate'
                    },
                    {
                        title: 'Virtualization &amp; Systems',
                        items: [
                            'Linux (Debian, Kali) &amp; Windows Server AD/DNS',
                            'VirtualBox and test environments',
                            'Docker containers and lightweight orchestration',
                            'Service management and baseline hardening'
                        ],
                        levelLabel: 'Expertise',
                        levelValue: 'Intermediate'
                    }
                ]
            },
            parcours: {
                title: 'Background',
                educationHeading: 'Education',
                educationItems: [
                    {
                        text: 'High School Diploma',
                        list: ['Specialization: Mathematics and Computer Science (NSI)']
                    },
                    {
                        text: 'BUT Networks &amp; Telecoms',
                        list: ['Specialization: Cybersecurity']
                    }
                ],
                experienceHeading: 'Professional Experience',
                experienceItems: [
                    {
                        text: 'Internship in Telephony and Networks',
                        list: ['Ercom: VoIP and network technician']
                    },
                    {
                        text: 'Internship at the University of the West of England',
                        list: ['Cybersecurity research']
                    }
                ]
            },
            projects: {
                title: 'Projects',
                overlay: 'View report',
                techTitle: 'Technologies/Services used',
                items: {
                    'exp-moodle': {
                        title: 'Deploying Moodle &amp; Samba services',
                        texts: [
                            'This project, completed in my first year, was a foundational milestone in my journey. It strengthened my networking and system administration skills while demonstrating my ability to design and deploy a complete, structured, and operational infrastructure.<br><br>It is based on a multi-VLAN architecture between a main site and a branch: trunks, 802.1Q sub-interfaces, a coherent addressing plan, inter-VLAN routing, and static inter-site routes. Each VLAN has its own DHCP pool, ensuring efficient IP management.<br><br>The project also includes a systems and services dimension, with Moodle and Samba deployed on a dedicated Linux server. This holistic approach shows my ability to connect network infrastructure, application services, and user needs in a way that mirrors professional environments.',
                            '<strong>Skills developed:</strong>'
                        ],
                        list: [
                            'VLAN segmentation and trunk setup.',
                            'Inter-VLAN routing via router-on-a-stick.',
                            'Address assignment with DHCP across multiple subnets.',
                            'Design of a coherent IP addressing plan.',
                            'Deployment of Linux network services (Moodle, Samba).'
                        ]
                    },
                    'exp-pfsense': {
                        title: 'SAE 2.01: Building an enterprise network',
                        texts: [
                            'This project, one of the most structuring in my first year, allowed me to design and deploy a complete network infrastructure, from the design phase to production. It played a key role in consolidating my skills and validating my technical foundation.',
                            'The architecture relies on a segmented VLAN topology (Management, Operations, ComTech), a structured addressing plan, trunks, and inter-VLAN routing. Essential services (DHCP, HTTP, FTP, SSH) were deployed on a Debian server.',
                            'Security is central, with pfSense integrated for LAN/DMZ/WAN filtering, NAT implementation, and security rules validated by connectivity tests. This project illustrates a full approach, close to professional environments, combining networking, services, and security.',
                            '<strong>Skills developed:</strong>'
                        ],
                        list: [
                            'Design of a complete enterprise network architecture.',
                            'VLAN, trunk, and inter-VLAN routing configuration.',
                            'Deployment of DHCP, HTTP, FTP, and SSH services.',
                            'pfSense firewall setup, NAT, and rules.',
                            'Connectivity validation through testing.'
                        ]
                    },
                    'exp-ad': {
                        title: 'Active Directory security audit',
                        texts: [
                            'This project focuses on conducting an Active Directory security audit to evaluate the overall security posture of an information system. It identified key configuration weaknesses, analyzed associated risks, and measured the gap with current best practices.',
                            'The analysis highlights several critical vulnerabilities affecting privileged account management, infrastructure resilience, and incident detection capability. At the end of the audit, a prioritized action plan was defined to quickly reduce major risks and embed the infrastructure in a continuous improvement approach.',
                            'This project demonstrates a methodical approach to security auditing, combining technical analysis, risk assessment, and operational recommendations in a way that mirrors professional environments.',
                            '<strong>Skills developed:</strong>'
                        ],
                        list: [
                            'Applying an AD security audit methodology.',
                            'Using PingCastle for analysis.',
                            'Identifying and prioritizing AD vulnerabilities.'
                        ]
                    },
                    'exp-siem': {
                        title: 'SIEM &amp; Monitoring',
                        texts: [
                            'This project is a BUT3 SAE focused on securing and monitoring an information system infrastructure inspired by a realistic environment. The goal: design a coherent architecture, apply defense-in-depth, and validate detection and alerting across the entire perimeter.',
                            'The infrastructure relies on network segmentation and perimeter filtering via firewall, with a controlled flow matrix and minimal service exposure. On the monitoring side, a log collection and visualization platform was deployed, with a reverse proxy securing access to dashboards.',
                            'On the services side, an application VM hosts containerized components (including a collaboration service), integrating log centralization and runtime monitoring from the design stage to detect suspicious behaviors. Finally, the project sets up a SIEM to correlate events, qualify alerts, and trigger notifications, improving team responsiveness.',
                            'This work illustrates a complete approach combining networking, security, monitoring, and operations, aligned with professional practices.',
                            '<strong>Skills developed:</strong>'
                        ],
                        list: [
                            'Log centralization and correlation.',
                            'Alert setup and incident tracking.',
                            'Creating monitoring dashboards with Grafana.',
                            'Perimeter security with OPNsense.'
                        ]
                    },
                    'exp-waf': {
                        title: 'WAF &amp; Detection',
                        texts: [
                            'This project (SAE5.Cyber.03 - Wazuh lab) aims to implement advanced monitoring and security for an information system. The objective is to centralize logs, quickly detect abnormal behavior, and improve incident response.',
                            'The deployed environment is built around an OPNsense firewall, integrating an Active Directory server, a Linux server hosting web services, and a Wazuh server responsible for collecting and analyzing events.',
                            'The project includes creating a monitoring dashboard, configuring firewall-side security services (filtering and web protection), and adding an alerting system to receive real-time notifications. The solution was validated by tests simulating malicious activity.',
                            'This work demonstrates a complete approach combining networking, monitoring, security, and alerting, directly applicable to professional environments.',
                            '<strong>Skills developed:</strong>'
                        ],
                        list: [
                            'Deploying a WAF and web protection.',
                            'Configuring and tuning security rules.',
                            'Performing application security tests.',
                            'Log centralization and event analysis.',
                            'Setting up a dashboard and alerting system.'
                        ]
                    },
                    'exp-ctf': {
                        title: 'CTF &amp; Pentest',
                        texts: [
                            'A series of exercises on training machines (Machines 1 to 11) to apply pentest fundamentals: service identification, configuration weaknesses, and validation through controlled scenarios (reconnaissance &rarr; exploitation &rarr; privilege escalation &rarr; flags).',
                            'Various tasks: web exploration (CMS, directories, forms), sensitive file analysis, credential recovery, and privilege escalation via misconfigurations or excessive rights.',
                            'Result: stronger analysis reflexes, clue reading, and adoption of a structured and repeatable methodology.',
                            '<strong>Skills developed:</strong>'
                        ],
                        list: [
                            'Applying a complete pentest methodology.',
                            'Using OSINT for reconnaissance.',
                            'Exploiting vulnerabilities and escalating privileges.',
                            'Writing clear, structured reports.'
                        ]
                    },
                    'exp-stage-telecom': {
                        title: 'Telecom &amp; Network Infrastructure Internship',
                        texts: [
                            'This report presents my eight-week internship at ERCOM SAS, specialized in business telephony, networks, and communication infrastructure. This immersion allowed me to apply my theoretical knowledge in a real professional context, through missions ranging from installing and supervising IP telephony systems to maintaining network infrastructure and structured cabling. This experience strengthened my technical skills, autonomy, and understanding of field requirements, while confirming my interest in network and telecommunications careers.',
                            '<strong>Skills developed:</strong>'
                        ],
                        list: [
                            'Deploying and maintaining VoIP solutions.',
                            'On-site interventions and user support.',
                            'Monitoring and resolving network issues.',
                            'Preventive and corrective equipment maintenance.'
                        ]
                    },
                    'exp-docker': {
                        title: 'Docker Container Monitoring',
                        texts: [
                            'This monitoring lab relies on a modern observability chain deployed with Docker and Docker Compose, ensuring a reproducible and easy-to-maintain infrastructure. The monitored services include a PostgreSQL database and several application containers.',
                            'Data collection and analysis are handled by Prometheus and cAdvisor for system and container metrics, as well as Loki and Grafana Alloy for log centralization and exploitation. PromQL, LogQL, and SQL queries enable fine-grained, correlated analysis of service behavior.',
                            'Visualization and decision-making rely on Grafana through dynamic dashboards and key indicators, while Alertmanager and Discord webhooks ensure a responsive alerting system, facilitating quick incident detection and handling.',
                            '<strong>Skills developed:</strong>'
                        ],
                        list: [
                            'Deploying and orchestrating services with Docker and Compose.',
                            'Monitoring with Grafana and dashboards.',
                            'Collecting metrics with Prometheus and cAdvisor.',
                            'Log centralization with Loki and Alloy.',
                            'Data analysis with PromQL, LogQL, and SQL.',
                            'Alerting setup with Alertmanager and webhooks.',
                            'Monitoring PostgreSQL services and containers.',
                            'Managing Linux environments for monitoring.'
                        ]
                    }
                }
            },
            contact: {
                title: 'Contact',
                cards: ['Phone', 'Email', 'LinkedIn']
            },
            footer: {
                copy: '&#169; Rohan ALAMELOU. All rights reserved'
            },
            modal: {
                label: 'Document preview',
                close: 'Close',
                title: 'Document'
            },
            langButton: {
                text: 'FR',
                aria: 'Switch to French'
            }
        }
    }

    const applyProjectTranslations = (container, data, shared) => {
        if (!container) return
        setHTML(container.querySelector('.experience__title'), data.title)
        const texts = container.querySelectorAll('.experience__text')
        data.texts.forEach((text, index) => setHTML(texts[index], text))
        const listItems = container.querySelectorAll('.experience__list li')
        data.list.forEach((text, index) => setHTML(listItems[index], text))
        setHTML(container.querySelector('.experience__media-overlay'), shared.overlay)
        setHTML(container.querySelector('.experience__tech-title'), shared.techTitle)
    }

    const setLanguage = (lang) => {
        currentLang = lang
        const t = translations[lang]

        document.documentElement.lang = lang

        const navLinks = document.querySelectorAll('.nav__list .nav__link')
        t.nav.forEach((label, index) => setHTML(navLinks[index], label))

        setHTML(document.querySelector('.home__title-greet'), t.home.greet)
        setHTML(document.querySelector('#home .button'), t.home.contact)

        setHTML(document.querySelector('#about .section-title'), t.about.title)
        setHTML(document.querySelector('#about .about__subtitle'), t.about.subtitle)
        const aboutExtras = document.querySelectorAll('#about .about__extra .about__text')
        t.about.extra.forEach((text, index) => setHTML(aboutExtras[index], text))
        const aboutParagraphs = document.querySelectorAll('#about .about__content .about__text')
        t.about.paragraphs.forEach((text, index) => setHTML(aboutParagraphs[index], text))
        setHTML(document.querySelector('#about .button--outline'), t.about.cv)

        setHTML(document.querySelector('#skills .section-title'), t.skills.title)
        const skillGroups = document.querySelectorAll('#skills .skills__group')
        t.skills.groups.forEach((group, index) => {
            const groupEl = skillGroups[index]
            if (!groupEl) return
            setHTML(groupEl.querySelector('.skills__subtitle'), group.title)
            const listItems = groupEl.querySelectorAll('.skills__list li')
            group.items.forEach((item, itemIndex) => setHTML(listItems[itemIndex], item))
            setHTML(groupEl.querySelector('.skills__name'), group.levelLabel)
            setHTML(groupEl.querySelector('.skills__percentage'), group.levelValue)
        })

        setHTML(document.querySelector('#parcours .section-title'), t.parcours.title)
        setHTML(document.querySelector('#parcours .parcours__subheading'), t.parcours.educationHeading)
        const educationItems = document.querySelectorAll('#parcours .parcours__item')
        t.parcours.educationItems.forEach((item, index) => {
            const itemEl = educationItems[index]
            if (!itemEl) return
            setHTML(itemEl.querySelector('.parcours__text'), item.text)
            const listItems = itemEl.querySelectorAll('.parcours__sublist li')
            item.list.forEach((text, listIndex) => setHTML(listItems[listIndex], text))
        })

        setHTML(document.querySelector('#experience-pro .parcours__subheading'), t.parcours.experienceHeading)
        const experienceItems = document.querySelectorAll('#experience-pro .parcours__item')
        t.parcours.experienceItems.forEach((item, index) => {
            const itemEl = experienceItems[index]
            if (!itemEl) return
            setHTML(itemEl.querySelector('.parcours__text'), item.text)
            const listItems = itemEl.querySelectorAll('.parcours__sublist li')
            item.list.forEach((text, listIndex) => setHTML(listItems[listIndex], text))
        })

        setHTML(document.querySelector('#experience-details .section-title'), t.projects.title)
        Object.entries(t.projects.items).forEach(([id, data]) => {
            const container = document.getElementById(id)
            applyProjectTranslations(container, data, t.projects)
        })

        setHTML(document.querySelector('#contact .section-title'), t.contact.title)
        const contactCards = document.querySelectorAll('#contact .contact__title')
        t.contact.cards.forEach((text, index) => setHTML(contactCards[index], text))

        setHTML(document.querySelector('.footer__copy'), t.footer.copy)

        const modalDialog = document.querySelector('.pdf-modal__dialog')
        if (modalDialog) modalDialog.setAttribute('aria-label', t.modal.label)
        const modalClose = document.querySelector('.pdf-modal__close')
        if (modalClose) {
            modalClose.setAttribute('aria-label', t.modal.close)
            modalClose.textContent = 'X'
        }
        const modalFrame = document.querySelector('.pdf-modal__frame')
        if (modalFrame) modalFrame.setAttribute('title', t.modal.title)

        if (langButton) {
            langButton.textContent = t.langButton.text
            langButton.setAttribute('aria-label', t.langButton.aria)
        }
    }

    const init = () => {
        if (!langButton) return
        setLanguage(currentLang)
        langButton.addEventListener('click', () => {
            document.body.classList.add('language-switch')
            setTimeout(() => {
                setLanguage(currentLang === 'fr' ? 'en' : 'fr')
                document.body.classList.remove('language-switch')
            }, 260)
        })
    }

    return { init }
})()
