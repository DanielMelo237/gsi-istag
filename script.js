// ===== MENU MOBILE =====
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// ===== EMPLOI DU TEMPS DYNAMIQUE (semaines alternées) =====
const emploisDuTemps = {
    '1': { // Semaine 1 - Cours
        'Lundi': [
            { cours: 'Bases de données avancées', prof: 'Prof. NDOUMBE Jacques', salle: 'A101', horaire: '8h-11h' },
            { cours: 'Business Intelligence', prof: 'Prof. TCHINDA Roger', salle: 'A102', horaire: '11h-13h' },
            { cours: 'Développement Web avancé (TP)', prof: 'Prof. ESSOMBA Claire', salle: 'Labo 1', horaire: '14h-17h' }
        ],
        'Mardi': [
            { cours: 'Réseaux et Télécommunications', prof: 'Prof. MBARGA Paul', salle: 'B201', horaire: '8h-11h' },
            { cours: 'Sécurité des SI', prof: 'Prof. ONDOUA Marc', salle: 'B202', horaire: '11h-13h' },
            { cours: 'Gestion de projet IT', prof: 'Prof. BELL Anne', salle: 'B203', horaire: '14h-16h' }
        ],
        'Mercredi': [
            { cours: 'Développement Web avancé', prof: 'Prof. ESSOMBA Claire', salle: 'A101', horaire: '8h-11h' },
            { cours: 'Bases de données (TP)', prof: 'Prof. NDOUMBE Jacques', salle: 'Labo 2', horaire: '11h-14h' }
        ],
        'Jeudi': [
            { cours: 'Business Intelligence (TP)', prof: 'Prof. TCHINDA Roger', salle: 'Labo 1', horaire: '8h-11h' },
            { cours: 'Sécurité des SI', prof: 'Prof. ONDOUA Marc', salle: 'B202', horaire: '11h-13h' },
            { cours: 'Anglais technique', prof: 'Mme NGOA', salle: 'C301', horaire: '14h-16h' }
        ],
        'Vendredi': [
            { cours: 'Gestion de projet IT (Atelier)', prof: 'Prof. BELL Anne', salle: 'A102', horaire: '8h-11h' },
            { cours: 'Réseaux (TP)', prof: 'Prof. MBARGA Paul', salle: 'Labo 2', horaire: '11h-14h' }
        ]
    },
    '2': { // Semaine 2 - TP renforcés
        'Lundi': [
            { cours: 'Bases de données (Projet)', prof: 'Prof. NDOUMBE Jacques', salle: 'Labo 1', horaire: '8h-12h' },
            { cours: 'Business Intelligence (TP)', prof: 'Prof. TCHINDA Roger', salle: 'Labo 2', horaire: '13h-16h' }
        ],
        'Mardi': [
            { cours: 'Sécurité des SI (TP)', prof: 'Prof. ONDOUA Marc', salle: 'Labo 1', horaire: '8h-12h' },
            { cours: 'Gestion de projet IT', prof: 'Prof. BELL Anne', salle: 'B203', horaire: '13h-15h' }
        ],
        'Mercredi': [
            { cours: 'Développement Web (Projet)', prof: 'Prof. ESSOMBA Claire', salle: 'Labo 1', horaire: '8h-12h' },
            { cours: 'Réseaux', prof: 'Prof. MBARGA Paul', salle: 'B201', horaire: '13h-15h' }
        ],
        'Jeudi': [
            { cours: 'Business Intelligence', prof: 'Prof. TCHINDA Roger', salle: 'A102', horaire: '8h-11h' },
            { cours: 'Bases de données avancées', prof: 'Prof. NDOUMBE Jacques', salle: 'A101', horaire: '11h-13h' },
            { cours: 'Soutenance projets', prof: 'Tous', salle: 'Amphi', horaire: '14h-17h' }
        ],
        'Vendredi': [
            { cours: 'Développement Web', prof: 'Prof. ESSOMBA Claire', salle: 'A101', horaire: '8h-11h' },
            { cours: 'Sécurité des SI', prof: 'Prof. ONDOUA Marc', salle: 'B202', horaire: '11h-13h' }
        ]
    },
    '3': { // Semaine 3 - Projets & soutenances
        'Lundi': [
            { cours: 'Travail sur projets encadré', prof: 'Tous', salle: 'Labo 1', horaire: '8h-12h' },
            { cours: 'Business Intelligence', prof: 'Prof. TCHINDA Roger', salle: 'A102', horaire: '13h-15h' }
        ],
        'Mardi': [
            { cours: 'Préparation soutenances', prof: 'Encadrants', salle: 'Labo 1', horaire: '8h-12h' },
            { cours: 'Gestion de projet', prof: 'Prof. BELL Anne', salle: 'B203', horaire: '13h-15h' }
        ],
        'Mercredi': [
            { cours: 'Atelier professionnel', prof: 'Intervenant externe', salle: 'Amphi', horaire: '8h-12h' }
        ],
        'Jeudi': [
            { cours: 'Soutenances projets', prof: 'Jury GSI', salle: 'Amphi', horaire: '9h-17h' }
        ],
        'Vendredi': [
            { cours: 'Retour sur projets', prof: 'Tous', salle: 'A101', horaire: '9h-12h' },
            { cours: 'Bilan semestre', prof: 'Coordinateur GSI', salle: 'A101', horaire: '13h-15h' }
        ]
    }
};

