"use strict";

app.factory("Question", function () {

    function Question(template, modifier) {

        // Properties und ihre Defaultwerte
        let properties = {
            frage: "",
            antworten: ["True", "False"],
            multiple: false
        };

        Object.assign(this, properties, template, modifier);

        Object.keys(properties).forEach(k => Object.defineProperty(this, k, {writable: false}));

        // Liefert eine neue Instanz dieses Objekts mit den angegebenen Änderungen
        this.variante = modifier => new Question(this, modifier);
    }

    return Question;
});
