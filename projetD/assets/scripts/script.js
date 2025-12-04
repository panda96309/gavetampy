// Données des produits (peut être externalisé dans un fichier JSON)
 const produitsData = {
            "categories": [
                {
                    "id": "panneaux",
                    "nom": "Panneaux Solaires Monocristallins",
                    "produits": [
                        {
                            "id": "bv-630w",
                            "nom": "Panneau Solaire Monocristallin",
                            "modele": "BV-630W",
                            "description": "Panneau haute performance avec cellules monocristallines PERC pour un rendement optimal même en faible luminosité.",
                            "image": "assets/images/panneaux/640.jpg",
                            "specs": {
                                "Type de cellule": "mono",
                                "Voc": "52.47V",
                                "Isc": "15.21A",
                                "Dimensions": "2645x1134x30mm"
                            },
                            "garantie": "2 ans",
                            "prix": 67000
                        },
                        {
                            "id": "bv-610w",
                            "nom": "Panneau Solaire Monocristallin",
                            "modele": "BV-610W",
                            "description": "Panneau haute efficacité avec technologie demi-cellules pour une meilleure performance à l'ombre.",
                            "image": "assets/images/panneaux/610.jpg",
                            "specs": {
                                "Type de cellule": "mono",
                                "Voc": "48.10V",
                                "Isc": "16.05A",
                                "Dimensions": "2384x1134x30mm"
                            },
                            "garantie": "2 ans",
                            "prix": 65000
                        },
                        {
                            "id": "bv-580w",
                            "nom": "Panneau Solaire Monocristallin",
                            "modele": "BV-580W",
                            "description": "Panneau performant avec cadre renforcé en aluminium pour une durabilité accrue.",
                            "image": "assets/images/panneaux/580.jpg",
                            "specs": {
                                "Type de cellule": "mono",
                                "Voc": "51.47V",
                                "Isc": "14.37A",
                                "Dimensions": "2278x1134x30mm"
                            },
                            "garantie": "2 ans",
                            "prix": 60000
                        },
                        {
                            "id": "bv-560w",
                            "nom": "Panneau Solaire Monocristallin",
                            "modele": "BV-560W",
                            "description": "Panneau performant avec cadre renforcé en aluminium pour une durabilité accrue.",
                            "image": "assets/images/panneaux/560.jpg",
                            "specs": {
                                "Type de cellule": "mono",
                                "Voc": "49.62V",
                                "Isc": "14.07A",
                                "Dimensions": "2278x1134x30mm"
                            },
                            "garantie": "2 ans",
                            "prix": 57000
                        },
                        {
                            "id": "bv-550w",
                            "nom": "Panneau Solaire Monocristallin",
                            "modele": "BV-550W",
                            "description": "Panneau performant avec cadre renforcé en aluminium pour une durabilité accrue.",
                            "image": "assets/images/panneaux/550.jpg",
                            "specs": {
                                "Type de cellule": "mono",
                                "Voc": "49.62V",
                                "Isc": "14.07A",
                                "Dimensions": "2278x1134x30mm"
                            },
                            "garantie": "2 ans",
                            "prix": 55000
                        },
                        {
                            "id": "bv-440w",
                            "nom": "Panneau Solaire Monocristallin",
                            "modele": "BV-440W",
                            "description": "Panneau performant avec cadre renforcé en aluminium pour une durabilité accrue.",
                            "image": "assets/images/panneaux/440.jpg",
                            "specs": {
                                "Type de cellule": "mono",
                                "Voc": "39.13V",
                                "Isc": "14.15A",
                                "Dimensions": "1722x1134x30mm"
                            },
                            "garantie": "2 ans",
                            "prix": 48000
                        },
                        {
                            "id": "bv-100w",
                            "nom": "Panneau Solaire Monocristallin",
                            "modele": "BV-100W",
                            "description": "Panneau performant avec cadre renforcé en aluminium pour une durabilité accrue.",
                            "image": "assets/images/panneaux/100.jpg",
                            "specs": {
                                "Type de cellule": "mono",
                                "Voc": "22.45V",
                                "Isc": "5.9A",
                                "Dimensions": "1000x1134x30mm"
                            },
                            "garantie": "2 ans",
                            "prix": 16000
                        }
                    ]
                },
                {
                    "id": "onduleurs",
                    "nom": "Onduleurs Hybrides",
                    "produits": [
                        {
                            "id": "we-hy-11kw",
                            "nom": "Onduleur Hybride",
                            "modele": "we-hy-11kw",
                            "description": "Onduleur intelligent pour système solaire hybride, compatible avec batteries et réseau électrique.",
                            "image": "https://www.welionsolar.com/wp-content/uploads/2025/01/Vega-1.6KW.webp",
                            "specs": {
                                "Puissance": "11000W/11000VA",
                                "Entrée AC": "230VAC",
                                "Plage de tension MPPT": "90-500V",
                                "Tension batterie": "48V",
                                "Entrée MPPT": "2",
                                "Nombre de sorti2s": "2",
                                "Parallele": "6pieces",
                                "COMM": "RS485/RS232/USB"
                            },
                            "garantie": "1 ans",
                            "prix": 530000
                        },
                        {
                            "id": "we-hy-10.2kw",
                            "nom": "Onduleur Hybride",
                            "modele": "we-hy-10.2kw",
                            "description": "Onduleur compact avec surveillance à distance via application mobile.",
                            "image": "https://techstorelb.com/wp-content/uploads/2024/10/Orange-Inverter10K-welion_.jpg",
                            "specs": {
                                "Puissance": "10200W/10200VA",
                                "Entrée AC": "230VAC",
                                "Plage de tension MPPT": "90-500V",
                                "Tension batterie": "48V",
                                "Entrée MPPT": "2",
                                "Nombre de sorties": "2",
                                "Parallele": "6pieces",
                                "COMM": "RS485/RS232"
                            },
                            "garantie": "1 ans",
                            "prix": 340000
                        },
                        {
                            "id": "we-hy-6.2kw",
                            "nom": "Onduleur Hybride",
                            "modele": "we-hy-6.2kw",
                            "description": "Onduleur compact avec surveillance à distance via application mobile.",
                            "image": "https://jsmartsolar.com/wp-content/uploads/2024/07/202406051151241-17.jpg",
                            "specs": {
                                "Puissance": "6200W/6200VA",
                                "Entrée AC": "230VAC",
                                "Plage de tension MPPT": "90-500V",
                                "Tension batterie": "48V",
                                "Entrée MPPT": "2",
                                "Nombre de sorties": "2",
                                "COMM": "RS485/RS232"
                            },
                            "garantie": "1 ans",
                            "prix": 190000
                        },
                        {
                            "id": "we-hy-4.2kw",
                            "nom": "Onduleur Hybride",
                            "modele": "we-hy-4.2kw",
                            "description": "Onduleur compact avec surveillance à distance via application mobile.",
                            "image": "https://active-techs.com/wp-content/uploads/2024/07/ran4.2.jpg.webp",
                            "specs": {
                                "Puissance": "4200W/4200VA",
                                "Entrée AC": "230VAC",
                                "Plage de tension MPPT": "60-500V",
                                "Tension batterie": "24V",
                                "Nombre de sorties": "2",
                                "COMM": "RS485/RS232"
                            },
                            "garantie": "1 ans",
                            "prix": 170000
                        },
                        {
                            "id": "we-hy-3.5kw",
                            "nom": "Onduleur Hybride",
                            "modele": "we-hy-3.5kw",
                            "description": "Onduleur compact avec surveillance à distance via application mobile.",
                            "image": "https://www.welionsolar.com/wp-content/uploads/2024/04/welion-Orange-Inverter.webp",
                            "specs": {
                                "Puissance": "3500W/3500VA",
                                "Entrée AC": "230VAC",
                                "Plage de tension MPPT": "90-500V",
                                "Tension batterie": "24V"
                            },
                            "garantie": "1 ans",
                            "prix": 140000
                        },
                        {
                            "id": "we-hy-1kw",
                            "nom": "Onduleur Hybride",
                            "modele": "we-hy-1kw",
                            "description": "Onduleur compact avec surveillance à distance via application mobile.",
                            "image": "https://www.welionsolar.com/wp-content/uploads/2024/04/hybrid-Inverter-1K-welion_.webp",
                            "specs": {
                                "Puissance": "1000W/1000VA",
                                "Entrée AC": "230VAC",
                                "Plage de tension MPPT": "20-150V",
                                "Tension batterie": "24V",
                            },
                            "garantie": "1 ans",
                            "prix": 80000
                        }
                    ]
                },
                {
                    "id": "batteries",
                    "nom": "Batteries Lithium",
                    "produits": [
                        {
                            "id": "bv51.2 300",
                            "nom": "Batterie Lithium",
                            "modele": "bv51.2 300",
                            "description": "Batterie de stockage haute capacité avec technologie lithium-fer-phosphate pour une sécurité accrue.",
                            "image": "assets/images/Batteries/bv300ah.jpg",
                            "specs": {
                                "Type de cellule": "LIFE PO4",
                                "Capacite nominale": "300Ah",
                                "Tension nominale": "51.2V",
                                "Cycle de vie": "6000+"
                            },
                            "garantie": "3 ans",
                            "prix": 925000
                        },
                        {
                            "id": "bv12 300",
                            "nom": "Batterie Lithium",
                            "modele": "bv12 300",
                            "description": "Batterie modulaire avec système de gestion intelligent (BMS) intégré.",
                            "image": "assets/images/Batteries/12300ah.jpg",
                            "specs": {
                                "Type de cellule": "LIFE PO4",
                                "Capacite nominale": "300Ah",
                                "Tension nominale": "12V",
                                "Cycle de vie": "3000+"
                            },
                            "garantie": "2 ans",
                            "prix": 225000
                        },
                        {
                            "id": "bv51.2 100",
                            "nom": "Batterie Lithium",
                            "modele": "bv51.2 100",
                            "description": "Batterie modulaire avec système de gestion intelligent (BMS) intégré.",
                            "image": "assets/images/Batteries/51100.jpg",
                            "specs": {
                                "Type de cellule": "LIFE PO4",
                                "Capacite nominale": "100Ah",
                                "Tension nominale": "51.2V",
                                "Cycle de vie": "6000+"
                            },
                            "garantie": "3 ans",
                            "prix": 225000
                        },
                        {
                            "id": "bv25.6 300",
                            "nom": "Batterie Lithium",
                            "modele": "bv25.6 300",
                            "description": "Batterie modulaire avec système de gestion intelligent (BMS) intégré.",
                            "image": "assets/images/Batteries/25300.jpg",
                            "specs": {
                                "Type de cellule": "LIFE PO4",
                                "Capacite nominale": "300Ah",
                                "Tension nominale": "25.6V",
                                "Cycle de vie": "3000+"
                            },
                            "garantie": "3 ans",
                            "prix": 575000
                        },
                        {
                            "id": "bv25.6 100",
                            "nom": "Batterie Lithium",
                            "modele": "bv25.6 100",
                            "description": "Batterie modulaire avec système de gestion intelligent (BMS) intégré.",
                            "image": "assets/images/Batteries/25100.jpg",
                            "specs": {
                                "Type de cellule": "LIFE PO4",
                                "Capacite nominale": "100Ah",
                                "Tension nominale": "25.6V",
                                "Cycle de vie": "6000+"
                            },
                            "garantie": "3 ans",
                            "prix": 275000
                        }
                    ]
                },
                {
                    "id": "pompes",
                    "nom": "Pompes Hybrides AC/DC",
                    "produits": [
                        {
                            "id": "ph-3DPC3",
                            "nom": "Pompe Hybride AC/DC",
                            "modele": "3DPC3.5-95-110-750-A/D",
                            "description": "Pompe solaire hybride avec contrôleur MPPT intégré pour une efficacité maximale.",
                            "image": "https://www.v-cell.com/Uploads/Product/thumb_638eae62828aa.jpg",
                            "specs": {
                                "Puissance": "750W",
                                "HP": "1HP",
                                "Débit max(M3/h)": "5.5",
                                "Hauteur max": "65m"
                            },
                            "garantie": "",
                            "prix": 220000
                        },
                        {
                            "id": "ph-3DPC5",
                            "nom": "Pompe Hybride AC/DC",
                            "modele": "3DPC5.5-65-110-750-A/D",
                            "description": "Pompe solaire hybride avec contrôleur MPPT intégré pour une efficacité maximale.",
                            "image": "https://jjrorwxhriiqli5q.ldycdn.com/cloud/lqBpqKoqRliSkprirjlki/3U0A7378-300-300.jpg",
                            "specs": {
                                "Puissance": "750W",
                                "HP": "1HP",
                                "Débit max": "5.5",
                                "Hauteur max": "65m"
                            },
                            "garantie": "",
                            "prix": 220000
                        },
                        {
                            "id": "ph-3DPC6",
                            "nom": "Pompe Hybride AC/DC",
                            "modele": "3DPC6-100-200-1100-A/D",
                            "description": "Pompe solaire hybride avec contrôleur MPPT intégré pour une efficacité maximale.",
                            "image": "https://jjrorwxhriiqli5q.ldycdn.com/cloud/lqBpqKoqRliSkprirjlki/3U0A7378-300-300.jpg",
                            "specs": {
                                "Puissance": "1100W",
                                "HP": "1.5HP",
                                "Débit max(M3/h)": "6",
                                "Hauteur max": "100m"
                            },
                            "garantie": "",
                            "prix": 220000
                        },
                        {
                            "id": "ph-4DPC9",
                            "nom": "Pompe Hybride AC/DC",
                            "modele": "4DPC9.5-125-300-2200-A/D",
                            "description": "Pompe solaire hybride avec contrôleur MPPT intégré pour une efficacité maximale.",
                            "image": "https://jjrorwxhriiqli5q.ldycdn.com/cloud/lqBpqKoqRliSkprirjlki/3U0A7378-300-300.jpg",
                            "specs": {
                                "Puissance": "2200W",
                                "HP": "3HP",
                                "Débit max": "9.5M3/h",
                                "Hauteur max": "300m"
                            },
                            "garantie": "",
                            "prix": 250000
                        },
                        {
                            "id": "ph-3DSC4",
                            "nom": "Pompe Hybride AC/DC",
                            "modele": "3DSC4.5-100-200-750-A/D",
                            "description": "Pompe solaire hybride avec contrôleur MPPT intégré pour une efficacité maximale.",
                            "image": "https://bumienergisurya.com/wp-content/uploads/2019/11/Lorentz-PS2-4000-C-SJ5-25-b.jpg",
                            "specs": {
                                "Puissance": "750W",
                                "HP": "1HP",
                                "Débit max": "4.5M3/h",
                                "Hauteur max": "100m"
                            },
                            "garantie": "",
                            "prix": 225000
                        },
                        {
                            "id": "ph-4DSC9",
                            "nom": "Pompe Hybride AC/DC",
                            "modele": "4DSC9-100-200-1500-A/D",
                            "description": "Pompe solaire hybride avec contrôleur MPPT intégré pour une efficacité maximale.",
                            "image": "https://bumienergisurya.com/wp-content/uploads/2019/11/Lorentz-PS2-4000-C-SJ5-25-b.jpg",
                            "specs": {
                                "Puissance": "1500W",
                                "HP": "2HP",
                                "Débit max": "9M3/h",
                                "Hauteur max": "100m"
                            },
                            "garantie": "",
                            "prix": 235000
                        },
                        {
                            "id": "ph-4DSC11",
                            "nom": "Pompe Hybride AC/DC",
                            "modele": "4DSC11-120-300-2200-A/D",
                            "description": "Pompe solaire hybride avec contrôleur MPPT intégré pour une efficacité maximale.",
                            "image": "https://bumienergisurya.com/wp-content/uploads/2019/11/Lorentz-PS2-4000-C-SJ5-25-b.jpg",
                            "specs": {
                                "Puissance": "2200W",
                                "HP": "3HP",
                                "Débit max": "11M3/h",
                                "Hauteur max": "120m"
                            },
                            "garantie": "",
                            "prix": 270000
                        },
                        
                    ]
                }
            ]
        };


