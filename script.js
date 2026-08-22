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
        hero_subtitle: "Étudiant en Systèmes &amp; Réseaux Informatiques",
        hero_tagline: "Passionné par les réseaux, l'administration systèmes et la sécurité informatique. En route vers le métier d'ingénieur réseau.",
        hero_btn1: "Découvrir mon profil", hero_btn2: "Me contacter",
        about_tag: "01 — Profil",
        about_text: "Je suis <strong>TCHAKOURA Abdoul-Rachid</strong>, âgé de 18 ans, actuellement étudiant en 1ère année de Systèmes, Réseaux &amp; Informatique à l'ESGIS. Par ma rigueur et ma discipline, j'ai développé des compétences en administration systèmes, réseaux, virtualisation et sécurité informatique. L'informatique me fascine depuis l'enfance et j'ai mis tout en œuvre pour intégrer ce domaine. Mon objectif est de devenir <strong>ingénieur réseaux</strong>.",
        skills_tag: "02 — Compétences", skills_title: "Ce que je maîtrise",
        skill1_name: "Réseaux", skill1_desc: "Adressage IP, câblage RJ45, configuration d'équipements réseau.",
        skill2_name: "Administration systèmes", skill2_desc: "Windows, Linux, gestion des utilisateurs et des services.",
        skill3_name: "Virtualisation", skill3_desc: "Création et configuration de machines virtuelles avec VirtualBox.",
        skill4_name: "Sécurité informatique &amp; IA", skill4_desc: "Sensibilisation aux menaces, bonnes pratiques et sécurité des systèmes d'IA.",
        skill5_name: "Développement web", skill5_desc: "HTML, CSS et JavaScript pour la création de sites web.",
        skill6_name: "Programmation C", skill6_desc: "Bases de l'algorithmique et de la programmation structurée.",
        lvl_inter: "Intermédiaire", lvl_notion: "Notions", lvl_debutant: "Débutant",
        tools_title: "Outils &amp; technologies", langs_title: "Langages de programmation",
        projects_tag: "03 — Projets", projects_title: "Ce que j'ai réalisé",
        proj1_name: "Portfolio personnel", proj1_desc: "Création de mon site web professionnel.",
        proj2_name: "4EP SHOP", proj2_desc: "Boutique en ligne : maillots, casquettes, montres, avec panier et paiement mobile (Orange Money, MTN, Moov Africa, Visa).",
        proj3_name: "Gestion étudiants", proj3_desc: "Application de gestion en langage C.",
        proj4_name: "Klasso — Gestion scolaire", proj4_desc: "Plateforme de gestion scolaire développée seul, pour les écoles du Togo : inscriptions, écolages, présences, notes et tableau de bord administrateur, avec mode sombre/clair et interface bilingue FR/EN.",
        proj_view_hint: " Voir les captures d'écran",
        certif_tag: "04 — Certifications", certif_title: "Mes certifications",
        filter_all: "Tout", filter_sec: "Cybersécurité & IA", filter_web: "Web & Networking", filter_badge: "Badges",
        parcours_tag: "05 — Parcours", parcours_title: "Mon parcours scolaire",
        tl_mention: "Obtenu avec mention.", tl_obtenu: "Obtenu.",
        contact_tag: "06 — Contact", contact_title: "Discutons",
        contact_intro: "Disponible pour des stages, des projets pratiques ou toute opportunité en Informatiques.",
        contact_email: "Email", contact_phone: "Téléphone", contact_loc: "Localisation",
        footer_rights: "Tous droits réservés",
        modal_verify: "Vérifier la certification"
    },
    en: {
        nav_home: "Home", nav_about: "About", nav_skills: "Skills",
        nav_projects: "Projects", nav_certif: "Certifications", nav_parcours: "Education", nav_contact: "Contact",
        hero_subtitle: "Computer Systems &amp; Networks Student",
        hero_tagline: "Passionate about networking, systems administration and cybersecurity. On my way to becoming a network engineer.",
        hero_btn1: "Discover my profile", hero_btn2: "Contact me",
        about_tag: "01 — Profile",
        about_text: "I'm <strong>TCHAKOURA Abdoul-Rachid</strong>, 18 years old, currently a first-year student in Systems, Networks &amp; Computer Science at ESGIS. Through discipline and rigor, I've developed skills in systems administration, networking, virtualization and cybersecurity. Computing has fascinated me since childhood and I've worked hard to enter this field. My goal is to become a <strong>network engineer</strong>.",
        skills_tag: "02 — Skills", skills_title: "What I master",
        skill1_name: "Networking", skill1_desc: "IP addressing, RJ45 cabling, network equipment configuration.",
        skill2_name: "Systems administration", skill2_desc: "Windows, Linux, user and service management.",
        skill3_name: "Virtualization", skill3_desc: "Creating and configuring virtual machines with VirtualBox.",
        skill4_name: "Cybersecurity &amp; AI", skill4_desc: "Threat awareness, best practices and AI systems security.",
        skill5_name: "Web development", skill5_desc: "HTML, CSS and JavaScript for building websites.",
        skill6_name: "C Programming", skill6_desc: "Fundamentals of algorithms and structured programming.",
        lvl_inter: "Intermediate", lvl_notion: "Basic notions", lvl_debutant: "Beginner",
        tools_title: "Tools &amp; technologies", langs_title: "Programming languages",
        projects_tag: "03 — Projects", projects_title: "What I've built",
        proj1_name: "Personal portfolio", proj1_desc: "Building my own professional website.",
        proj2_name: "4EP SHOP", proj2_desc: "Online shop: jerseys, caps, watches, with cart and mobile payment (Orange Money, MTN, Moov Africa, Visa).",
        proj3_name: "Student management", proj3_desc: "Management application written in C.",
        proj4_name: "Klasso — School management", proj4_desc: "School management platform built solo, for schools in Togo: enrollment, fees, attendance, grades and admin dashboard, with dark/light mode and a bilingual FR/EN interface.",
        proj_view_hint: " View screenshots",
        certif_tag: "04 — Certifications", certif_title: "My certifications",
        filter_all: "All", filter_sec: "Cybersecurity & AI", filter_web: "Web & Networking", filter_badge: "Badges",
        parcours_tag: "05 — Education", parcours_title: "My academic path",
        tl_mention: "Passed with honors.", tl_obtenu: "Obtained.",
        contact_tag: "06 — Contact", contact_title: "Let's talk",
        contact_intro: "Available for internships, hands-on projects or any opportunity in IT.",
        contact_email: "Email", contact_phone: "Phone", contact_loc: "Location",
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
    langLabel.textContent = lang.toUpperCase();
    flagFr.style.display = lang === 'en' ? 'block' : 'none';
    flagEn.style.display = lang === 'fr' ? 'block' : 'none';
    localStorage.setItem('lang', lang);
    renderCertifications(lang);
    applyFilter(currentFilter, lang);
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
        image: 'certs/rtl-caisr.jpg',
        verify: 'https://courses.redteamleaders.com/exam-completion/b062c0fc69e865b6'
    },
    {
        id: 'cllmsp',
        title: 'Certified LLM Security Professional (CLLMSP)',
        issuer: 'Red Team Leaders',
        date: '20/06/2026',
        category: 'securite',
        image: 'certs/rtl-cllmsp.jpg',
        verify: 'https://courses.redteamleaders.com/exam-completion/86b60c0464e51e6f'
    },
    {
        id: 'cisco-intro',
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco Networking Academy',
        date: '08/03/2026',
        category: 'securite',
        image: 'certs/cisco-cyberintro.jpg',
        verify: null
    },
    {
        id: 'hp-cyber-awareness',
        title: 'Introduction to Cybersecurity Awareness',
        issuer: 'HP LIFE / HP Foundation',
        date: '29/06/2026',
        category: 'securite',
        image: 'certs/hp-cyberaware.jpg',
        verify: null
    },
    {
        id: 'heureia-principes',
        title: "Principes fondamentaux de l'intelligence artificielle",
        issuer: 'Heure IA',
        date: '30/06/2026',
        category: 'securite',
        image: 'certs/heureia-principes.jpg',
        verify: null
    },
    {
        id: 'hp-websites',
        title: 'Effective Business Websites',
        issuer: 'HP LIFE / HP Foundation',
        date: '29/06/2026',
        category: 'web',
        image: 'certs/hp-webbiz.jpg',
        verify: null
    },
    {
        id: 'hp-networking',
        title: 'Professional Networking for Career Growth',
        issuer: 'HP LIFE / HP Foundation',
        date: '29/06/2026',
        category: 'web',
        image: 'certs/hp-networking.jpg',
        verify: null
    },
    {
        id: 'cisco-ite702',
        title: 'ITE 7.02 — IT Essentials',
        issuer: 'Cisco Networking Academy',
        date: '21/07/2026',
        category: 'web',
        image: 'certs/cisco-ite702.jpg',
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

/* Initial render */
applyLang(savedLang);

/* ============ GALERIE PROJET ============ */
const projectGalleries = {
    klasso: [
        'projects/klasso/klasso-1-home.jpg',
        'projects/klasso/klasso-2-plans.jpg',
        'projects/klasso/klasso-3-signup.jpg',
        'projects/klasso/klasso-4-dashboard.jpg'
    ],
    ecommerce: [
        'projects/4epshop/4epshop-1-maillots.jpg',
        'projects/4epshop/4epshop-2-montres.jpg',
        'projects/4epshop/4epshop-3-panier.jpg'
    ]
};

const galleryModal = document.getElementById('gallery-modal');
const galleryImage = document.getElementById('gallery-image');
const galleryCounter = document.getElementById('gallery-counter');
const galleryClose = document.getElementById('gallery-close');
const galleryPrev = document.getElementById('gallery-prev');
const galleryNext = document.getElementById('gallery-next');

let currentGallery = [];
let currentIndex = 0;

function showGalleryImage() {
    galleryImage.src = currentGallery[currentIndex];
    galleryCounter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
}

function openGallery(projectKey) {
    const imgs = projectGalleries[projectKey];
    if (!imgs) return;
    currentGallery = imgs;
    currentIndex = 0;
    showGalleryImage();
    galleryModal.classList.add('open');
}

function closeGallery() {
    galleryModal.classList.remove('open');
}

document.querySelectorAll('.card-clickable').forEach(card => {
    card.addEventListener('click', () => openGallery(card.getAttribute('data-project')));
});

galleryClose.addEventListener('click', closeGallery);
galleryPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    showGalleryImage();
});
galleryNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    showGalleryImage();
});
galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) closeGallery();
});
document.addEventListener('keydown', (e) => {
    if (!galleryModal.classList.contains('open')) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') galleryPrev.click();
    if (e.key === 'ArrowRight') galleryNext.click();
});

