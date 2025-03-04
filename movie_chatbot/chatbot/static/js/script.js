function loginUser() {
    if(validateLoginFormInput()) {
        var isVlidated = true;
    
        // Get Form Inputs
        var username = $('#name').val();
        var password = $('#password').val() ;

        varloginErrorList = $('#loginErrorList');
        loginError.html("");

        // Validate username
        if(username.length < 1) {
            loginErrorList.append("<li>Enter a name</li>");
            isVlidated = false;
        }

        if(!/^[a-z]+$/.test(name)) {
            loginErrorList.append("<li>Your name should only conatin lowercse letters(a-z)</li");
            isValidated = false;
        }

        // Validate password
        if(password.length < 1) {
            loginErrorList.append("<li>Enter a password</li>");
            isVlidated = false;
        }

        return isVlidated;
    }

     if (validateRegisterFormInput()) {       
         var isValidated = true;

         var name = $('#name').val();
         var email = $('#email').val();
         var password = $('#password').val();
         var confirmPassword = $('#confirmPassword').val();

         var registerErrorList = $('#registerErrorList');
         registerErrorList.html("");

         if (name.length > 30) {
            registerErrorList.append("<li>Your name should be less than 30 characters</li>");
            isValidated = false;
         }

         // Validate name
         if (name.length < 4) {
            registerErrorList.append("<li>Your name should be at least 4 characters</li>");
            isValidated = false;
         }

         if (!/^[a-z]+$/.test(name)) {
            registerErrorList.append("<li>Your name should only contain lowercase letters(a-z)</li>");
            isValidated = false;
         }

         // Validate email address
        if (email.length < 1) {
            registerErrorList.append("<li>Enter an email address</li>");
            isValidated = false;
        }

        emailRegx = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
        if (!emailRegx.test(email) && email.length > 0) {
            registerErrorList.append("<li>Enter a valid email address</li>");
            isValidated = false;
        }

        // Validate password
        if (password.length < 10) {
            registerErrorList.append("<li>Enter a password</li>");
            isValidated = false;
        }

        // Validate confirm password
        if (confirmPassword.length < 10) {
            registerErrorList.append("<li>Enter a password</li>");
            isValidated = false;
        }

        return isValidated;

            

    }
    
}


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

