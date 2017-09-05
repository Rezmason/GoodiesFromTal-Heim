function nudge(jostle = false) {
    var cards = document.getElementsByTagName("card");
    for (var i = 0; i < cards.length; i++) {
        var style = "transform:";
        if (jostle) {
            style += " rotate(" + (Math.random() * 2 - 1) * 1.5 + "deg)";
        }
        style += " translateY(" + i * -3 + "pt)"
        style += ";"
        cards[i].style = style;
    }
    if (jostle) {
        var recipe = document.getElementsByTagName("recipe")[0];
        recipe.style = "transform: rotate(" + (Math.random() * 2 - 1) * 2 + "deg);";
    }
}