// Chargement des produits
document.addEventListener("DOMContentLoaded", function () {
  chargerProduits();
  initNavigation();
  initProductModal();
});

// Fonction pour charger les produits
function chargerProduits() {
  const container = document.getElementById("produits-container");

  try {
    // Simulation du chargement asynchrone
    setTimeout(() => {
      afficherProduits(produitsData.categories);
    }, 800);
  } catch (error) {
    console.error("Erreur:", error);
    afficherErreur();
  }
}

// Fonction pour afficher les produits
function afficherProduits(categories) {
  const container = document.getElementById("produits-container");
  container.innerHTML = "";

  categories.forEach((categorie) => {
    // Créer le titre de catégorie
    const titreCategorie = document.createElement("div");
    titreCategorie.className = "category-title";
    titreCategorie.innerHTML = `<h3>${categorie.nom}</h3>`;
    container.appendChild(titreCategorie);

    // Créer la grille de produits
    const grilleProduits = document.createElement("div");
    grilleProduits.className = "products-grid";

    // Ajouter chaque produit
    categorie.produits.forEach((produit) => {
      const carteProduit = creerCarteProduit(produit);
      grilleProduits.appendChild(carteProduit);
    });

    container.appendChild(grilleProduits);
  });
}

// Fonction pour créer une carte produit simplifiée
function creerCarteProduit(produit) {
  const carte = document.createElement("div");
  carte.className = "product-card";

  carte.innerHTML = `
                <div class="product-img">
                    <img src="${produit.image}" alt="${produit.nom} ${produit.modele}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3>${produit.nom}</h3>
                    <div class="product-model">${produit.modele}</div>
                    <p>${produit.description.substring(0, 100)}...</p>
                    <div class="product-price">${produit.prix}f</div>
                    <div class="product-actions">
                        <button class="btn" data-produit="${produit.id}">Détails</button>
                        <a href="#contact" class="btn btn-secondary">Devis gratuit</a>
                    </div>
                </div>
            `;

  return carte;
}

