/* ============ MENU MOBILE ============ */
document.getElementById('burger').addEventListener('click', function () {
    document.getElementById('nav-menu').classList.toggle('open');
    this.classList.toggle('active');
});
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-menu').classList.remove('open');
        document.getElementById('burger').classList.remove('active');
    });
});

/* ============ THEME (DARK / LIGHT) ============ */
const htmlEl = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const iconMoon = document.getElementById('icon-moon');
const iconSun = document.getElementById('icon-sun');

function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    iconMoon.style.display = theme === 'light' ? 'block' : 'none';
    iconSun.style.display = theme === 'dark' ? 'block' : 'none';
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* ============ LANGUE (FR / EN) ============ */
const translations = {
    fr: {
        nav_home: "Accueil", nav_about: "À propos", nav_skills: "Compétences",
        nav_projects: "Projets", nav_certif: "Certifications", nav_parcours: "Parcours", nav_contact: "Contact",
        hero_subtitle: "Étudiant en informatique — développement web, réseaux &amp; systèmes",
        hero_tagline: "Je conçois des interfaces web utiles et je développe mes compétences en réseaux et systèmes avec une approche simple, rigoureuse et orientée solutions.",
        hero_btn1: "Voir mes projets", hero_btn2: "Me contacter", hero_cv: "Télécharger mon CV",
        hero_status: "Disponible pour un stage ou projet pratique en développement web, réseaux ou systèmes",
        hero_meta1_value: "Lomé, Togo",
        hero_profile_label: "Mon profil",
        hero_profile_role: "Web · Réseaux · Systèmes",
        about_kicker: "Profil",
        about_title: "Construire des bases solides, projet après projet.",
        about_text: "Étudiant en première année d'informatique à l'ESGIS, je développe progressivement mes compétences en développement web, administration systèmes et réseaux. Je recherche des stages et des projets pratiques pour transformer mes connaissances en expérience concrète.",
        about_focus_title: "Je recherche",
        about_focus_text: "Stages, projets pratiques et collaborations en développement web, réseaux, systèmes et support informatique.",
        skills_title: "Ce que je maîtrise",
        skills_intro: "Mes domaines principaux sont le développement web, les réseaux et l’administration systèmes. La virtualisation, la cybersécurité et le langage C complètent ce socle.",
        skill1_name: "Réseaux", skill1_desc: "Adressage IP, câblage RJ45, configuration d'équipements réseau.",
        skill2_name: "Administration systèmes", skill2_desc: "Windows, Linux, gestion des utilisateurs et des services.",
        skill3_name: "Virtualisation", skill3_desc: "Création et configuration de machines virtuelles avec VirtualBox.",
        skill4_name: "Sécurité informatique &amp; IA", skill4_desc: "Sensibilisation aux menaces, bonnes pratiques et sécurité des systèmes d'IA.",
        skill5_name: "Développement web", skill5_desc: "HTML, CSS et JavaScript pour la création de sites web.",
        skill6_name: "Programmation C", skill6_desc: "Bases de l'algorithmique et de la programmation structurée.",
        tools_title: "Outils &amp; technologies", langs_title: "Langages de programmation",
        projects_title: "Ce que j'ai réalisé",
        proj4_name: "Klasso — Gestion scolaire", proj4_desc: "Projet personnel — plateforme de gestion scolaire pour les établissements du Togo. Rôle : conception de l'interface et développement des écrans de gestion, avec mode sombre/clair et interface FR/EN.",
        proj5_name: "NowPay — Relance IA des impayés", proj5_desc: "Prototype SaaS — suivi des créances pour PME, relances automatisées, scan de factures et historique des encaissements. Technologies : Next.js, Supabase et IA.",
        proj6_name: "Site vitrine — Payroll Bassit", proj6_desc: "Projet livré — site vitrine pour l'artiste togolais Payroll Bassit : présentation, discographie, concerts et booking. Réalisé avec Bolt.",
        proj7_name: "CampusEvents — Gestion d'événements universitaires", proj7_desc: "Prototype réalisé en équipe (4 personnes) — plateforme de gestion d'événements universitaires : catalogue filtrable, inscriptions, calendrier et tableau de bord administrateur. Développé en PHP et MySQL.",
        proj7_role: "Projet d’équipe de quatre personnes — conception de la plateforme et développement des fonctionnalités événementielles.",
        proj8_name: "SoundWave — Bibliothèque musicale", proj8_desc: "Application web de découverte et d’écoute musicale avec recherche Spotify, lecteur officiel, favoris, playlists personnelles et historique. Technologies : Next.js, React, TypeScript et MySQL.",
        proj8_role: "Conception et développement d’une application musicale responsive avec comptes et bibliothèque personnelle.",
        proj9_name: "CyberLab — Apprentissage de la cybersécurité", proj9_desc: "Plateforme pédagogique locale avec six modules, leçons, laboratoires simulés et quiz progressifs. La progression est conservée dans le navigateur et les exercices ne ciblent aucun système externe.",
        proj9_role: "Conception et développement d’un parcours d’apprentissage interactif, sûr et adapté aux débutants.",
        proj_view_hint: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M2.5 12s3.2-5 9.5-5 9.5 5 9.5 5-3.2 5-9.5 5-9.5-5-9.5-5Z\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\"/></svg> Voir les détails",
        proj_visit: "Visiter le site ↗",
        proj_status_personal: "Projet personnel",
        proj_status_prototype: "Prototype",
        proj_status_delivered: "Projet livré",
        certif_title: "Mes certifications",
        filter_all: "Tout", filter_sec: "Cybersécurité & IA", filter_web: "Web & Networking", filter_badge: "Badges",
        parcours_title: "Mon parcours",
        tl_l1: "Licence Informatique à ESGIS", tl_current: "En cours.",
        tl_mention: "Obtenu avec mention.", tl_obtenu: "Obtenu.",
        contact_title: "Discutons",
        contact_intro: "Vous avez un projet, une opportunité de stage ou une question ? Écrivez-moi directement.",
        contact_email_btn: "Envoyer un email", contact_whatsapp_btn: "Écrire sur WhatsApp",
        proj_repo: "Voir le code sur GitHub ↗",
        contact_email: "Email", contact_phone: "Téléphone", contact_whatsapp: "WhatsApp", contact_loc: "Localisation",
        footer_rights: "Tous droits réservés",
        modal_verify: "Vérifier la certification"
    },
    en: {
        nav_home: "Home", nav_about: "About", nav_skills: "Skills",
        nav_projects: "Projects", nav_certif: "Certifications", nav_parcours: "Education", nav_contact: "Contact",
        hero_subtitle: "Computer science student — web development, networks &amp; systems",
        hero_tagline: "I build useful web interfaces and develop my networking and systems skills with a simple, rigorous and solution-focused approach.",
        hero_btn1: "View my projects", hero_btn2: "Contact me", hero_cv: "Download my CV",
        hero_status: "Available for an internship or practical project in web development, networking or systems",
        hero_meta1_value: "Lomé, Togo",
        hero_profile_label: "My profile",
        hero_profile_role: "Web · Networks · Systems",
        about_kicker: "Profile",
        about_title: "Building solid foundations, one project at a time.",
        about_text: "I am a first-year computer science student at ESGIS, gradually developing my skills in web development, systems administration and networking. I am looking for internships and practical projects to turn my knowledge into hands-on experience.",
        about_focus_title: "Looking for",
        about_focus_text: "Internships, practical projects and collaborations in web development, networking, systems and IT support.",
        skills_title: "What I master",
        skills_intro: "My main areas are web development, networking and systems administration. Virtualization, cybersecurity and C programming complement this foundation.",
        skill1_name: "Networking", skill1_desc: "IP addressing, RJ45 cabling, network equipment configuration.",
        skill2_name: "Systems administration", skill2_desc: "Windows, Linux, user and service management.",
        skill3_name: "Virtualization", skill3_desc: "Creating and configuring virtual machines with VirtualBox.",
        skill4_name: "Cybersecurity &amp; AI", skill4_desc: "Threat awareness, best practices and AI systems security.",
        skill5_name: "Web development", skill5_desc: "HTML, CSS and JavaScript for building websites.",
        skill6_name: "C Programming", skill6_desc: "Fundamentals of algorithms and structured programming.",
        tools_title: "Tools &amp; technologies", langs_title: "Programming languages",
        projects_title: "What I've built",
        proj4_name: "Klasso — School management", proj4_desc: "Personal project — school management platform for schools in Togo. Role: interface design and development of management screens, with dark/light mode and FR/EN interface.",
        proj5_name: "NowPay — AI-powered payment reminders", proj5_desc: "Prototype — SME receivables tracking with automated reminders, invoice scanning and payment history. Technologies: Next.js, Supabase and AI.",
        proj6_name: "Website — Payroll Bassit", proj6_desc: "Delivered project — showcase website for Togolese artist Payroll Bassit: bio, discography, concerts and booking. Built with Bolt.",
        proj7_name: "CampusEvents — University event management", proj7_desc: "Prototype built as a team (4 people) — university event management platform: filterable catalog, registrations, calendar and admin dashboard. Built with PHP and MySQL.",
        proj7_role: "Four-person team project — platform design and development of event-management features.",
        proj8_name: "SoundWave — Music library", proj8_desc: "A web app for music discovery and listening with Spotify search, the official player, favorites, personal playlists and listening history. Technologies: Next.js, React, TypeScript and MySQL.",
        proj8_role: "Designed and built a responsive music application with accounts and a personal library.",
        proj9_name: "CyberLab — Cybersecurity learning", proj9_desc: "A local learning platform with six modules, lessons, simulated labs and progressive quizzes. Progress is saved in the browser and exercises never target external systems.",
        proj9_role: "Designed and built a safe, interactive learning path for cybersecurity beginners.",
        proj_view_hint: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M2.5 12s3.2-5 9.5-5 9.5 5 9.5 5-3.2 5-9.5 5-9.5-5-9.5-5Z\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\"/></svg> View details",
        proj_visit: "Visit site ↗",
        proj_status_personal: "Personal project",
        proj_status_prototype: "Prototype",
        proj_status_delivered: "Delivered project",
        certif_title: "My certifications",
        filter_all: "All", filter_sec: "Cybersecurity & AI", filter_web: "Web & Networking", filter_badge: "Badges",
        parcours_title: "My journey",
        tl_l1: "Bachelor's in Computer Science at ESGIS", tl_current: "In progress.",
        tl_mention: "Passed with honors.", tl_obtenu: "Obtained.",
        contact_title: "Let's talk",
        contact_intro: "Have a project, internship opportunity or a question? Feel free to reach out.",
        contact_email_btn: "Send an email", contact_whatsapp_btn: "Write on WhatsApp",
        proj_repo: "View code on GitHub ↗",
        contact_email: "Email", contact_phone: "Phone", contact_whatsapp: "WhatsApp", contact_loc: "Location",
        footer_rights: "All rights reserved",
        modal_verify: "Verify certification"
    }
};

