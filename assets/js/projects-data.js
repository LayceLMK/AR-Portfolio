/*
 * ===== PROJETS & EXPÉRIENCES — DONNÉES =====
 * Pour modifier un projet, change le texte ici. Chaque texte existe en français (fr) et en anglais (en).
 * docs : les comptes rendus (fichiers dans assets/pdf/). Mets file: null si le compte rendu n'est pas en ligne.
 */

window.PROJECTS = [
    {
        id: 'siem',
        wide: true,
        cover: 'assets/img/wazuh_grafana.jpg',
        context: { fr: 'SAE · BUT 3', en: 'Project · BUT year 3' },
        title: { fr: 'SIEM & supervision <em>d’un SI</em>', en: 'SIEM & monitoring <em>of an IS</em>' },
        short: {
            fr: 'Défense en profondeur d’une infrastructure réaliste : segmentation, filtrage périmétrique, centralisation des logs, détection runtime et corrélation dans un SIEM.',
            en: 'Defence in depth for a realistic infrastructure: segmentation, perimeter filtering, log centralisation, runtime detection and SIEM correlation.'
        },
        tags: ['Wazuh', 'Grafana', 'Loki', 'Falco', 'OPNsense'],
        kpis: [
            { n: '8', l: { fr: 'outils intégrés', en: 'tools integrated' } },
            { n: 'SIEM', l: { fr: 'corrélation & alertes', en: 'correlation & alerts' } }
        ],
        body: {
            fr: [
                'SAE de BUT 3 centrée sur la sécurisation et la supervision d’une infrastructure SI inspirée d’un environnement réaliste. Objectif : concevoir une architecture cohérente, appliquer une logique de défense en profondeur, puis valider la détection et la remontée d’alertes sur tout le périmètre.',
                'L’infrastructure s’appuie sur une segmentation réseau et un filtrage périmétrique via pare-feu, avec une matrice de flux maîtrisée et une exposition minimale des services. Côté supervision, une plateforme de collecte et de visualisation des logs a été déployée, avec un reverse proxy qui sécurise l’accès aux tableaux de bord.',
                'Une VM applicative héberge des composants conteneurisés (dont un service collaboratif), avec dès la conception la centralisation des journaux et une surveillance runtime pour détecter les comportements suspects. Un SIEM corrèle enfin les événements, qualifie les alertes et déclenche des notifications.'
            ],
            en: [
                'A year-3 project focused on securing and monitoring an information system inspired by a realistic environment. The goal: design a coherent architecture, apply defence in depth, then validate detection and alerting across the whole perimeter.',
                'The infrastructure relies on network segmentation and perimeter filtering via a firewall, with a controlled flow matrix and minimal service exposure. For monitoring, a log collection and visualisation platform was deployed, with a reverse proxy securing access to dashboards.',
                'An application VM hosts containerised components (including a collaboration service), with log centralisation and runtime monitoring built in from the start to detect suspicious behaviour. Finally, a SIEM correlates events, qualifies alerts and triggers notifications.'
            ]
        },
        skills: {
            fr: ['Centralisation et corrélation des logs', 'Mise en place d’alertes et suivi des incidents', 'Tableaux de bord de supervision avec Grafana', 'Sécurisation périmétrique via OPNsense', 'Détection runtime sur conteneurs (Falco)'],
            en: ['Log centralisation and correlation', 'Alerting and incident tracking', 'Monitoring dashboards with Grafana', 'Perimeter security with OPNsense', 'Runtime detection on containers (Falco)']
        },
        tech: [['Wazuh', 'wazuh.png'], ['Grafana', 'grafana.jpg'], ['Loki', 'loki.png'], ['Falco', 'falco.png'], ['Docker', 'docker.png'], ['PostgreSQL', 'postgres.png'], ['Nextcloud', 'nextcloud.png'], ['OPNsense', 'opnsense.png']],
        docs: [{ label: { fr: 'Compte rendu SAE SIEM', en: 'SIEM project report' }, file: null }]
    },
    {
        id: 'waf',
        cover: 'assets/img/WAF.jpg',
        context: { fr: 'SAE5.Cyber.03 · BUT 3', en: 'SAE5.Cyber.03 · BUT year 3' },
        title: { fr: 'WAF & détection <em>d’intrusions</em>', en: 'WAF & intrusion <em>detection</em>' },
        short: {
            fr: 'Pare-feu OPNsense, Active Directory et Wazuh : centraliser les logs, détecter vite les comportements anormaux et alerter en temps réel.',
            en: 'OPNsense firewall, Active Directory and Wazuh: centralise logs, quickly detect abnormal behaviour and alert in real time.'
        },
        tags: ['OPNsense', 'Wazuh', 'WAF'],
        kpis: [{ n: '3', l: { fr: 'serveurs dans le lab', en: 'servers in the lab' } }, { n: 'Temps réel', l: { fr: 'alerting', en: 'alerting' } }],
        body: {
            fr: [
                'Mise en place d’une supervision et d’une sécurisation avancées d’un système d’information : centraliser les logs, détecter rapidement les comportements anormaux et améliorer la réaction face aux incidents.',
                'L’environnement s’articule autour d’un pare-feu OPNsense, avec un serveur Active Directory, un serveur Linux hébergeant des services web et un serveur Wazuh qui collecte et analyse les événements.',
                'Le projet comprend un dashboard de supervision, la configuration des services de sécurité du pare-feu (filtrage et protection web) et un système d’alerting temps réel, validé par des tests simulant des activités malveillantes.'
            ],
            en: [
                'Advanced monitoring and hardening of an information system: centralise logs, quickly detect abnormal behaviour and improve incident response.',
                'The environment is built around an OPNsense firewall, with an Active Directory server, a Linux server hosting web services and a Wazuh server that collects and analyses events.',
                'The project includes a monitoring dashboard, configuration of the firewall’s security services (filtering and web protection) and a real-time alerting system, validated by tests simulating malicious activity.'
            ]
        },
        skills: {
            fr: ['Déploiement d’un WAF et protection web', 'Configuration et ajustement des règles de sécurité', 'Tests de sécurité applicative', 'Centralisation des logs et analyse des événements', 'Dashboard et système d’alerting'],
            en: ['Deploying a WAF and web protection', 'Configuring and tuning security rules', 'Application security testing', 'Log centralisation and event analysis', 'Dashboard and alerting system']
        },
        tech: [['OPNsense', 'opnsense.png'], ['Windows AD', 'ad.png'], ['Wazuh', 'wazuh.png']],
        docs: [{ label: { fr: 'Compte rendu SAE5.Cyber.03 — TP WAF', en: 'SAE5.Cyber.03 report — WAF lab' }, file: 'assets/pdf/SAE5.Cyber.03_TP_WAF.pdf', size: '2,8 Mo' }]
    },
    {
        id: 'audit-ad',
        cover: 'assets/img/pingcastle.jpg',
        context: { fr: 'Audit · BUT 3', en: 'Audit · BUT year 3' },
        title: { fr: 'Audit de sécurité <em>Active Directory</em>', en: '<em>Active Directory</em> security audit' },
        short: {
            fr: 'Évaluer la posture d’un SI, identifier les failles critiques et livrer un plan d’action priorisé, aligné sur les bonnes pratiques ANSSI et ISO 27000.',
            en: 'Assess an IS’s security posture, pinpoint critical weaknesses and deliver a prioritised action plan aligned with ANSSI and ISO 27000 best practice.'
        },
        tags: ['PingCastle', 'ANSSI', 'ISO 27000'],
        kpis: [{ n: 'Plan', l: { fr: 'd’action priorisé', en: 'prioritised actions' } }, { n: 'AD', l: { fr: 'comptes à privilèges', en: 'privileged accounts' } }],
        body: {
            fr: [
                'Audit de sécurité Active Directory visant à évaluer la posture de sécurité globale d’un système d’information : faiblesses de configuration, risques associés et écart avec les bonnes pratiques en vigueur.',
                'L’analyse met en évidence plusieurs vulnérabilités critiques touchant la gestion des comptes à privilèges, la résilience de l’infrastructure et la capacité de détection des incidents.',
                'Un plan d’action priorisé a été défini pour réduire rapidement les risques majeurs et inscrire l’infrastructure dans une démarche d’amélioration continue.'
            ],
            en: [
                'An Active Directory security audit to assess an information system’s overall security posture: configuration weaknesses, associated risks and the gap with current best practice.',
                'The analysis highlights several critical vulnerabilities affecting privileged account management, infrastructure resilience and incident detection capability.',
                'A prioritised action plan was defined to quickly reduce major risks and set the infrastructure on a path of continuous improvement.'
            ]
        },
        skills: {
            fr: ['Méthodologie d’audit de sécurité AD', 'Analyse avec PingCastle', 'Identification et priorisation des vulnérabilités', 'Recommandations opérationnelles'],
            en: ['AD security audit methodology', 'Analysis with PingCastle', 'Identifying and prioritising vulnerabilities', 'Operational recommendations']
        },
        tech: [['Windows AD', 'ad.png'], ['PingCastle', 'pingcastle_logo.png'], ['ISO 27000', 'iso.png'], ['ANSSI', 'annsi.png']],
        docs: [{ label: { fr: 'Rapport d’audit Active Directory', en: 'Active Directory audit report' }, file: 'assets/pdf/alamelou_rohan_audit.pdf', size: '6,5 Mo' }]
    },
    {
        id: 'ctf',
        cover: 'assets/img/ctf-image.jpg',
        context: { fr: 'Pentest · BUT 3', en: 'Pentest · BUT year 3' },
        title: { fr: 'CTF & <em>pentest</em>', en: 'CTF & <em>pentest</em>' },
        short: {
            fr: '11 machines d’entraînement attaquées de bout en bout : reconnaissance, exploitation, élévation de privilèges, flags — et un reporting structuré.',
            en: '11 training machines attacked end to end: reconnaissance, exploitation, privilege escalation, flags — and a structured report.'
        },
        tags: ['Kali Linux', 'OSINT', 'PrivEsc'],
        kpis: [{ n: '11', l: { fr: 'machines compromises', en: 'machines compromised' } }, { n: '4', l: { fr: 'phases d’attaque', en: 'attack phases' } }],
        body: {
            fr: [
                'Série d’exercices sur machines d’entraînement (machines 1 à 11) pour appliquer les bases du pentest : identification de services, faiblesses de configuration et validation par scénarios contrôlés (reconnaissance → exploitation → élévation de privilèges → flags).',
                'Travaux variés : exploration web (CMS, répertoires, formulaires), analyse de fichiers sensibles, récupération d’identifiants et escalade de privilèges via erreurs de configuration ou droits excessifs.',
                'Résultat : de meilleurs réflexes d’analyse, une lecture fine des indices et une démarche structurée et reproductible.'
            ],
            en: [
                'A series of exercises on training machines (1 to 11) applying pentest fundamentals: service identification, configuration weaknesses and validation through controlled scenarios (reconnaissance → exploitation → privilege escalation → flags).',
                'Varied work: web exploration (CMS, directories, forms), sensitive file analysis, credential recovery and privilege escalation through misconfigurations or excessive rights.',
                'Result: sharper analysis reflexes, careful reading of clues and a structured, repeatable methodology.'
            ]
        },
        skills: {
            fr: ['Méthodologie de pentest complète', 'OSINT pour la reconnaissance', 'Exploitation de failles et élévation de privilèges', 'Reporting clair et structuré'],
            en: ['Complete pentest methodology', 'OSINT for reconnaissance', 'Exploitation and privilege escalation', 'Clear, structured reporting']
        },
        tech: [['Kali Linux', 'kali.png'], ['WordPress', 'wordpress.png'], ['Shell', 'shell-logo.png']],
        docs: [{ label: { fr: 'Compte rendu CTF & pentest', en: 'CTF & pentest report' }, file: 'assets/pdf/Projet_CTF.pdf', size: '5,2 Mo' }]
    },
    {
        id: 'docker',
        cover: 'assets/img/thibault.jpg',
        context: { fr: 'TP · Supervision', en: 'Lab · Monitoring' },
        title: { fr: 'Observabilité <em>de conteneurs</em>', en: 'Container <em>observability</em>' },
        short: {
            fr: 'Chaîne complète Prometheus, Loki, Alloy et Grafana sous Docker Compose, avec alerting Alertmanager vers Discord.',
            en: 'A full Prometheus, Loki, Alloy and Grafana stack on Docker Compose, with Alertmanager alerts to Discord.'
        },
        tags: ['Docker', 'Prometheus', 'Grafana'],
        kpis: [{ n: '6', l: { fr: 'briques d’observabilité', en: 'observability components' } }, { n: '3', l: { fr: 'langages de requête', en: 'query languages' } }],
        body: {
            fr: [
                'TP de supervision reposant sur une chaîne d’observabilité moderne déployée avec Docker et Docker Compose, pour une infrastructure reproductible et facile à maintenir. Les services supervisés incluent une base PostgreSQL et plusieurs conteneurs applicatifs.',
                'Prometheus et cAdvisor collectent les métriques système et conteneurs ; Loki et Grafana Alloy centralisent les logs. Les requêtes PromQL, LogQL et SQL permettent une analyse fine et corrélée.',
                'Grafana porte la visualisation via des tableaux de bord dynamiques, tandis qu’Alertmanager et des webhooks Discord assurent un alerting réactif.'
            ],
            en: [
                'A monitoring lab built on a modern observability chain deployed with Docker and Docker Compose, for a reproducible, easy-to-maintain infrastructure. Monitored services include a PostgreSQL database and several application containers.',
                'Prometheus and cAdvisor collect system and container metrics; Loki and Grafana Alloy centralise logs. PromQL, LogQL and SQL queries enable fine-grained, correlated analysis.',
                'Grafana handles visualisation through dynamic dashboards, while Alertmanager and Discord webhooks provide responsive alerting.'
            ]
        },
        skills: {
            fr: ['Orchestration avec Docker et Compose', 'Métriques avec Prometheus et cAdvisor', 'Centralisation des logs avec Loki et Alloy', 'Requêtes PromQL, LogQL et SQL', 'Alerting Alertmanager et webhooks'],
            en: ['Orchestration with Docker and Compose', 'Metrics with Prometheus and cAdvisor', 'Log centralisation with Loki and Alloy', 'PromQL, LogQL and SQL queries', 'Alertmanager alerting and webhooks']
        },
        tech: [['Grafana', 'grafana.jpg'], ['Prometheus', 'prometheus.png'], ['Loki', 'loki.png'], ['Alloy', 'alloy.png'], ['Docker', 'docker.png'], ['PostgreSQL', 'postgres.png']],
        docs: [{ label: { fr: 'Compte rendu TP Grafana & Docker', en: 'Grafana & Docker lab report' }, file: 'assets/pdf/TP_Grafana_Docker.pdf', size: '2,5 Mo' }]
    },
    {
        id: 'sae201',
        cover: 'assets/img/pfsense-image.jpg',
        context: { fr: 'SAE 2.01 · BUT 1', en: 'SAE 2.01 · BUT year 1' },
        title: { fr: 'Réseau d’entreprise <em>sécurisé</em>', en: 'A <em>secured</em> enterprise network' },
        short: {
            fr: 'De la conception à la mise en production : VLAN, routage inter-VLAN, services Debian et filtrage LAN/DMZ/WAN avec pfSense.',
            en: 'From design to production: VLANs, inter-VLAN routing, Debian services and LAN/DMZ/WAN filtering with pfSense.'
        },
        tags: ['Cisco', 'pfSense', 'VLAN'],
        kpis: [{ n: '3', l: { fr: 'VLAN métiers', en: 'business VLANs' } }, { n: '4', l: { fr: 'services déployés', en: 'services deployed' } }],
        body: {
            fr: [
                'L’un des projets les plus structurants de ma première année : concevoir et déployer une infrastructure réseau complète, de la conception à la mise en production.',
                'L’architecture repose sur une topologie segmentée en VLAN (Direction, Gestion, ComTech), un plan d’adressage structuré, des trunks et le routage inter-VLAN. Les services essentiels (DHCP, HTTP, FTP, SSH) tournent sur un serveur Debian.',
                'La sécurité est centrale : pfSense assure le filtrage LAN/DMZ/WAN, le NAT et des règles adaptées, validées par des tests de connectivité.'
            ],
            en: [
                'One of the most formative projects of my first year: designing and deploying a complete network infrastructure, from design to production.',
                'The architecture relies on a VLAN-segmented topology (Management, Operations, ComTech), a structured addressing plan, trunks and inter-VLAN routing. Core services (DHCP, HTTP, FTP, SSH) run on a Debian server.',
                'Security is central: pfSense handles LAN/DMZ/WAN filtering, NAT and tailored rules, validated by connectivity tests.'
            ]
        },
        skills: {
            fr: ['Architecture réseau d’entreprise complète', 'VLAN, trunks et routage inter-VLAN', 'Services DHCP, HTTP, FTP et SSH', 'Pare-feu pfSense, NAT et règles', 'Validation par tests de connectivité'],
            en: ['Complete enterprise network architecture', 'VLANs, trunks and inter-VLAN routing', 'DHCP, HTTP, FTP and SSH services', 'pfSense firewall, NAT and rules', 'Validation through connectivity tests']
        },
        tech: [['Cisco', 'cisco.png'], ['pfSense', 'pfsense.png']],
        docs: [{ label: { fr: 'Compte rendu SAE 2.01', en: 'SAE 2.01 report' }, file: 'assets/pdf/SAE201.pdf', size: '6,0 Mo' }]
    }
]

