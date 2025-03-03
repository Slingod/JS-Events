// Fonctionnalité 1 : Afficher "clique" en console lorsqu'on clique sur le footer
let clickCount = 0;
document.querySelector('footer').addEventListener('click', function() {
    clickCount++;
    console.log(`clic numéro ${clickCount}`);
});

// Fonctionnalité 2 : Hamburger Menu
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.getElementById('navbarHeader').classList.toggle('collapse');
});

// Fonctionnalité 3 : Changer la couleur du texte de la première card en rouge
document.querySelectorAll('.card .btn-outline-secondary')[0].addEventListener('click', function() {
    let firstCard = document.querySelectorAll('.card')[0];
    firstCard.querySelector('.card-text').style.color = 'red';
});

// Fonctionnalité 4 : Changer la couleur du texte de la deuxième card en vert (toggle)
let secondCard = document.querySelectorAll('.card')[1];
document.querySelectorAll('.card .btn-outline-secondary')[1].addEventListener('click', function() {
    if (secondCard.querySelector('.card-text').style.color === 'green') {
        secondCard.querySelector('.card-text').style.color = '';
    } else {
        secondCard.querySelector('.card-text').style.color = 'green';
    }
});

// Fonctionnalité 5 : Désactiver Bootstrap au double-clic sur la navbar
document.querySelector('.navbar').addEventListener('dblclick', function() {
    let bootstrapLink = document.querySelector('link[href*="bootstrap.min.css"]');
    if (bootstrapLink.disabled) {
        bootstrapLink.disabled = false;
    } else {
        bootstrapLink.disabled = true;
    }
});

// Fonctionnalité 6 : Réduire la card au survol du bouton "View"
let cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
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

// Fonctionnalité 7 : Déplacer la dernière card en premier
document.querySelector('.btn-primary').addEventListener('click', function() {
    let cardContainer = document.querySelector('.album .row');
    let lastCard = cardContainer.lastElementChild;
    cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
});

// Fonctionnalité 8 : Déplacer la première card en dernier
document.querySelector('.btn-secondary').addEventListener('click', function(event) {
    event.preventDefault();
    let cardContainer = document.querySelector('.album .row');
    let firstCard = cardContainer.firstElementChild;
    cardContainer.insertBefore(firstCard, null);
});

// Fonctionnalité 9 : Réorganiser la page avec les touches a, y, p, b
document.querySelector('.navbar-brand').addEventListener('keypress', function(event) {
    let body = document.body;
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