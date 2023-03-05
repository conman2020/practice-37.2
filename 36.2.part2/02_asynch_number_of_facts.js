let p = document.querySelector('p');
let drawnNumbers = [];
let drawnSecondNum= [];
let fourFacts=[];
let h2= document.querySelector('h2');
let oneFact= document.getElementById("oneFact");
let rangeofFacts= document.getElementById("rangeofFacts");
let fourFactsArray= document.getElementById("fourFacts");
const resetBtn = document.getElementById("reset");


async function getUser(){
    let random = getRandomNumber();
    try{
        let newUrl = await axios.get(`http://numbersapi.com/${random}?json`);
            console.log(newUrl);
            console.log(newUrl.data.text);
            oneNew = newUrl.data.text;
            oneFact.innerText = oneNew;
            drawnNumbers.push(random);
        

    }
    catch (e){

    }
}

async function getFourFacts(){
        let random = getRandomNumber();
        try{
    
            for(let i=0;i<=3; i++){
                let response = await axios.get(`http://numbersapi.com/${random}?json`);
      let text = response.data.text;
      let factList = document.createElement('ul');
      factList.innerText=text;
      fourFactsArray.appendChild(factList);

    }
  } catch (error) {
    console.error(error);
        }
    }

async function getRange(){
    let random, secondnum;
    let rangeUrl, rangeOne;

    do {
        random = getRandomNumber();
        secondnum = getRandomNumber() + 5;

        rangeUrl = await axios.get(`http://numbersapi.com/${random}..${secondnum}`);
        rangeOne = rangeUrl.data;

    } while (Object.keys(rangeOne).length === 0);
            for (let number in rangeOne) {
                let fact = rangeOne[number];
                let firstli = document.createElement('li');
                firstli.innerText = fact;
                firstli.setAttribute("id", "fact");
                rangeofFacts.appendChild(firstli);
            }
        

    }


function getRandomNumber() {
    let random = Math.floor(Math.random()*100);
    let secondnum= random + 5; 

    while (drawnNumbers.includes(random)) {
        random = Math.floor(Math.random()*100);
    }
    drawnNumbers.push(random);

    while (drawnSecondNum.includes(secondnum)) {
        secondnum = random + 5;
    }
    drawnSecondNum.push(secondnum);

    return random;
}

$(document).ready(function () {
    $("#getUser").on("click", getUser);
    $("#getRange").on("click", getRange);
    // $("#getOne").on("click", getOne);
    $("#getFourFacts").on("click", getFourFacts);
});



resetBtn.addEventListener("click", function() {
    document.querySelector('p').innerHTML = "";
    document.getElementById("oneFact").innerHTML = "";
    document.getElementById("fact").innerHTML = "";
    resetRange();
});
function resetRange() {
    let factsList = document.querySelectorAll("#rangeofFacts li");
    factsList.forEach(li => li.remove());
  }