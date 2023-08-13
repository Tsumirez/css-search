let card_inputs = document.querySelectorAll("#search-results > label > input");

let forwardCard = null;
let returnCard = null;


function cardClicked(e) {
    let card = e.target.parentElement;

    if(forwardCard === card) {
        returnCard = forwardCard;
        forwardCard = null;
    } else if (returnCard === card) {
        forwardCard = card;
        returnCard = null;
    } else {
        returnCard = forwardCard;
        forwardCard = card;
    }

    forwardCard && animateCard(forwardCard, 'normal');
    returnCard && animateCard(returnCard, 'reverse');
}


function animateCard(card, direction) {
    let animationSettings = { duration: 250, iterations: 1, fill: "forwards" };
    let cardFrameCoordinates = card.parentElement.getBoundingClientRect();

    let pickCardAnimation = [
        { position: "static" },
        { left: cardFrameCoordinates.left + "px", top: cardFrameCoordinates.top + "px", position: "fixed", zIndex: 1, offset: 0.001 },
        { left: "calc(50% - 125px)", top: "calc(50% - 141px)", position: "fixed", zIndex: 1 }
    ];

    card.animate(pickCardAnimation, { ...animationSettings, direction: direction })
}

card_inputs.forEach(input => {
    let card = input.nextElementSibling;
    card.addEventListener("click", cardClicked)
});
