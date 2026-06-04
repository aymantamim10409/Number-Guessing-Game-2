
window.onload = () => {
    alert('Make sure your device is not in silent mode');
};
const totalAtempts = 5;

let atemt = 0;
let won = 0;
let lost = 0;

const elemt = document.createElement('h2');

const form = document.querySelector('form');
const int = document.querySelector('#text');
const textp = document.querySelector('.textp');
const textr = document.querySelector('.textr');
const body = document.querySelector('.card-body');

const btn = document.querySelector('.main-btn');

const retryBtn = document.querySelector('.retry-btn');

textr.innerHTML = `Remaining attempts: ${totalAtempts}`;

form.addEventListener("submit", function(event){

    event.preventDefault();

    atemt++;

    result(int.value);

    textr.innerHTML = `Remaining attempts: ${totalAtempts - atemt}`;

    int.value = "";

    if(atemt >= totalAtempts){

        int.disabled = true;

        btn.disabled = true;

        textr.innerHTML = "Game Over 🎮";

        retryBtn.style.display = "block";

    }

});

function result(int){

    const randomNumberValue = randomNumber(10);

    if(parseInt(int) === randomNumberValue){

        textp.textContent = "You have won ⭐";

        won++;
        var au = new Audio('ad.mp3');
        au.play();

    }

    else{

        textp.textContent =
        "You have lost. The random number was " + randomNumberValue + " ☹️";

        lost++;
  var au1 = new Audio('ad1.mp3');
        au1.play();
    }

    elemt.innerHTML = `Won: ${won} | Lost: ${lost}`;

    elemt.classList.add("inner");

    body.appendChild(elemt);

}

function randomNumber(limit){

    return Math.floor(Math.random() * limit) + 1;

}

retryBtn.addEventListener("click", function(){

    location.reload();

});


