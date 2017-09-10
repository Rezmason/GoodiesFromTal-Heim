function nudge(type) {
    var jostle = type == "jostle";
    var cards = document.querySelectorAll("card,titlecard");
    for (var i = 0; i < cards.length; i++) {
        var cardStyle = "";
        if (jostle) {
            cardStyle += " rotate(" + rand(2) + "deg)";
        } else {
            cardStyle += " rotate(" + rand(0.5) + "deg)";
        }
        cardStyle += " translateY(" + i * -3 + "pt)"
        cards[i].style.setProperty("transform", cardStyle);
    }
    if (jostle) {
        var recipe = document.querySelectorAll("recipe")[0];
        if (recipe != null) {
            var recipeStyle = "";
            recipeStyle += " rotate(" + rand(1) + "deg)";
            recipeStyle += " translate(" + rand(10) + "pt, " + rand(10) + "pt)";
            recipe.style.setProperty("transform", recipeStyle);
        }
    }
}

function rand(mult) {
    return (Math.random() * 2 - 1) * mult;
}
