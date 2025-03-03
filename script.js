// Fonctionnalité 1 : Compter les clics sur le footer
let clickCounter = 0;
document.querySelector('footer').addEventListener('click', function() {
    clickCounter++;
    console.log(`Clic numéro ${clickCounter}`);
});

// Fonctionnalité 2 : Activer/désactiver le menu hamburger
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const navbarHeader = document.getElementById('navbarHeader');
    navbarHeader.classList.toggle('collapse');
});

// Fonctionnalité 3 : Changer la couleur du texte de la première carte en rouge
document.querySelectorAll('.card .btn-outline-secondary')[0].addEventListener('click', function() {
    const firstCard = document.querySelectorAll('.card')[0];
    firstCard.querySelector('.card-text').style.color = 'red';
});

// Fonctionnalité 4 : Changer la couleur du texte de la deuxième carte en vert (toggle)
const secondCard = document.querySelectorAll('.card')[1];
document.querySelectorAll('.card .btn-outline-secondary')[1].addEventListener('click', function() {
    const cardText = secondCard.querySelector('.card-text');
    if (cardText.style.color === 'green') {
        cardText.style.color = '';
    } else {
        cardText.style.color = 'green';
    }
});

// Fonctionnalité 5 : Désactiver/réactiver Bootstrap au double-clic sur la navbar
document.querySelector('.navbar').addEventListener('dblclick', function() {
    const bootstrapLink = document.querySelector('link[href*="bootstrap.min.css"]');
    bootstrapLink.disabled = !bootstrapLink.disabled;
});

// Fonctionnalité 6 : Réduire la carte au survol du bouton "View"
document.querySelectorAll('.card').forEach(function(card) {
    let isReduced = false;

    card.querySelector('.btn-success').addEventListener('mouseover', function() {
        isReduced = true;
        card.querySelector('.card-text').style.display = 'none';
        card.querySelector('img').style.width = '20%';
    });

    card.querySelector('.btn-success').addEventListener('mouseout', function() {
        setTimeout(function() {
            if (isReduced) {
                card.querySelector('.card-text').style.display = 'block';
                card.querySelector('img').style.width = '100%';
                isReduced = false;
            }
        }, 100); // Ajuste le délai si nécessaire
    });
});

// Fonctionnalité 7 : Déplacer la dernière carte en premier
document.querySelector('.btn-primary').addEventListener('click', function() {
    const cardContainer = document.querySelector('.album .row');
    const lastCard = cardContainer.lastElementChild;
    cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
});

// Fonctionnalité 8 : Déplacer la première carte en dernier
document.querySelector('.btn-secondary').addEventListener('click', function(event) {
    event.preventDefault();
    const cardContainer = document.querySelector('.album .row');
    const firstCard = cardContainer.firstElementChild;
    cardContainer.appendChild(firstCard);
});

// Fonctionnalité 9 : Réorganiser la page avec les touches a, y, p, b
document.querySelector('.navbar-brand').addEventListener('keypress', function(event) {
    const body = document.body;
    body.className = ''; // Réinitialiser les classes

    switch(event.key) {
        case 'a':
            body.classList.add('col-4');
            break;
        case 'y':
            body.classList.add('col-4', 'offset-md-4');
            break;
        case 'p':
            body.classList.add('col-4', 'offset-md-8');
            break;
        case 'b':
            // Revenir à la normale
            break;
    }
});