/* Expériences professionnelles (le stage Ercom a son rapport en PDF) */
window.EXPERIENCES = [
    {
        id: 'uwe',
        feature: true,
        date: { fr: 'Mars → juin 2026 · 14 semaines', en: 'March → June 2026 · 14 weeks' },
        title: { fr: 'CyberReasoning : une IA locale <em>qui lit les logs d’attaque</em>', en: 'CyberReasoning: a local AI <em>that reads attack logs</em>' },
        org: { fr: 'Stage de recherche · University of the West of England, Bristol · Royaume-Uni', en: 'Research internship · University of the West of England, Bristol · United Kingdom' },
        tags: ['MITRE ATT&CK', 'auditd', 'LLM local', 'Recherche'],
        bullets: {
            fr: [
                'Question de recherche : un <b>petit modèle de langage, exécuté en local</b> sur du matériel grand public, peut-il reconnaître les <b>techniques MITRE ATT&CK</b> dans des logs Linux <b>auditd</b>, sans fine-tuning ?',
                'Conception d’un <b>pipeline déterministe</b> : filtrage par un catalogue de signatures (regex) puis classification par <b>Qwen 2.5 7B</b> via Ollama, température 0 et graine fixe pour des résultats <b>reproductibles</b>.',
                'Catalogue calibré <b>uniquement sur des sources publiques</b> (MITRE, Sigma, Atomic Red Team, GTFOBins, Elastic, Wazuh) pour garder une évaluation indépendante.',
                '<b>Benchmark</b> sur le jeu de données public <b>CAM-LDS</b> et analyse des erreurs : la plupart des faux positifs viennent de signatures trop larges, pas d’hallucinations du modèle.',
                'Travail mené <b>entièrement en anglais</b>, en autonomie, avec un encadrant chercheur.'
            ],
            en: [
                'Research question: can a <b>small language model running locally</b> on consumer hardware recognise <b>MITRE ATT&CK techniques</b> in Linux <b>auditd</b> logs, without fine-tuning?',
                'Designed a <b>deterministic pipeline</b>: filtering with a signature catalogue (regex), then classification by <b>Qwen 2.5 7B</b> via Ollama, temperature 0 and fixed seed for <b>reproducible</b> results.',
                'Catalogue calibrated <b>only on public sources</b> (MITRE, Sigma, Atomic Red Team, GTFOBins, Elastic, Wazuh) to keep the evaluation independent.',
                '<b>Benchmark</b> on the public <b>CAM-LDS</b> dataset and error analysis: most false positives come from over-broad signatures, not model hallucinations.',
                'Carried out <b>entirely in English</b>, independently, with a research supervisor.'
            ]
        },
        note: {
            fr: '<b>Article de recherche</b> co-écrit avec mon encadrant et soumis à la revue scientifique <b>MDPI Electronics</b> — en cours de révision par les pairs.',
            en: '<b>Research paper</b> co-written with my supervisor and submitted to the journal <b>MDPI Electronics</b> — currently under peer review.'
        },
        kpis: [
            { n: '81', l: { fr: 'techniques ATT&CK couvertes', en: 'ATT&CK techniques covered' } },
            { n: '100%', l: { fr: 'local · aucune donnée envoyée au cloud', en: 'local · no data sent to the cloud' } },
            { n: '0', l: { fr: 'fine-tuning du modèle', en: 'model fine-tuning' } },
            { n: '14', l: { fr: 'semaines au Royaume-Uni', en: 'weeks in the UK' } }
        ],
        docs: []
    },
    {
        id: 'ercom',
        date: { fr: 'Avril → juin 2025', en: 'April → June 2025' },
        title: { fr: 'Technicien téléphonie <em>& réseau</em>', en: 'Telephony <em>& network</em> technician' },
        org: { fr: 'ERCOM SAS · La Réunion · stage de 8 semaines', en: 'ERCOM SAS · Réunion Island · 8-week internship' },
        tags: ['VoIP', 'Unify', 'Réseau'],
        bullets: {
            fr: [
                'Installation et supervision de <b>systèmes de téléphonie IP</b>.',
                'Interventions terrain, <b>support utilisateurs</b> et câblage informatique.',
                'Maintenance préventive et corrective des <b>infrastructures réseau</b>.'
            ],
            en: [
                'Installing and monitoring <b>IP telephony systems</b>.',
                'On-site interventions, <b>user support</b> and structured cabling.',
                'Preventive and corrective maintenance of <b>network infrastructure</b>.'
            ]
        },
        docs: [{ label: { fr: 'Rapport de stage — ERCOM', en: 'Internship report — ERCOM' }, file: 'assets/pdf/ALAMELOU_Rohan_Rapport_Stage_RT2.pdf', size: '6,3 Mo' }]
    }
]
