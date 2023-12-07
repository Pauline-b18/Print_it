// Tableau avec images et textes
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection des flèches gauche et droite
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Gestionnaire d'événements pour la flèche gauche
arrowLeft.addEventListener('click', function () {
    changeSlide(-1);
    console.log('Left arrow clicked')
});

// Gestionnaire d'événements pour la flèche droite
arrowRight.addEventListener('click', function () {
    changeSlide(1);
    console.log('right arrow clicked')
});


//  Indices de diapositives
let currentIndex = 0;

// Création des bullets pour chaque slide
function createDots() {
    const dotsContainer = document.querySelector('.dots');
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => changeSlide(index - currentIndex)); 
        dotsContainer.appendChild(dot);
    });
}

// Appel de la fonction pour créer les bullets
createDots();

// Mise à jour de l'état des bullets
function updateDots() {
    const dots = document.querySelectorAll('.dot'); 
    dots.forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentIndex);
    });
}


// Elements du carrousel
const bannerImg = document.querySelectorAll('.banner-img');
const tagline = document.querySelector('#banner p');


// Fonction pour changer de slide
function changeSlide(direction) {
    const newIndex = currentIndex + direction; 

    // Gestion des limites du tableau (boucle)
    if (newIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = newIndex;
    }

    // Mise à jour des images du carrousel
    bannerImg.forEach((img, index) => {
        let imageIndex = currentIndex + index;
    
        if (imageIndex >= slides.length) {
            imageIndex -= slides.length;
        }
    
        const imagePath = `./assets/images/slideshow/${slides[imageIndex].image}`;
        img.src = imagePath;
    });

    // Mise à jour du texte associé au slide
    tagline.innerHTML = slides[currentIndex].tagLine;

    // Mise à jour de l'état des bullets
    updateDots();
}
