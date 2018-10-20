$(document).ready(function() {
    let numTrue = 0;
    let numFalse = 0;
    let questionCounter = 0;
    let questions = ["1. question 1", "2. question 2", "3. question 3"];
    $(".continue").click(function() {
        let val = $(this).data("value");
        if (val == true) {
            numTrue++;
        } else {
            numFalse++;
        }
        questionCounter++;
        $("h2").text(questions[questionCounter]);
    });
});

//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
