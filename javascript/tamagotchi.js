// Afbeelding tamagotchi
var tamagotchiImg = document.getElementById("beestblij");


//Functie eten geven aan Bertje
var voedsel = 30;

function etenGeven() {
  voedsel += 3;
 document.getElementById("hoeveelheidvoedsel").innerHTML = voedsel;
}

document.getElementById("buttonEten").addEventListener("click", etenGeven);


//Functie spelen met Bertje
var vermaak = 10;

function spelen() {
  vermaak += 1;
  document.getElementById("hoeveelheidblijdschap").innerHTML = vermaak;
}

document.getElementById("buttonSpelen").addEventListener("click", spelen);


// Functie aftellen van eten
function aftellenEten(){
  voedsel -= 1;
  document.getElementById("hoeveelheidvoedsel").innerHTML = voedsel;
  if (voedsel <= 0){
    clearInterval(intervalBlijdschap);
    clearInterval(intervalEten);
    document.getElementById("hoeveelheidvoedsel").innerHTML = "Bertje is dood gegaan aan hongersnood";
    document.getElementById("hoeveelheidblijdschap").innerHTML = "Bertje is dood gegaan aan hongersnood";
    document.getElementById("buttonEten").style.display = "none";
    document.getElementById("buttonSpelen").style.display = "none";
  }
  if (voedsel >= 40){
    voedsel = 40;
    document.getElementById("hoeveelheidvoedsel").innerHTML = voedsel;
  }
  // Veranderen van foto's
  if (voedsel <= 0){
    tamagotchiImg.src = "images/tamagotchi2dood.svg";
  }
  else if (voedsel <= 5){
    tamagotchiImg.src = "images/tamagotchi2boos.svg";
  }
}


// Functie aftellen van blijdschap
function aftellenBlijdschap(){
  vermaak -= 1;
  document.getElementById("hoeveelheidblijdschap").innerHTML = vermaak;
  if (vermaak <= 0){
    clearInterval(intervalBlijdschap);
    clearInterval(intervalEten);
    document.getElementById("hoeveelheidvoedsel").innerHTML = "Bertje is een nieuw speelmaatje gaan zoeken";
    document.getElementById("hoeveelheidblijdschap").innerHTML = "Bertje is een nieuw speelmaatje gaan zoeken";
    document.getElementById("buttonEten").style.display = "none";
    document.getElementById("buttonSpelen").style.display = "none";
    }
    if (vermaak >= 20){
      vermaak = 20;
      document.getElementById("hoeveelheidblijdschap").innerHTML = vermaak;
    }
    // Veranderen van foto's
    if (vermaak <= 0){
      tamagotchiImg.src = "images/tamagotchi2dood.svg";
    }
    else if (vermaak <= 5){
      tamagotchiImg.src = "images/tamagotchi2boos.svg";
    }
    else if (vermaak <= 15){
      tamagotchiImg.src = "images/tamagotchi2middel.svg";
    }

    else if (vermaak <= 20){
      tamagotchiImg.src = "images/tamagotchi2.svg";
    }
   }


// Interval voor functies aftellen
var intervalBlijdschap = setInterval(aftellenBlijdschap,2000);
var intervalEten = setInterval(aftellenEten,1000);


// Achtergrond veranderen
var body = document.querySelector("body");


function achtergrondVeranderen1(){
  body.classList.toggle("achtergrond1");
  body.classList.remove("achtergrond2");
  body.classList.remove("achtergrond3");
}

function achtergrondVeranderen2(){
  body.classList.toggle("achtergrond2");
  body.classList.remove("achtergrond1");
  body.classList.remove("achtergrond3");
}

function achtergrondVeranderen3(){
  body.classList.toggle("achtergrond3");
  body.classList.remove("achtergrond1");
  body.classList.remove("achtergrond2");
}

// Buttons achtergrond veranderen
document.getElementById("buttonAchtergrond1").addEventListener("click",achtergrondVeranderen1);
document.getElementById("buttonAchtergrond2").addEventListener("click",achtergrondVeranderen2);
document.getElementById("buttonAchtergrond3").addEventListener("click",achtergrondVeranderen3);


// Array namen
var namen = ["Bertje", "Jopie", "Hannes"];

function naam1(){
  document.getElementById("naam").innerHTML = namen[0];
}

function naam2(){
  document.getElementById("naam").innerHTML = namen[1];
}

function naam3(){
  document.getElementById("naam").innerHTML = namen[2];
}

// Event listener namen
document.getElementById("buttonBertje").addEventListener("click", naam1);
document.getElementById("buttonJopie").addEventListener("click", naam2);
document.getElementById("buttonHannes").addEventListener("click", naam3);


// Geluid aaien
var aaiGeluid = document.getElementById("audioAaien");

function aaien(){
  aaiGeluid.play();
}

tamagotchiImg.addEventListener("mouseover", aaien);
