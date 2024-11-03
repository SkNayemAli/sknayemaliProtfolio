// Auto-Typing Effect for "Sk Nayem Ali"
const autoTypeText = "Sk Nayem Ali";
let index = 0;
const typingSpeed = 150; // Adjust the speed (milliseconds)

function autoType() {
    if (index < autoTypeText.length) {
        document.querySelector(".auto-type").textContent += autoTypeText.charAt(index);
        index++;
        setTimeout(autoType, typingSpeed);
    }
}

// Call the function to start typing when the page loads
window.onload = () => {
    autoType();
};

// HTML/CSS Progress Circular Bar 
let htmlProgress = document.querySelector(".html-css"),
    htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
    htmlEndValue = 90,
    htmlspeed = 30;

let progresshtml = setInterval(() => {
    htmlStartValue++;
    htmlValue.textContent = `${htmlStartValue}%`;
    htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;

    if (htmlStartValue === htmlEndValue) {
        clearInterval(progresshtml);
    }
}, htmlspeed);

// JavaScript Progress Circular Bar 
let javascriptProgress = document.querySelector(".javascript"),
    javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
    javascriptEndValue = 75,
    jsspeed = 30;

let progressjs = setInterval(() => {
    javascriptStartValue++;
    javascriptValue.textContent = `${javascriptStartValue}%`;
    javascriptProgress.style.background = `conic-gradient(#6f34fe ${javascriptStartValue * 3.6}deg, #ededed 0deg)`;

    if (javascriptStartValue === javascriptEndValue) {
        clearInterval(progressjs);
    }
}, jsspeed);

// DSA Progress Circular Bar 
let dsaProgress = document.querySelector(".dsa"),
    dsaValue = document.querySelector(".dsa-progress");

let dsaStartValue = 0,
    dsaEndValue = 90,
    dsaspeed = 30;

let progressdsa = setInterval(() => {
    dsaStartValue++;
    dsaValue.textContent = `${dsaStartValue}%`;
    dsaProgress.style.background = `conic-gradient(#ff6347 ${dsaStartValue * 3.6}deg, #ededed 0deg)`; // Tomato color

    if (dsaStartValue === dsaEndValue) {
        clearInterval(progressdsa);
    }
}, dsaspeed);

// C++ Progress Circular Bar 
let cppProgress = document.querySelector(".cpp"),
    cppValue = document.querySelector(".cpp-progress");

let cppStartValue = 0,
    cppEndValue = 90,
    cppSpeed = 30;

let progresscpp = setInterval(() => {
    cppStartValue++;
    cppValue.textContent = `${cppStartValue}%`;
    cppProgress.style.background = `conic-gradient(#ffa500 ${cppStartValue * 3.6}deg, #ededed 0deg)`; // Orange color

    if (cppStartValue === cppEndValue) {
        clearInterval(progresscpp);
    }
}, cppSpeed);

// C Progress Circular Bar 
let cProgress = document.querySelector(".c"),
    cValue = document.querySelector(".c-progress");

let cStartValue = 0,
    cEndValue = 90,
    cSpeed = 30;

let progressc = setInterval(() => {
    cStartValue++;
    cValue.textContent = `${cStartValue}%`;
    cProgress.style.background = `conic-gradient(#4682b4 ${cStartValue * 3.6}deg, #ededed 0deg)`; // Steel Blue color

    if (cStartValue === cEndValue) {
        clearInterval(progressc);
    }
}, cSpeed);

// SQL Progress Circular Bar 
let sqlProgress = document.querySelector(".sql"),
    sqlValue = document.querySelector(".sql-progress");

let sqlStartValue = 0,
    sqlEndValue = 75,
    sqlSpeed = 30;

let progresssql = setInterval(() => {
    sqlStartValue++;
    sqlValue.textContent = `${sqlStartValue}%`;
    sqlProgress.style.background = `conic-gradient(#20c997 ${sqlStartValue * 3.6}deg, #ededed 0deg)`; // Teal color

    if (sqlStartValue === sqlEndValue) {
        clearInterval(progresssql);
    }
}, sqlSpeed);

// Node.js Progress Circular Bar 
let nodejsProgress = document.querySelector(".nodejs"),
    nodejsValue = document.querySelector(".nodejs-progress");

let nodejsStartValue = 0,
    nodejsEndValue = 50,
    nodejsSpeed = 30;

let progressnodejs = setInterval(() => {
    nodejsStartValue++;
    nodejsValue.textContent = `${nodejsStartValue}%`;
    nodejsProgress.style.background = `conic-gradient(#8a2be2 ${nodejsStartValue * 3.6}deg, #ededed 0deg)`; // Blue Violet color

    if (nodejsStartValue === nodejsEndValue) {
        clearInterval(progressnodejs);
    }
}, nodejsSpeed);

// API Progress Circular Bar 
let apiProgress = document.querySelector(".api"),
    apiValue = document.querySelector(".api-progress");

let apiStartValue = 0,
    apiEndValue = 70,
    apiSpeed = 30;

let progressapi = setInterval(() => {
    apiStartValue++;
    apiValue.textContent = `${apiStartValue}%`;
    apiProgress.style.background = `conic-gradient(#dc143c ${apiStartValue * 3.6}deg, #ededed 0deg)`; // Crimson color

    if (apiStartValue === apiEndValue) {
        clearInterval(progressapi);
    }
}, apiSpeed);



// Filter Functionality using jQuery
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post").show("1000");
        } else {
            $(".post").not("." + value).hide("1000");
            $(".post").filter("." + value).show("1000");
        }
    });
});

// Sticky Navbar
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar-top').classList.add('fixed-top');
            // Add padding top to show content behind navbar
            let navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar-top').classList.remove('fixed-top');
            // Remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

// Back to Top Button Functionality
let mybutton = document.getElementById("btn-back-to-top");

// Show the button when user scrolls down 20px from the top
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Scroll to top when button is clicked
mybutton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
