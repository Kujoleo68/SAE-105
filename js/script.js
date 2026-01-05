// Liste des chemins vers mes images de pokéballs
const images = [
    'img/ball/beast.png',
    'img/ball/cherish.png',
    'img/ball/dive.png',
    'img/ball/dream.png',
    'img/ball/dusk.png',
    'img/ball/fast.png',
    'img/ball/feather.png',
    'img/ball/friend.png',
    'img/ball/gigaton.png',
    'img/ball/great.png',
    'img/ball/heal.png',
    'img/ball/heavy.png',
    'img/ball/hisuian-great.png',
    'img/ball/hisuian-heavy.png',
    'img/ball/hisuian-poke.png',
    'img/ball/hisuian-ultra.png',
    'img/ball/jet.png',
    'img/ball/leaden.png',
    'img/ball/level.png',
    'img/ball/love.png',
    'img/ball/lure.png',
    'img/ball/luxury.png',
    'img/ball/master.png',
    'img/ball/moon.png',
    'img/ball/nest.png',
    'img/ball/net.png',
    'img/ball/origin.png',
    'img/ball/park.png',
    'img/ball/poke.png',
    'img/ball/premier.png',
    'img/ball/quick.png',
    'img/ball/repeat.png',
    'img/ball/safari.png',
    'img/ball/sport.png',
    'img/ball/strange.png',
    'img/ball/timer.png',
    'img/ball/ultra.png',
    'img/ball/wing.png',
];

// Fonction pour obtenir une image aléatoire
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Fonction pour créer les boutons dynamiquement
function createSAEButtons() {
    const container = document.querySelector('.pokeball');
    
    if (!container) {
        console.error('Conteneur .pokeball introuvable');
        return;
    }

    // Parcourir chaque SAE dans l'objet
    Object.keys(SAE).forEach(saeCode => {
        const sae = SAE[saeCode];
        
        // Créer le bouton
        const button = document.createElement('button');
        button.className = 'SAEbtn';
        button.textContent = saeCode;
        
        // Appliquer une image aléatoire au bouton
        const randomImage = getRandomImage();
        button.style.backgroundImage = `url('${randomImage}')`;
        button.style.backgroundSize = 'cover';
        button.style.backgroundPosition = 'center';
        
        // Rediriger vers la page de détail avec le code SAE
        button.addEventListener('click', () => {
            window.location.href = `sae_detail.html?sae=${saeCode}`;
        });
        
        // Ajouter le bouton au conteneur
        container.appendChild(button);
    });
}

// Exécuter au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    createSAEButtons();
});