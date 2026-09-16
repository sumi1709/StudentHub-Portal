function validateLogin(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/
    var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

if(!namePattern.test(name)){

        alert("Invalid username. Username must contain only letters.");

        return false;

    }

if(!emailPattern.test(email)){

        alert("Invalid email address.");

        return false;

    }

alert("Login successful!");

    window.location.href = "dashboard.html";

    return false;
}
function menu(){

    var nav = document.getElementById("nav");

    if(nav.style.display == "block"){

        nav.style.display = "none";

    }
    else{

        nav.style.display = "block";

    }

}
function closeNotification(){

    document.getElementById("notification").style.display = "none";

}


var images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png"
];

var titles = [
    "StudentHub Events",
    "College Activities",
    "Student Programs"
];

var texts = [
    "Check the latest college events.",
    "Participate in different college activities.",
    "Explore programs and opportunities."
];

var slide = 0;

function showSlide() {
    document.getElementById("slideImage").src = images[slide];
    document.getElementById("slideTitle").innerHTML = titles[slide];
    document.getElementById("slideText").innerHTML = texts[slide];
}

function nextSlide() {
    slide++;

    if(slide >= images.length) {
        slide = 0;
    }

    showSlide();
}

function previousSlide() {
    slide--;

    if(slide < 0) {
        slide = images.length - 1;
    }

    showSlide();
}

// Automatically change image every 3 seconds
setInterval(nextSlide, 3000);


function changeTheme(){

    document.body.classList.toggle("dark-theme");

    var button = event.target;

    if(document.body.classList.contains("dark-theme")){
        button.innerHTML = "☀️ Light Mode";
    }
    else{
        button.innerHTML = "🌙 Dark Mode";
    }
}