const langToggle = document.getElementById('lang-toggle');
const langLabel = document.getElementById('lang-label');
const flagEn = document.querySelector('.flag-en');
const flagFr = document.querySelector('.flag-fr');

function applyLang(lang) {
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
    });
    htmlEl.setAttribute('lang', lang);
    const targetLang = lang === 'fr' ? 'en' : 'fr';
    langLabel.textContent = targetLang.toUpperCase();
    flagFr.style.display = targetLang === 'fr' ? 'block' : 'none';
    flagEn.style.display = targetLang === 'en' ? 'block' : 'none';
    localStorage.setItem('lang', lang);
    renderCertifications(lang);
    applyFilter(currentFilter, lang);
    renderProjects(lang);
}

const savedLang = localStorage.getItem('lang') || 'fr';

langToggle.addEventListener('click', () => {
    const current = localStorage.getItem('lang') || 'fr';
    applyLang(current === 'fr' ? 'en' : 'fr');
});

/* ============ CERTIFICATIONS ============ */
const certifications = [
    {
        id: 'caisr',
        title: 'Certified Artificial Intelligence Security & Risk (CAISR)',
        issuer: 'Red Team Leaders',
        date: '13/02/2026',
        category: 'securite',
        image: 'certifications/rtl-caisr.jpg',
        verify: 'https://courses.redteamleaders.com/exam-completion/b062c0fc69e865b6'
    },
    {
        id: 'cllmsp',
        title: 'Certified LLM Security Professional (CLLMSP)',
        issuer: 'Red Team Leaders',
        date: '20/06/2026',
        category: 'securite',
        image: 'certifications/rtl-cllmsp.jpg',
        verify: 'https://courses.redteamleaders.com/exam-completion/86b60c0464e51e6f'
    },
    {
        id: 'cisco-intro',
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco Networking Academy',
        date: '08/03/2026',
        category: 'securite',
        image: 'certifications/cisco-cyberintro.jpg',
        verify: null
    },
    {
        id: 'hp-cyber-awareness',
        title: 'Introduction to Cybersecurity Awareness',
        issuer: 'HP LIFE / HP Foundation',
        date: '29/06/2026',
        category: 'securite',
        image: 'certifications/hp-cyberaware.jpg',
        verify: null
    },
    {
        id: 'heureia-principes',
        title: "Principes fondamentaux de l'intelligence artificielle",
        issuer: 'Heure IA',
        date: '30/06/2026',
        category: 'securite',
        image: 'certifications/heureia-principes.jpg',
        verify: null
    },
    {
        id: 'hp-websites',
        title: 'Effective Business Websites',
        issuer: 'HP LIFE / HP Foundation',
        date: '29/06/2026',
        category: 'web',
        image: 'certifications/hp-webbiz.jpg',
        verify: null
    },
    {
        id: 'hp-networking',
        title: 'Professional Networking for Career Growth',
        issuer: 'HP LIFE / HP Foundation',
        date: '29/06/2026',
        category: 'web',
        image: 'certifications/hp-networking.jpg',
        verify: null
    },
    {
        id: 'cisco-ite702',
        title: 'ITE 7.02 — IT Essentials',
        issuer: 'Cisco Networking Academy',
        date: '21/07/2026',
        category: 'web',
        image: 'certifications/cisco-ite702.jpg',
        verify: null
    },
    {
        id: 'badge-it-essentials',
        title: 'IT Essentials',
        issuer: 'Cisco Networking Academy',
        date: null,
        category: 'badge',
        image: 'certifications/badge-it-essentials.png',
        verify: null
    },
    {
        id: 'badge-cybersecurity',
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco Networking Academy',
        date: null,
        category: 'badge',
        image: 'certifications/badge-cybersecurity.png',
        verify: null
    }
];

