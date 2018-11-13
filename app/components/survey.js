'use strict';

app.component('survey', {
    templateUrl: 'components/survey.html',
    controller: 'SurveyController',
    transclude: true,
    bindings: {
        questions: "<",
    }
});

app.controller('SurveyController', function () {
    this.currentQuestion = 0;
    this.answered = [];
    this.answeredCorrectly = 0;
    this.finish = false;

    this.nextItem = () => {
       if(this.currentQuestion < this.questions.length){
           this.currentQuestion++;
       }
    };

    this.previousItem = () => {
        if(this.currentQuestion > 0){
            this.currentQuestion--;
        }
    };

    this.isLast = () => {
        return this.currentQuestion >= this.questions.length-1;
    };

    this.finishScreen = () => {
        for(let i = 0; i < this.questions.length; i++){
            console.log(this.answered[i]+", "+this.questions[i].correct);
            if(arraysEqual(this.answered[i], this.questions[i].correct)|| this.answered[i]===this.questions[i].correct){
                this.answeredCorrectly++;
            }
        }
        this.finish = true;
    };

    this.isMultiple = (question) => {
        return Array.isArray(question.correct);
    };

    this.toggle = (item) => {
        if(typeof this.answered[this.currentQuestion] === "undefined") this.answered[this.currentQuestion]=[];
        var idx = this.answered[this.currentQuestion].indexOf(item);
        if (idx > -1) {
            this.answered[this.currentQuestion].splice(idx, 1);
        }
        else {
            this.answered[this.currentQuestion].push(item);
        }
    };

    this.exists = (item) => {
        if(typeof this.answered[this.currentQuestion] === "undefined") this.answered[this.currentQuestion]=[];
        return this.answered[this.currentQuestion].indexOf(item) > -1;
    };

    this.checked = (nAnswer) => {
        return nAnswer;
    };

    this.isInArray = (number, array) => {
        for(let i = 0; i < array.length; i++){
            if(array[i]===number) return true;
        }
        return false;
    };

    this.repeat = () => {
        this.currentQuestion = 0;
        this.answered = [];
        this.answeredCorrectly = 0;
        this.finish = false;
    };

    this.isUndefined = (obj) => {
        return typeof obj === "undefined" || obj.length === 0;
    };

    function arraysEqual(_arr1, _arr2) {

        if (!Array.isArray(_arr1) || ! Array.isArray(_arr2) || _arr1.length !== _arr2.length)
            return false;

        var arr1 = _arr1.concat().sort();
        var arr2 = _arr2.concat().sort();

        for (var i = 0; i < arr1.length; i++) {

            if (arr1[i] !== arr2[i])
                return false;

        }

        return true;

    }
});