/* ============ FOND ANIMÉ — CÂBLES & SIGNAUX SANS FIL ============ */
const canvas = document.getElementById('netbg');
const ctx = canvas.getContext('2d');
let cables = [];
let apNodes = [];
const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateScene();
}

function rand(min, max) {
    return min + Math.random() * (max - min);
}

/* Grille de points en arrière-plan, très discrète, pour donner de la texture */
let gridDots = [];

function generateGrid() {
    gridDots = [];
    const spacing = 60;
    for (let x = spacing / 2; x < canvas.width; x += spacing) {
        for (let y = spacing / 2; y < canvas.height; y += spacing) {
            gridDots.push({ x, y });
        }
    }
}

/* Câbles réseau : courbes de Bézier qui ondulent lentement */
function generateScene() {
    generateGrid();
    const area = canvas.width * canvas.height;
    const cableCount = Math.min(15, Math.max(7, Math.floor(area / 165000)));
    cables = [];

    for (let i = 0; i < cableCount; i++) {
        const y = rand(0, canvas.height);
        cables.push({
            base: [
                { x: rand(-100, canvas.width * 0.25), y: rand(0, canvas.height) },
                { x: rand(canvas.width * 0.25, canvas.width * 0.55), y: rand(0, canvas.height) },
                { x: rand(canvas.width * 0.45, canvas.width * 0.75), y: rand(0, canvas.height) },
                { x: rand(canvas.width * 0.75, canvas.width + 100), y: rand(0, canvas.height) }
            ],
            amp: rand(18, 42),
            phase: rand(0, Math.PI * 2),
            speed: rand(0.00028, 0.00048),
            dashSpeed: rand(0.02, 0.035) * (Math.random() < 0.5 ? 1 : -1),
            packetOffset: rand(0, 1),
            packetSpeed: rand(0.00009, 0.00016) * (Math.random() < 0.5 ? 1 : -1),
            opacity: rand(0.55, 1),
            y
        });
    }

    const apCount = Math.min(8, Math.max(4, Math.floor(area / 320000)));
    apNodes = [];
    for (let i = 0; i < apCount; i++) {
        apNodes.push({
            x: rand(canvas.width * 0.08, canvas.width * 0.92),
            y: rand(canvas.height * 0.1, canvas.height * 0.9),
            period: rand(3200, 4600),
            offset: rand(0, 4000),
            maxR: rand(70, 120)
        });
    }
}

