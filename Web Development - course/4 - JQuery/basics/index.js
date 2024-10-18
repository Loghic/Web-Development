$(document).ready(function () { // or without using this we can put it at the bottom od the body
    console.log($("h1").css("color")); // getting a color of the element
    $("h1").addClass("big-title margin-50"); // applying multiple classes to an element
    console.log($("h1").hasClass("margin-50")); // bool whether it has it
    console.log($("h1").attr("class"));
    $("h1").text("Bye") // changing just the content
    $("button").html("<em>Hey</em>"); // adding inner html

    $("button").click(function() {
        $("h1").css("color", "purple");
    });

    $("input").keypress(function(event) {
        console.log(event.key);
    });

    $(document).keypress(function(event) {
        $("h1").text(event.key);
    });

    $("h1").on("mouseover", function() {
        $("h1").css("color", "purple");
    });

    $("h1").on("click", function() {
        $("h1").css("color", "blue");
    });

    $("h1").before("<button>Click me</button>");

    $("button").on("click", function() {
        // $("h1").slideToggle();
        $("h1").animate({opacity: 0.5}); // has to have a numeric value
        $("h1").slideUp().slideDown().animate({opacity: 0.5});
    });
});