const clouds = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const heads = document.querySelectorAll(".head");
let lastCloud;

let timeUp = false; // false si pas fini et true si terminé
let score = 0;

function randomTime(min,max){
    return Math.round(Math.random()*(max-min)+min);
}



function randomCloud(clouds){
    const indexCloud = Math.floor(Math.random() * clouds.length);
    const cloudSelect = clouds[indexCloud];

    if(cloudSelect == lastCloud){
        return randomCloud(clouds);
    }
    lastCloud = cloudSelect;

    return cloudSelect;
}



function showHead1() {
    const time = randomTime(600, 1000);
    const cloud = randomCloud(clouds); // choisi un nuage aléatoire 
    cloud.classList.add("up"); // Pour afficher les têtes
    setTimeout(() => {
        if(!timeUp) showHead1(); // si timeUp n'est pas fini on va appeler la fonction showHead (fonction récursive)
        cloud.classList.remove("up") // Pour retirer les têtes
    } , time); // time= le délais d'affichage des têtes
}

function showHead2() {
    const time = randomTime(500, 800);
    const cloud = randomCloud(clouds); // choisi un nuage aléatoire 
    cloud.classList.add("up"); // Pour afficher les têtes
    setTimeout(() => {
        if(!timeUp) showHead2(); // si timeUp n'est pas fini on va appeler la fonction showHead (fonction récursive)
        cloud.classList.remove("up") // Pour retirer les têtes
    } , time); // time= le délais d'affichage des têtes
}

function showHead3() {
    const time = randomTime(300, 500);
    const cloud = randomCloud(clouds); // choisi un nuage aléatoire 
    cloud.classList.add("up"); // Pour afficher les têtes
    setTimeout(() => {
        if(!timeUp) showHead3(); // si timeUp n'est pas fini on va appeler la fonction showHead (fonction récursive)
        cloud.classList.remove("up") // Pour retirer les têtes
    } , time); // time= le délais d'affichage des têtes
}

function playerScore(event){
    if(!event.isTrusted) return;
    score++; // Quand on clique sur la tête le score augmente de 1
    this.classList.remove("up"); // Quand on clique sur la tête elle disparaît
    scoreBoard.textContent = score;
}

heads.forEach(head => head.addEventListener ("click", playerScore)); //fonction callback

function startGame1() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead1();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "end";
        }, 2000);
    }, 10000);
}

function startGame2() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead2();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "end";
        }, 2000);
    }, 10000);
}

function startGame3() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead3();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "end";
        }, 2000);
    }, 10000);
}

/* NIVEAUX */

var speed = 50;
var i = 0;
var text1 = "NOVICE";

var j=0;
var text2 = "APPRENTI";

var k=0;
var text3 = "EXPERT";

function typeWriter1() {

    if(i< text1.length) {
        document.getElementById("demo1").innerHTML += text1.charAt(i)
        i++;
        setTimeout(typeWriter1, speed);
    }
}

function typeWriter2() {

    if(j< text2.length) {
        document.getElementById("demo2").innerHTML += text2.charAt(j)
        j++;
        setTimeout(typeWriter2, speed);
    }
}

function typeWriter3() {

    if(k< text3.length) {
        document.getElementById("demo3").innerHTML += text3.charAt(k)
        k++;
        setTimeout(typeWriter3, speed);
    }
}

function myClick() { //pour cacher les écritures au clique
    for(var i=1; i<=3;i++) { // boucle pour récupérer les démo
        document.getElementById("demo"+i).addEventListener("click", 
        function() {
            document.getElementById("demo1").style.display = "none";
            document.getElementById("demo2").style.display = "none";
            document.getElementById("demo3").style.display = "none";
        })
    }
}

document.getElementById("morty-play").addEventListener("click", function(){
    typeWriter1();
    typeWriter2();
    typeWriter3();
    myClick();
})