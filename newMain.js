$(document).ready(function() {
    //let numTrue = 0;
    //let numFalse = 0;
    let dogCounter = 0;
    let catCounter = 0;
    let fishCounter = 0;
    let birdCounter = 0;
    let affordableAnimals = new Array();
    let questionCounter = 0;
    let questions = ["1. How much money are you willing to spend to get the pet?",
                     "2. How much money do you want to spend in total?", 
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
            cost: 20
        },
        {
            type: cat,
            cost: 50
        },
        {
            type: dog,
            cost: 500
        },
        {
            type: bird,
            cost: 160
        }
    ];
    $("#pet-price-range").slider({
        values: [10, 200],
        max: 500,
        min: 1,
        range: true,
        step: 1,
    });
    $("#pet-price-range").change(function(){
        affordableAnimals = animals.filter(function(animals) {
            if (animals.cost <= $("#pet-price-range").slider("values[1]")) {
                return animals;
            }
        });
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
        questionCounter++;
        $("h2").text(questions[questionCounter]);
    });
});

//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
