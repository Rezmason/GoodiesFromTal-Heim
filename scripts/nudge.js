function nudge(type) {
    var jostle = type == "jostle";
    var cards = document.querySelectorAll("card,titlecard");
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
        var recipe = document.querySelectorAll("recipe")[0];
        if (recipe != null) {
            recipe.style = "transform: rotate(" + (Math.random() * 2 - 1) * 2 + "deg);";
        }
    }
}
