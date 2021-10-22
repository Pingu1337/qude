
var getBodyElement = function() {
    return document.getElementsByTagName("body")[0];
}

var addCssClassToBody = function(cssClass) {
    var body = getBodyElement();

    if (!body.classList.contains(cssClass)) {
        body.classList.add(cssClass);
    }
}

var setLanguageOfBody = function(language) {
    var body = getBodyElement();
    body.lang = language;
}

var setTextDirectionOfBody = function (direction) {
        var body = getBodyElement();
        body.dir = direction;
    }
