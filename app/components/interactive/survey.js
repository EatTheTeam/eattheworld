'use strict';

app.component('survey', {
    templateUrl: 'components/interactive/survey.html',
    controller: 'SurveyController',
    transclude: true,
    bindings: {
        questions: "<",
    }
});

app.controller('SurveyController', function ($scope, $timeout) {
    this.answered = [];
    this.answeredCorrectly = 0;
    this.finish = false;

    this.$onInit = () => {
        this.questions = shuffle(this.questions);
        console.log(this.questions);
        this.currentQuestion = 0;
    };

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
            if(arraysEqual(this.answered[i], this.questions[i].correct)|| this.answered[i]===this.questions[i].correct){
                this.answeredCorrectly++;
            }
        }
        this.finish = true;
    };

    this.showCorrect = () => {
        this.finish = true;
    };

    this.isMultiple = (question) => {
        return Array.isArray(question.correct);
    };

    this.toggle = (item) => {
        if(!this.inResults) {
            if (typeof this.answered[this.currentQuestion] === "undefined") this.answered[this.currentQuestion] = [];
            var idx = this.answered[this.currentQuestion].indexOf(item);
            if (idx > -1) {
                this.answered[this.currentQuestion].splice(idx, 1);
            }
            else {
                this.answered[this.currentQuestion].push(item);
            }
        }
    };

    this.exists = (item) => {
        if(typeof this.answered[this.currentQuestion] === "undefined") this.answered[this.currentQuestion]=[];
        return this.answered[this.currentQuestion].indexOf(item) > -1;
    };

    this.checked = (nAnswer) => {
        if(!this.inResults) {
            this.answered[this.currentQuestion] = nAnswer;
        }
    };

    this.isInArray = (number, array) => {
        if(!Array.isArray(array)) return false;
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
        this.inResults = false;
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

    this.showResult = () => {
        this.inResults = true;
        this.finish = false;
        this.currentQuestion = 0;
    }

    this.wouldTrue = (index) => {
        if(!Array.isArray(this.answered[this.currentQuestion])) {
            if (this.inResults && index === this.questions[this.currentQuestion].correct && this.answered[this.currentQuestion] !== index) {
                return true;
            }
        } else {
            if (this.inResults && this.questions[this.currentQuestion].correct.includes(index) && !this.answered[this.currentQuestion].includes(index)) {
                return true;
            }
        }
    };

    this.isFalse = (index) => {
        if(!Array.isArray(this.answered[this.currentQuestion])) {
            if (this.inResults && index !== this.questions[this.currentQuestion].correct && this.answered[this.currentQuestion] === index) {
                return true;
            }
        } else {
            if (this.inResults && !this.questions[this.currentQuestion].correct.includes(index) && this.answered[this.currentQuestion].includes(index)) {
                return true;
            }
        }
    };

    this.isCorrect = (index) => {
        if(!Array.isArray(this.answered[this.currentQuestion])) {
            if (this.inResults && index === this.questions[this.currentQuestion].correct && this.answered[this.currentQuestion] === index) {
                return true;
            }
        } else {
            if (this.inResults && this.questions[this.currentQuestion].correct.includes(index) && this.answered[this.currentQuestion].includes(index)) {
                return true;
            }
        }
    };

    this.textLength = (text) => {
        return text.length;
    };

    this.isNotUndefined = (v) => {
        return typeof v != "undefined";
    }

    var shuffle = function (array) {

        var currentIndex = array.length;
        var temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;

    };
});
