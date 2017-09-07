function nudge(type) {
    var jostle = type == "JOSTLE";
    var cards = document.querySelectorAll("card,titlecard");
    for (var i = 0; i < cards.length; i++) {
        var cardStyle = "transform:";
        if (jostle) {
            cardStyle += " rotate(" + rand(1.5) + "deg)";
        }
        cardStyle += " translateY(" + i * -3 + "pt)"
        cardStyle += ";"
        cards[i].style = cardStyle;
    }
    if (jostle) {
        var recipe = document.querySelectorAll("recipe")[0];
        if (recipe != null) {
            var recipeStyle = "transform:";
            recipeStyle += " rotate(" + rand(1) + "deg)";
            recipeStyle += " translate(" + rand(10) + "pt, " + rand(10) + "pt)";
            recipeStyle += ";";
            recipe.style = recipeStyle;
        }
    }
}

function rand(mult) {
    return (Math.random() * 2 - 1) * mult;
}
