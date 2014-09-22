$(document).ready(function(){
    $("button").click(function(){
        var userGuess = $("input[name=userGuessInput]").val();
        var answer = 13;
        if (userGuess == answer) {
            $('#list').append('<p>'+ "Wow, that was a good guess! You are correct!" +'</p>');
        } else if (userGuess <= 3) {
            $('#list').append('<p>'+ "Hint: I'm a nerd. Try again!" +'</p>');
        } else if (userGuess >= 30) {
            $('#list').append('<p>'+ "Whoa, whoa, whoa!  I'm not that big of a nerd. Try again!" +'</p>');
        } else {
            $('#list').append('<p>'+ "Getting warmer!  Try again!" +'</p>');
        };
        $(this).toggleClass("select");
    });

    $("#list").mouseover(function(){
        $(this).addClass("white");
    });
    $("#list").mouseleave(function(){
        $(this).removeClass("white");
    });
});