function afficherEmploiDuTemps(semaine) {
    const container = document.getElementById('edt-container');
    if (!container) return;
    
    const edt = emploisDuTemps[semaine];
    const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
    
    let html = '<table class="edt-table"><thead><tr><th>Jour</th><th>Matin (8h-13h)</th><th>Après-midi (13h-17h)</th></tr></thead><tbody>';
    
    jours.forEach(jour => {
        const coursMatin = edt[jour].filter(c => {
            const horaire = c.horaire;
            return horaire.includes('8h') || horaire.includes('9h') || horaire.includes('10h') || horaire.includes('11h') || horaire.includes('12h');
        });
        const coursApresMidi = edt[jour].filter(c => {
            const horaire = c.horaire;
            return horaire.includes('13h') || horaire.includes('14h') || horaire.includes('15h') || horaire.includes('16h');
        });
        
        const matinHtml = coursMatin.map(c => `
            <div class="cours">${c.cours}</div>
            <div class="prof">${c.prof} • ${c.horaire}</div>
            <div class="salle">Salle ${c.salle}</div>
        `).join('');
        
        const apresMidiHtml = coursApresMidi.map(c => `
            <div class="cours">${c.cours}</div>
            <div class="prof">${c.prof} • ${c.horaire}</div>
            <div class="salle">Salle ${c.salle}</div>
        `).join('');
        
        html += `<tr>
            <td><strong>${jour}</strong></td>
            <td>${matinHtml || '<span style="color:#94a3b8;">- Pas de cours -</span>'}</td>
            <td>${apresMidiHtml || '<span style="color:#94a3b8;">- Pas de cours -</span>'}</td>
        </tr>`;
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
}

const semaineSelect = document.getElementById('semaine');
if (semaineSelect) {
    semaineSelect.addEventListener('change', (e) => {
        afficherEmploiDuTemps(e.target.value);
    });
    afficherEmploiDuTemps('2');
}

// ===== FILTRES DES RESSOURCES =====
const filtreBtns = document.querySelectorAll('.filtre-btn');
const ressourcesCards = document.querySelectorAll('.ressource-card');

if (filtreBtns.length > 0) {
    filtreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const categorie = btn.dataset.categorie;
            
            filtreBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            ressourcesCards.forEach(card => {
                if (categorie === 'all' || card.dataset.categorie === categorie) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ===== MODAL RDV =====
const modal = document.getElementById('rdvModal');
const btnsRdv = document.querySelectorAll('.btn-rdv');
const closeModal = document.querySelector('.modal-close');
const profNomSpan = document.getElementById('profNom');

function openModal(profNom) {
    if (profNomSpan) profNomSpan.textContent = profNom;
    if (modal) modal.style.display = 'flex';
}

function closeModalFunc() {
    if (modal) modal.style.display = 'none';
}

if (btnsRdv.length > 0) {
    btnsRdv.forEach(btn => {
        btn.addEventListener('click', () => {
            const prof = btn.getAttribute('data-prof');
            openModal(prof);
        });
    });
}

if (closeModal) {
    closeModal.addEventListener('click', closeModalFunc);
}

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFunc();
});

// ===== FORMULAIRE DE MESSAGE =====
const messageForm = document.getElementById('messageForm');
const contactMessage = document.getElementById('contactMessage');

if (messageForm) {
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nom = document.getElementById('nomEtudiant')?.value;
        const email = document.getElementById('emailEtudiant')?.value;
        const prof = document.getElementById('profDestinataire')?.value;
        const objet = document.getElementById('objet')?.value;
        const message = document.getElementById('messageContact')?.value;
        
        if (nom && email && prof && objet && message) {
            contactMessage.style.display = 'block';
            contactMessage.innerHTML = '✅ Message envoyé ! Le professeur vous répondra dans les plus brefs délais.';
            messageForm.reset();
            
            setTimeout(() => {
                contactMessage.style.display = 'none';
            }, 5000);
        } else {
            alert('Veuillez remplir tous les champs obligatoires (*)');
        }
    });
}

// ===== FORMULAIRE RDV =====
const rdvForm = document.getElementById('rdvForm');

if (rdvForm) {
    rdvForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nom = document.getElementById('rdvNom')?.value;
        const email = document.getElementById('rdvEmail')?.value;
        const date = document.getElementById('rdvDate')?.value;
        const heure = document.getElementById('rdvHeure')?.value;
        const sujet = document.getElementById('rdvSujet')?.value;
        
        if (nom && email && date && heure && sujet) {
            alert(`✅ Demande de rendez-vous envoyée !\n\nProfesseur: ${profNomSpan?.textContent}\nDate: ${date} à ${heure}\n\nVous recevrez une confirmation par email.`);
            rdvForm.reset();
            closeModalFunc();
        } else {
            alert('Veuillez remplir tous les champs');
        }
    });
}

// ===== FORMULAIRE SOUMISSION PROJET =====
const soumissionForm = document.getElementById('soumissionForm');
const soumissionMessage = document.getElementById('soumissionMessage');

if (soumissionForm) {
    soumissionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        soumissionMessage.style.display = 'block';
        soumissionMessage.innerHTML = '✅ Projet soumis avec succès ! Vous recevrez une confirmation par email.';
        soumissionForm.reset();
        
        setTimeout(() => {
            soumissionMessage.style.display = 'none';
        }, 5000);
    });
}

// ===== ANIMATION AU SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.actu-card, .rapide-card, .stat-card, .matiere-card, .ressource-card, .projet-card, .enseignant-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});