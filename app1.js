let div2 = document.querySelector('.div2');
let score = 0;
let red = document.querySelector('.red');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');
let yellow = document.querySelector('.yellow');
let btn = document.querySelector('.btn');
let h2 = document.querySelector('h2');
let level = 0;
let count = 0;
let lengthg = 0;
let useraction = [];
let gameaction = [];
let pressed = false;
let colorlist = document.querySelectorAll('.btn');
function blink() {
    count++;
    h2.innerText = `Level ${level}`;
    level++;
    let randomno = Math.floor(Math.random() * 4);
    //console.log(randomno+1);
    //to make the gameaction now 
    gameaction.push(colorlist[randomno].getAttribute('id'));
    lengthg = gameaction.length;
    setTimeout(() => {
        colorlist[randomno].classList.add('flash');
        setTimeout(() => {
            colorlist[randomno].classList.remove('flash');
        }, 500);
    }, 1000);
    useraction = [];
}
//fun
function fun() {
    if (score == 10) {
        h2.innerText='CONGRATULATION YOU WON AND COMPLETED ALL 10 LEVEL';
        return;
    }
    if (useraction.length == lengthg) {
        if (JSON.stringify(gameaction) === JSON.stringify(useraction)) {
            score++;

            console.log("congratulation you  are promoted to next level");
            console.log('YOUR SCORE', score);
            blink();
        }
        else {
            console.log("you lost");
            console.log('YOUR SCORE', score);
            score = 0;
            div2.style.backgroundColor = "red";
            h2.innerText='Sorry you Lost';
        }
    }
}
//red
red.addEventListener('click', function () {
    useraction.push('red');
    setTimeout(() => {
        div2.classList.add('redmagic');
        setTimeout(() => {
            div2.classList.remove('redmagic');
        }, 500);
    },);
    fun();

})
//green
green.addEventListener('click', function () {
    useraction.push('green');
    setTimeout(() => {
        div2.classList.add('greenmagic');
        setTimeout(() => {
            div2.classList.remove('greenmagic');
        }, 500);
    },);
    fun();
})
//blue
blue.addEventListener('click', function () {
    useraction.push('blue');
    setTimeout(() => {
        div2.classList.add('bluemagic');
        setTimeout(() => {
            div2.classList.remove('bluemagic');
        }, 500);
    },);
    fun();
})
//yellow
yellow.addEventListener('click', function () {
    useraction.push('yellow');
    setTimeout(() => {
        div2.classList.add('yellowmagic');
        setTimeout(() => {
            div2.classList.remove('yellowmagic');
        }, 500);
    },);
    fun();
})


//step one of the program.
document.addEventListener("keydown", function () {
    if (pressed == false) {
        level++;
        pressed = true;
        //logic of random and pass to the blink function
        blink();
    }

})