const certGrid = document.getElementById('cert-grid');
let currentFilter = 'all';

function renderCertifications(lang) {
    const dict = translations[lang];
    const catLabel = { securite: dict.filter_sec, web: dict.filter_web, badge: dict.filter_badge };
    certGrid.innerHTML = '';
    certifications.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'cert-card';
        card.setAttribute('data-category', cert.category);
        const meta = cert.date ? `${cert.issuer} · ${cert.date}` : cert.issuer;
        card.innerHTML = `
            <img class="cert-thumb${cert.category === 'badge' ? ' cert-thumb-badge' : ''}" src="${cert.image}" alt="${cert.title}">
            <div class="cert-body">
                <span class="cert-tag">${catLabel[cert.category]}</span>
                <h3>${cert.title}</h3>
                <p class="cert-meta">${meta}</p>
                <button class="cert-view-btn" data-id="${cert.id}">${lang === 'fr' ? 'Voir la certification' : 'View certification'}</button>
            </div>
        `;
        certGrid.appendChild(card);
    });

    document.querySelectorAll('.cert-view-btn').forEach(btn => {
        btn.addEventListener('click', () => openModal(btn.getAttribute('data-id'), lang));
    });
}

function applyFilter(filter, lang) {
    currentFilter = filter;
    document.querySelectorAll('.cert-card').forEach(card => {
        const match = filter === 'all' || card.getAttribute('data-category') === filter;
        card.style.display = match ? 'flex' : 'none';
    });
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
    });
}

