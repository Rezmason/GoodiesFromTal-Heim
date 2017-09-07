CopyHelper = {};

CopyHelper.init = function() {

    function cleanSelection() {
        var selection = window.getSelection();
        var text = selection.toString();
        
        var tempDiv = document.createElement("tempDiv");
        tempDiv.style = ""
            + "position: absolute;"
            + "left: -99999px;"
            + "white-space: pre;";
        document.body.appendChild(tempDiv);

        console.log(text);

        text = text.replace(/½/g, "1/2");
        text = text.replace(/¼/g, "1/4");
        text = text.replace(/¾/g, "3/4");
        text = text.replace(/[“”]/g, "\"");
        text = text.replace(/[‘’]/g, "'");
        text = text.replace(/×/g, "x");
        text = text.replace(/№/g, "No.");

        console.log(text);

        tempDiv.innerHTML = text;
        selection.selectAllChildren(tempDiv);

        window.setTimeout(function () {
            document.body.removeChild(tempDiv);
        }, 100);
    }

    document.addEventListener("copy", cleanSelection);
}
