// BUTTON ALERTS

document.getElementById("startBtn").addEventListener("click", function(){

    alert("Welcome to Productivity & Workflow Engine!");

});

document.getElementById("featureBtn").addEventListener("click", function(){

    document.getElementById("features").scrollIntoView({
        behavior:"smooth"
    });

});

document.getElementById("dashboardBtn").addEventListener("click", function(){

    alert("Dashboard launching soon!");

});


// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        }
        else{

            counter.innerText = target;

        }
    };

    updateCounter();

});


// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    }
    else{

        navbar.style.boxShadow = "none";
    }

});