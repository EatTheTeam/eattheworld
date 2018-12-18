'use strict';

app.component('home', {
    templateUrl: 'components/home/home.html',
    controller: 'HomeController',
    selector: 'app-root',
    animations: [

    ]

});

app.controller('HomeController', function () {
    this.sources = ["bbq", "noodles", "wok", "cookies", "bbq2"];
    this.id = 0;

    this.$onInit = () => {
        this.id = Math.floor(Math.random()*this.sources.length);
    };

    this.getVideo = () => {
       return "resources/videos/"+this.sources[this.id]+".mp4";
    }

});
