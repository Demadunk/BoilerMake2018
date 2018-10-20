$(document).ready(function() {
    //let numTrue = 0;
    //let numFalse = 0;
    let dogCounter = 0;
    let catCounter = 0;
    let fishCounter = 0;
    let birdCounter
    let questionCounter = 0;
    let questions = ["<div id='shortTermSlider'></div> <br> 1. How much money do you want to spend in total (4 year basis)?",
                     "<div id='longTermSlider'></div> <br> 2. How much money are you willing to spend to get the pet?", 
                     "3. Do you like to hold your pet?",
    				 "4: Do you want a stationary pet?",
    				 "5: Are you willing to take your pet with you outside?",
    				 "6: Do you seek an independent pet?",
    				 "7: Do you want a higher level of maitenence for your pet?",
    				 "8: Do you want a silent pet?",
                     "9: Do you want to develop a relationship with your pet?"];
    let animals = [
        {
            type: fish,
            shortCost: 20,
            longCost: 50
        },
        {
            type: cat,
            shortCost: 50,
            longCost: 2000
        },
        {
            type: dog,
            shortCost: 500,
            longCost: 4000
        },
        {
            type: bird,
            shortCost: 160,
            longCost: 1000
        }
    ];
    $("#shortTermPrice").slider({
        max: 500,
        min: 1,
        values: [10, 200],
        range: true,
        step: 1,
    });
    $("#shortTermPrice").change(function(){
        affordableAnimals = affordableAnimals.filter(function(animal) {
            let values = $("#shortTermPrice").slider("values");
            if (animal.shortCost <= values[1] && animal.shortCost >= values[0]) {
                return animal;
            }
        });
    });
    $("#longTermPrice").slider({
       max: 5000,
       min: 100,
       values: [300, 2000],
       range: true,
       step: 50
    });
    $("#longTermPrice").change(function() {
        affordableAnimals = animals.filter(function(animal) {
            let values = $("#longTermPrice").slider("values");
            if (animal.longCost <= $("#longTermPrice").slider("values[1]")) {
                return animal;
            }
        })
    });
   
    $(".continue").click(function() {
        let val = $(this).data("value");
        if (val == true) {
            //numTrue++;
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
        } 
        
        $("h2").html(questions[questionCounter]);
        questionCounter++;
    });
});

//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
//<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js"></script>
