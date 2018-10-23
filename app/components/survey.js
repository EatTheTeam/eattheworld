'use strict';

app.component('survey', {
    templateUrl: 'components/survey.html',
    controller: 'SurveyController',
    bindings: {
        name: "@?",
        questions: "<",
    }
});

app.controller('SurveyController', function () {
    this.currentQuestion = 0;
    this.answered = [];

    this.nextItem = () => {
       if(this.currentQuestion < this.questions.length){
           this.currentQuestion++;
       }
    };

    this.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
            list.splice(idx, 1);
        }
        else {
            list.push(item);
        }
    };
});