function getColors() {
    const styles = getComputedStyle(document.documentElement);
    return {
        line: styles.getPropertyValue('--net-line').trim(),
        dot: styles.getPropertyValue('--net-dot').trim(),
        accent: styles.getPropertyValue('--accent').trim()
    };
}

function cubicPoint(p0, p1, p2, p3, t) {
    const u = 1 - t;
    const x = u * u * u * p0.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t * t * t * p3.x;
    const y = u * u * u * p0.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * p3.y;
    return { x, y };
}

let t0 = performance.now();

function drawFrame(now) {
    const elapsed = now - t0;
    const { line, dot, accent } = getColors();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* Grille de points discrète en fond, pour la texture */
    ctx.fillStyle = dot;
    ctx.globalAlpha = 0.35;
    gridDots.forEach(g => {
        ctx.beginPath();
        ctx.arc(g.x, g.y, 1, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.globalAlpha = 1;

    /* Câbles ondulants avec flux de données + connecteurs + paquet */
    cables.forEach(c => {
        const sway = prefersReducedMotion ? 0 : elapsed * c.speed;
        const pts = c.base.map((p, i) => ({
            x: p.x,
            y: p.y + Math.sin(sway + c.phase + i * 1.1) * c.amp
        }));

        ctx.globalAlpha = c.opacity;
        ctx.strokeStyle = line;
        ctx.lineWidth = 1.4;
        ctx.lineCap = 'round';
        ctx.setLineDash([2.5, 13]);
        ctx.lineDashOffset = prefersReducedMotion ? 0 : -elapsed * c.dashSpeed;

        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        ctx.bezierCurveTo(pts[1].x, pts[1].y, pts[2].x, pts[2].y, pts[3].x, pts[3].y);
        ctx.stroke();
        ctx.setLineDash([]);

        /* Connecteurs (petits carrés type prise RJ45) aux deux extrémités visibles */
        [pts[0], pts[3]].forEach(p => {
            ctx.fillStyle = line;
            ctx.fillRect(p.x - 3, p.y - 3, 6, 6);
        });

        /* Paquet de données qui voyage sur le câble */
        const pt = prefersReducedMotion ? c.packetOffset : (c.packetOffset + elapsed * c.packetSpeed + 1000) % 1;
        const pp = cubicPoint(pts[0], pts[1], pts[2], pts[3], pt);
        ctx.save();
        ctx.shadowColor = accent;
        ctx.shadowBlur = 7;
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(pp.x, pp.y, 2.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    });
    ctx.globalAlpha = 1;

    /* Points d'accès : icône routeur + signaux Wi-Fi concentriques */
    apNodes.forEach(n => {
        ctx.fillStyle = accent;
        ctx.fillRect(n.x - 4, n.y - 3, 8, 6);
        ctx.strokeStyle = accent;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(n.x - 2.5, n.y - 3);
        ctx.lineTo(n.x - 2.5, n.y - 8);
        ctx.moveTo(n.x + 2.5, n.y - 3);
        ctx.lineTo(n.x + 2.5, n.y - 8);
        ctx.stroke();

        for (let ring = 0; ring < 3; ring++) {
            const t = prefersReducedMotion
                ? ring / 3
                : (((elapsed + n.offset + ring * (n.period / 3)) % n.period) / n.period);
            const r = t * n.maxR;
            const alpha = (1 - t) * 0.45;
            ctx.strokeStyle = accent;
            ctx.globalAlpha = Math.max(alpha, 0);
            ctx.lineWidth = 1.3;
            ctx.beginPath();
            ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
            ctx.stroke();
        }
        ctx.globalAlpha = 1;
    });

    requestAnimationFrame(drawFrame);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
requestAnimationFrame(drawFrame);
