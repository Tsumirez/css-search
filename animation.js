let card_inputs = document.querySelectorAll("#search-results > label > input");

function cardClickHandler(card) {
    let animationSettings = { duration: 250, iterations: 1, fill: "forwards", direction: "reverse" };

    return function (e) {
        let cardFrameCoordinates = e.target.parentElement.parentElement.getBoundingClientRect();

        let pickCardAnimation = [
            { position:"static" },
            { left: cardFrameCoordinates.left + "px", top: cardFrameCoordinates.top + "px", position: "fixed", zIndex: 1, offset:0.001 },
            { left: "calc(50% - 125px)", top: "calc(50% - 141px)", position: "fixed", zIndex: 1 }
        ];

        animationSettings.direction = animationSettings.direction=="reverse"?"normal":"reverse";
        card.animate(pickCardAnimation, animationSettings);
    }
}

card_inputs.forEach(input => {
    let card = input.nextElementSibling;
    card.addEventListener("click", cardClickHandler(card))
});