document.getElementById('cert-filters').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        applyFilter(e.target.getAttribute('data-filter'), localStorage.getItem('lang') || 'fr');
    }
});

/* ============ MODALE CERTIFICATION ============ */
const modal = document.getElementById('cert-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalMeta = document.getElementById('modal-meta');
const modalVerify = document.getElementById('modal-verify');
const modalClose = document.getElementById('modal-close');

function openModal(id, lang) {
    const cert = certifications.find(c => c.id === id);
    if (!cert) return;
    modalImage.src = cert.image;
    modalImage.alt = cert.title;
    modalTitle.textContent = cert.title;
    modalMeta.textContent = cert.date ? `${cert.issuer} · ${cert.date}` : cert.issuer;
    if (cert.verify) {
        modalVerify.href = cert.verify;
        modalVerify.style.display = 'block';
    } else {
        modalVerify.style.display = 'none';
    }
    modal.classList.add('open');
}

function closeModal() {
    modal.classList.remove('open');
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

/* ============ PROJETS (grille image-forward + modale) ============ */
const projects = [
    { id: 'klasso', key: 'proj4', status: 'personal', role: 'Conception de l’interface et développement des écrans de gestion.', repo: null, tags: ['HTML', 'CSS', 'JavaScript'],
        images: ['projects/klasso-1-home.jpg', 'projects/klasso-2-plans.jpg', 'projects/klasso-3-signup.jpg', 'projects/klasso-4-dashboard.jpg'],
        link: 'https://klasso-website.netlify.app/' },
    { id: 'nowpay', key: 'proj5', status: 'prototype', role: 'Conception du prototype et intégration des écrans principaux.', repo: null, tags: ['Next.js', 'Supabase', 'IA'],
        images: ['projects/nowpay-1-nouvelle-creance.png', 'projects/nowpay-2-dashboard.jpg', 'projects/nowpay-3-mobile-aujourdhui.jpg', 'projects/nowpay-4-mobile-historique.jpg'],
        link: 'https://nowpay.website' },
    { id: 'payrollbassit', key: 'proj6', status: 'delivered', role: 'Réalisation du site vitrine et structuration des contenus.', repo: null, tags: ['Bolt', 'HTML', 'CSS'],
        images: ['projects/payrollbassit-1-accueil.png', 'projects/payrollbassit-2-musique.png', 'projects/payrollbassit-3-concerts.png'],
        link: 'https://payroll-bassit.bolt.host' },
    { id: 'campusevents', key: 'proj7', status: 'prototype', roleKey: 'proj7_role', repo: 'https://github.com/elmonumento/CampusEvents', tags: ['PHP', 'MySQL', 'CSS'],
        images: ['projects/campusevents-1-dashboard.png', 'projects/campusevents-2-connexion.png', 'projects/campusevents-3-evenement.png'], link: null },
    { id: 'soundwave', key: 'proj8', status: 'personal', roleKey: 'proj8_role', repo: 'https://github.com/elmonumento/SoundWave', tags: ['Next.js', 'React', 'TypeScript', 'MySQL'],
        images: ['projects/soundwave-overview.png'], link: null },
    { id: 'cyberlab', key: 'proj9', status: 'prototype', roleKey: 'proj9_role', repo: 'https://github.com/elmonumento/CyberLab', tags: ['HTML', 'CSS', 'JavaScript', 'Cybersécurité'],
        images: ['projects/cyberlab-home.png'], link: 'https://thecyberlab.netlify.app/' }
];

const projectGrid = document.getElementById('project-grid');

function renderProjects(lang) {
    const dict = translations[lang];
    projectGrid.innerHTML = '';
    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        const cover = p.images[0];
        const thumbHtml = cover
            ? `<img class="project-thumb" src="${cover}" alt="${dict[p.key + '_name']}">`
            : `<div class="project-thumb project-thumb-placeholder"><span>&lt;/&gt;</span></div>`;
        const countHtml = p.images.length > 1 ? `<span class="project-thumb-count">${p.images.length} 📷</span>` : '';
        card.innerHTML = `
            <div class="project-thumb-wrap" data-id="${p.id}" role="button" tabindex="0" aria-label="${dict[p.key + '_name']}">
                ${thumbHtml}
                ${countHtml}
                <span class="project-thumb-hint">${dict.proj_view_hint}</span>
            </div>
            <div class="project-body">
                <h3>${dict[p.key + '_name']}</h3>
                <span class="project-status">${dict['proj_status_' + p.status]}</span>
                <div class="card-tags">${p.tags.map(t => `<span class="pill pill-sm">${t}</span>`).join('')}</div>
            </div>
        `;
        projectGrid.appendChild(card);
    });
    projectGrid.querySelectorAll('.project-thumb-wrap').forEach(el => {
        el.addEventListener('click', () => openProjectModal(el.getAttribute('data-id'), lang));
        el.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openProjectModal(el.getAttribute('data-id'), lang);
            }
        });
    });
}

