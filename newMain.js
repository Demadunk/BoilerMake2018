$(document).ready(function() {
    console.log('ready');
    var questionCounter = 0;
    var questions = ["<div id='shortTermSlider'></div> <br> 1. Are you willing to spend a lot of money on a pet?",
                     "<div id='longTermSlider'></div> <br> 2. Are you willing to spend a lot of time with a pet?", 
                     "3. Do you like to hold your pet?",
                     "4: Do you want a stationary pet?",
                     "5: Are you willing to take your pet with you outside?",
                     "6: Do you seek an independent pet?",
                     "7: Do you want a higher level of maitenence for your pet?",
                     "8: Do you want a silent pet?",
                     "9: Do you want to develop a relationship with your pet?"];
    $('.question').html(questions[questionCounter]);
    //let numTrue = 0;
    //let numFalse = 0;
    var dogCounter = 0;
    var catCounter = 0;
    var fishCounter = 0;
    var birdCounter = 0;
    var animals = [
        {
            type: "fish",
            shortCost: 20,
            longCost: 50,
        },
        {
            type: "cat",
            shortCost: 50,
            longCost: 2000
        },
        {
            type: "dog",
            shortCost: 500,
            longCost: 4000
        },
        {
            type: "bird",
            shortCost: 160,
            longCost: 1000
        }
    ];
    /*let affordableAnimals = [];
    $("#shortTermSlider").slider({
        max: 500,
        min: 1,
        values: [10, 200],
        range: true,
        step: 1,
    });
    $("#shortTermSlider").change(function(){
        affordableAnimals = affordableAnimals.filter(function(animal) {
            let values = $("#shortTermSlider").slider("values");
            if (animal.shortCost <= values[1] && animal.shortCost >= values[0]) {
                return animal;
            }
        });
    });
    $("#longTermSlider").slider({
       max: 5000,
       min: 100,
       values: [300, 2000],
       range: true,
       step: 50
    });
    $("#longTermSlider").change(function() {
        affordableAnimals = animals.filter(function(animal) {
            var values = $("#longTermSlider").slider("values");
            if (animal.longCost <= values[1] && animal.longCost >= values[0]) {
                return animal;
            }
        })
    });*/
   console.log('ready to click');
    $(".continue").click(function() {
        console.log(questionCounter);
        var val = $(this).data("value");
        if (val == "yes") {
            //numTrue++;
            if (questionCounter == 0) {
                dogCounter++;
                catCounter++;
                birdCounter++;
            }
            if (questionCounter == 1) {
                dogCounter++;
            }
            if (questionCounter == 2) {
                dogCounter++;
                catCounter++;
            } 
            if (questionCounter == 3) {
                birdCounter++;
                fishCounter++;
            } 
            if (questionCounter == 4) {
                dogCounter++;
            }
             if (questionCounter == 5) {
                catCounter++;
                birdCounter++;
            }
             if (questionCounter == 6) {
                dogCounter++;
                catCounter++;
            } 
            if (questionCounter == 7) {
                catCounter++;
                fishCounter++;
            }
            if (questionCounter == 8) {
                dogCounter++;
                catCounter++;
                birdCounter++;
            }
        } else {
            if (questionCounter == 0) {
                fishCounter++;
            }
            if (questionCounter == 1) {
                catCounter++;
                fishCounter++;
                birdCounter++;
            }
            if (questionCounter == 2) {
                fishCounter++;
                birdCounter++;
            }
            if (questionCounter == 3) {
                catCounter++;
                dogCounter++;
            }
            if (questionCounter == 4) {
                fishCounter++;
                catCounter++;
                birdCounter++;
            }
            if (questionCounter == 5) {
                fishCounter++;
                dogCounter++;
            }
            if (questionCounter == 6) {
                fishCounter;
                birdCounter++;
            } 
            if (questionCounter == 7) {
                birdCounter++;
                dogCounter++;
            }
            if (questionCounter == 8) {
                fishCounter++;
            }
        }
        questionCounter++;
        $(".question").html(questions[questionCounter]);
        if(questionCounter > 8) {
            $(".continue").hide()
            check_result()
        }
    });

    function check_result() {
     
        var animalChoice = new Array();
        for (i = 0; i < animals.length; i++) {
            if (animals[i].type == "dog") {
                animalChoice[i] = dogCounter;
            }
            if (animals[i].type == "cat") {
                animalChoice[i] = catCounter;
            }
            if (animals[i].type == "fish") {
                animalChoice[i] = fishCounter;
            }
            if (animals[i].type == "bird") {
                animalChoice[i] = birdCounter;
            }
        }
        var largest = animalChoice[0];
        var largestIndex = 0;
        for (i = 0; i < animalChoice.length; i++) {
            if (animalChoice[i] > largest) {
                largest = animalChoice[i];
                largestIndex = i;
            }
        }
        if (animalChoice[largestIndex] == dogCounter) {
            $(".question").html("you should get a dog!");
        } else if (animalChoice[largestIndex] == catCounter) {
            $(".question").html("you should get a cat!");
        } else if (animalChoice[largestIndex] == fishCounter) {
            $(".question").html("you should get a fish!");
        } else {
            $(".question").html("you should get a bird!");
        }   
    }
    
    
});

//
//
