function sendMessage(event) {
    event.preventDefault();
    
    let userInput = document.getElementById("userInput").value.trim();

    if (userInput === "") {
        alert("Please enter the genre!");
        return false;
    }

    let movieChatBot = document.getElementById("chatBot");
    movieChatBot.innerHTML = "Thinking...";

    movieChatBot.innerHTML = "You should watch " + getFilmRecommendationBasedOnGenre(userInput);
    

    // Clear input field
    document.getElementById("userInput").value = "";
    return false;

}

function getFilmRecommendationBasedOnGenre(genre){
    var romanceFilms = ['The Notebook', 'Titanic', 'Pride and Prejudice', 'The Fault in Our Stars', 'La La Land'];

    var horrorFilms = ['The Conjuring', 'Get Out', 'A Quiet Place', 'Hereditary', 'The Babadook'];

    var warFilms = ['Saving Private Ryan', 'Dunkirk', '1917', 'Hacksaw Ridge', 'Fury'];

    switch(genre) {
        case 'romance':
            return romanceFilms[Math.floor(Math.random() * romanceFilms.length)];

        case 'horror':
            return horrorFilms[Math.floor(Math.random() * horrorFilms.length)];

        case 'war':
            return warFilms[Math.floor(Math.random() * warFilms.length)];

        default:
            return "Sorry, I don't have any recommendations for that genre.";
    }

}