// Fonction en cas d'erreur
function afficherErreur() {
  const container = document.getElementById("produits-container");
  container.innerHTML = `
                <div class="error-message">
                    <h3>⚠️ Erreur de chargement</h3>
                    <p>Impossible de charger les produits. Veuillez réessayer plus tard.</p>
                    <button onclick="chargerProduits()" class="btn">Réessayer</button>
                </div>
            `;
}

// Navigation mobile
function initNavigation() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const nav = document.querySelector("nav ul");

  mobileMenu.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
    nav.classList.toggle("show");
  });

  // Fermer le menu en cliquant sur un lien
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
      mobileMenu.setAttribute("aria-expanded", "false");
    });
  });
}


// Initialisation de la modal de détails produit
function initProductModal() {
  const modal = document.getElementById("productModal");
  const closeBtn = modal.querySelector(".modal-close");

  // Fermer la modal
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // Fermer en cliquant en dehors
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  // Gestion des clics sur les boutons "Détails" des produits
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn") && e.target.dataset.produit) {
      e.preventDefault();
      const produitId = e.target.dataset.produit;
      afficherDetailsProduit(produitId);
    }
  });
}

// Fonction pour afficher les détails d'un produit
function afficherDetailsProduit(produitId) {
  // Trouver le produit
  let produitTrouve = null;
  for (const categorie of produitsData.categories) {
    produitTrouve = categorie.produits.find((p) => p.id === produitId);
    if (produitTrouve) break;
  }

  if (produitTrouve) {
    const modal = document.getElementById("productModal");
    const modalBody = document.getElementById("modalBody");

    // Générer le HTML des spécifications
    let specsHTML = "";
    for (const [key, value] of Object.entries(produitTrouve.specs)) {
      specsHTML += `<li><span>${key}:</span> <span>${value}</span></li>`;
    }

    // Remplir la modal avec les détails complets
    modalBody.innerHTML = `
                    <div class="modal-img">
                        <img src="${produitTrouve.image}" alt="${produitTrouve.nom} ${produitTrouve.modele}">
                    </div>
                    <div class="modal-details">
                        <h3>${produitTrouve.nom}</h3>
                        <div class="modal-model">${produitTrouve.modele}</div>
                        <div class="modal-description">${produitTrouve.description}</div>
                        <div class="modal-specs">
                            <h4>Caractéristiques techniques</h4>
                            <ul>${specsHTML}</ul>
                        </div>
                        <div class="modal-warranty">
                            <i class="fas fa-shield-alt"></i>
                            <span>Garantie: ${produitTrouve.garantie}</span>
                        </div>
                        <div class="modal-price">${produitTrouve.prix}f</div>
                        <div class="modal-actions">
                            <a href="#contact" class="btn btn-secondary">Demander un devis</a>
                            <button class="btn modal-close-btn">Fermer</button>
                        </div>
                    </div>
                `;

    // Afficher la modal
    modal.classList.add("active");

    // Fermer la modal avec le bouton "Fermer"
    modalBody
      .querySelector(".modal-close-btn")
      .addEventListener("click", () => {
        modal.classList.remove("active");
      });
  }
}
