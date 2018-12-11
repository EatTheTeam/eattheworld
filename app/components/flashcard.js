'use strict';

app.component('flashcard', {
    templateUrl: 'components/flashcard.html',
    controller: 'FlashcardController',
    bindings: {
        questions: "<",
    }
});

app.controller('FlashcardController', function ($timeout) {
    this.currentCard = 0;
    this.transitionTime = 300;

    this.revealed = false;
    this.revealeFast = false;

    this.transNextOut = false;
    this.transNextBetw = false;
    this.transNextIn = false;

    this.transPrevOut = false;
    this.transPrevBetw = false;
    this.transPrevIn = false;

    this.next = () => {
        nextF();
    };

    this.previous = () => {
        prevF();
    };
    
    var nextF = ()=>{
        if(!this.isLast()) {
            this.transPrevIn = false;
            this.transNextOut = true;
            $timeout(() => {
                this.transNextOut = false;
                this.transNextBetw = true;
                this.revealed = false;
                this.currentCard++;
                $timeout(() => {
                    this.transNextBetw = false;
                    this.transNextIn = true;
                    $timeout(() => {
                        this.transNextIn = false;
                    }, 300);
                }, 2);
            }, 300);
        }
    };

    var prevF = ()=>{
        if(!this.isFirst()) {
            this.transNextIn = false;
            this.transPrevOut = true;
            $timeout(() => {
                this.transPrevOut = false;
                this.transPrevBetw = true;
                this.revealed = false;
                this.currentCard--;
                $timeout(() => {
                    this.transPrevBetw = false;
                    this.transPrevIn = true;
                    $timeout(() => {
                        this.transPrevIn = false;
                    }, 300);
                }, 2);
            }, 300);
        }
    };

    this.isLast = () => {
        return this.currentCard>=this.questions.length-1;
    };

    this.isFirst = () => {
        return this.currentCard<=0;
    };


    this.reveal = () => {
        this.revealed = !this.revealed;
    }
});
