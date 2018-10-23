"use strict";

app.factory("Frage", function () {

    function Frage(template, modifier) {

        // Properties und ihre Defaultwerte
        let properties = {
            frage: "",
            antworten: ["Richtig", "Falsch"],
            multiple: false
        };

        Object.assign(this, properties, template, modifier);

        Object.keys(properties).forEach(k => Object.defineProperty(this, k, {writable: false}));

        // Liefert eine neue Instanz dieses Objekts mit den angegebenen Änderungen
        this.variante = modifier => new Frage(this, modifier);
    }

    return Frage;
});