/* ============ MODALE PROJET ============ */
const projectModal = document.getElementById('project-modal');
const projectModalMedia = document.getElementById('project-modal-media');
const projectModalImage = document.getElementById('project-modal-image');
const projectModalPlaceholder = document.getElementById('project-modal-placeholder');
const projectModalPrev = document.getElementById('project-modal-prev');
const projectModalNext = document.getElementById('project-modal-next');
const projectModalCounter = document.getElementById('project-modal-counter');
const projectModalTitle = document.getElementById('project-modal-title');
const projectModalTags = document.getElementById('project-modal-tags');
const projectModalDesc = document.getElementById('project-modal-desc');
const projectModalStatus = document.getElementById('project-modal-status');
const projectModalRole = document.getElementById('project-modal-role');
const projectModalRepo = document.getElementById('project-modal-repo');
const projectModalLink = document.getElementById('project-modal-link');
const projectModalClose = document.getElementById('project-modal-close');

let currentProject = null;
let currentProjectIndex = 0;

function showProjectImage() {
    const imgs = currentProject.images;
    const multi = imgs.length > 1;
    projectModalPrev.style.display = multi ? 'flex' : 'none';
    projectModalNext.style.display = multi ? 'flex' : 'none';
    if (imgs.length) {
        projectModalImage.src = imgs[currentProjectIndex];
        projectModalImage.style.display = 'block';
        projectModalPlaceholder.style.display = 'none';
        projectModalCounter.style.display = multi ? 'block' : 'none';
        projectModalCounter.textContent = `${currentProjectIndex + 1} / ${imgs.length}`;
    } else {
        projectModalImage.style.display = 'none';
        projectModalPlaceholder.style.display = 'flex';
        projectModalCounter.style.display = 'none';
    }
}

