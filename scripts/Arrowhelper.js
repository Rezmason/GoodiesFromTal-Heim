ArrowHelper = {};

ArrowHelper.init = function() {
    var pageData = location.href.split('/').pop().split('_');
    var pageNumber = parseInt(pageData[0]);
    
    document.onkeydown = function(event) {
        switch (event.keyCode) {
            case 37: // left
                if (pageNumber > 1) {
                    location.href = (pageNumber - 1) + '_' + pageData[1];
                }
                break;
            case 39: // right
                if (pageNumber < 204) {
                    location.href = (pageNumber + 1) + '_' + pageData[1];
                }
                break;
        }
    };
}
