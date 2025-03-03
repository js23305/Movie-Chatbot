async function validateLogin(event) {
    event.preventDefault(); // Prevent from refresh

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let loginErrorList = document.getElementById("loginErrorList");
    loginErrorList.innerHTML = ""; // Clear previous errors

    let isValidated = true;

    // Validate username (must contain only lowercase letters and be at least 4 characters long)
    if (username.length < 4) {
        loginErrorList.innerHTML += "<li>Username must be at least 4 characters long.</li>";
        isValidated = false;
    }

    // Valifdate password (at least 10 characters)
    if (password.length < 10) {
        loginErrorList.innerHTML += "<li> Your password must be at least 10 characters long.</li>";
        isValidated = false;
    }

    if (!isValidated) return;

    // Send login request to Django
    try {
        let response = await fetch("/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username, password}),
  });

        let data = await response.json();

        if (response.ok) {
            alert("Login successful!");
            document.getElementById("login-form").style.display = "none";
            document.getElementById("cahtbot-form").style.display = "block";
            document.getElementById("chatbot").innerHTML = `Welcome, ${username}! Ask me for movie recommendations.`;

        } else {
            loginErrorList.innerHTML += `<li>${data.error}</li>`;
        }
    } catch (error) {
        loginErrorList.innerHTML += `<li>Server error. Try again later</li>`;
    }

}

document.getElementById("loginButton").addEventListener("click", validateLogin);


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