function openProjectModal(id, lang) {
    const p = projects.find(pr => pr.id === id);
    if (!p) return;
    const dict = translations[lang];
    currentProject = p;
    currentProjectIndex = 0;
    showProjectImage();
    projectModalTitle.textContent = dict[p.key + '_name'];
    projectModalStatus.textContent = dict['proj_status_' + p.status];
    projectModalDesc.textContent = dict[p.key + '_desc'];
    projectModalRole.textContent = p.roleKey ? dict[p.roleKey] : p.role;
    projectModalTags.innerHTML = p.tags.map(t => `<span class="pill pill-sm">${t}</span>`).join('');
    if (p.repo) {
        projectModalRepo.href = p.repo;
        projectModalRepo.textContent = dict.proj_repo;
        projectModalRepo.style.display = 'inline-block';
    } else {
        projectModalRepo.style.display = 'none';
        projectModalRepo.removeAttribute('href');
    }
    if (p.link) {
        projectModalLink.href = p.link;
        projectModalLink.textContent = dict.proj_visit;
        projectModalLink.style.display = 'inline-block';
    } else {
        projectModalLink.style.display = 'none';
        projectModalLink.removeAttribute('href');
    }
    projectModal.classList.add('open');
}

function closeProjectModal() {
    projectModal.classList.remove('open');
}

projectModalClose.addEventListener('click', closeProjectModal);
projectModalPrev.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex - 1 + currentProject.images.length) % currentProject.images.length;
    showProjectImage();
});
projectModalNext.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex + 1) % currentProject.images.length;
    showProjectImage();
});
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
});

/* ============ OUTILS : liens officiels ============ */
(function () {
    const links = [
        'https://www.microsoft.com/windows',
        'https://www.linux.org/',
        'https://www.virtualbox.org/',
        'https://www.netacad.com/courses/packet-tracer',
        'https://www.gns3.com/',
        'https://www.wireshark.org/',
        'https://code.visualstudio.com/',
        'https://git-scm.com/',
        'https://github.com/elmonumento'
    ];
    const toolPills = document.querySelectorAll('.tech-pills')[0];
    if (!toolPills) return;
    toolPills.querySelectorAll('.tech-pill').forEach((pill, index) => {
        const link = document.createElement('a');
        link.href = links[index];
        link.target = '_blank';
        link.rel = 'noopener';
        link.className = pill.className;
        link.title = pill.title;
        link.setAttribute('aria-label', pill.getAttribute('aria-label') || pill.title);
        link.innerHTML = pill.innerHTML;
        pill.replaceWith(link);
    });
}());
document.addEventListener('keydown', (e) => {
    if (!projectModal.classList.contains('open')) return;
    if (e.key === 'Escape') closeProjectModal();
    if (e.key === 'ArrowLeft') projectModalPrev.click();
    if (e.key === 'ArrowRight') projectModalNext.click();
});

/* Initial render */
applyLang(savedLang);

/* ============ FOND ANIMÉ — MAILLAGE RÉSEAU ============ */
const canvas = document.getElementById('netbg');
const ctx = canvas.getContext('2d');
const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let nodes = [];
let links = [];
let cables = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateScene();
}

function rand(min, max) {
    return min + Math.random() * (max - min);
}

function generateScene() {
    const area = canvas.width * canvas.height;
    const count = Math.min(34, Math.max(14, Math.floor(area / 50000)));
    nodes = Array.from({ length: count }, () => ({
        x: rand(0, canvas.width),
        y: rand(0, canvas.height),
        phase: rand(0, Math.PI * 2)
    }));
    links = [];
    cables = Array.from({ length: Math.min(7, Math.max(3, Math.floor(canvas.width / 260))) }, (_, index) => ({
        y: rand(canvas.height * 0.08, canvas.height * 0.92),
        offset: rand(0, Math.PI * 2),
        amplitude: rand(14, 34),
        speed: rand(0.00025, 0.0005),
        phase: index * 0.8
    }));
    nodes.forEach((node, index) => {
        const nearest = nodes
            .map((other, otherIndex) => ({ other, otherIndex, distance: Math.hypot(node.x - other.x, node.y - other.y) }))
            .filter(item => item.otherIndex !== index)
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 2);
        nearest.forEach(item => {
            if (item.distance < 300 && index < item.otherIndex) links.push([index, item.otherIndex]);
        });
    });
}

function getColors() {
    const styles = getComputedStyle(document.documentElement);
    return {
        line: styles.getPropertyValue('--net-line').trim(),
        dot: styles.getPropertyValue('--net-dot').trim(),
        accent: styles.getPropertyValue('--accent').trim()
    };
}

let t0 = performance.now();

function drawFrame(now) {
    const elapsed = now - t0;
    const { line, dot, accent } = getColors();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = dot;
    nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.strokeStyle = line;
    ctx.lineWidth = 1;
    links.forEach(([from, to]) => {
        ctx.beginPath();
        ctx.moveTo(nodes[from].x, nodes[from].y);
        ctx.lineTo(nodes[to].x, nodes[to].y);
        ctx.stroke();
    });
    ctx.lineWidth = 1.6;
    ctx.lineCap = 'round';
    cables.forEach(cable => {
        const wave = prefersReducedMotion ? 0 : elapsed * cable.speed;
        const y = cable.y + Math.sin(wave + cable.offset) * cable.amplitude;
        const p0 = { x: -80, y };
        const p1 = { x: canvas.width * 0.28, y: y + Math.sin(wave + cable.phase) * cable.amplitude };
        const p2 = { x: canvas.width * 0.7, y: y - Math.sin(wave + cable.phase) * cable.amplitude };
        const p3 = { x: canvas.width + 80, y };
        ctx.strokeStyle = line;
        ctx.setLineDash([3, 16]);
        ctx.lineDashOffset = prefersReducedMotion ? 0 : -elapsed * 0.025;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
        ctx.stroke();
        ctx.setLineDash([]);
    });
    if (!prefersReducedMotion) {
        nodes.forEach(node => {
            const pulse = (Math.sin(elapsed * 0.001 + node.phase) + 1) / 2;
            ctx.globalAlpha = pulse * 0.22;
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 2 + pulse * 3, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(drawFrame);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
requestAnimationFrame(drawFrame);
