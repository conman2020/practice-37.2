let url=`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
let deckId="";
let h2= document.querySelector('h2');
let img= document.getElementById("oneontopofanother");
let h3= document.querySelector('h3');
let rotationAngle = 0;
let cardCount = 0;

async function getUser(){
    try{
        let deckRes = await axios.get(url);
        deckId = deckRes.data.deck_id;
    
        let cardUrl1 = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
        let cardRes1 = await axios.get(cardUrl1);
        let card1 = cardRes1.data.cards[0];
        console.log(cardRes1.data);
        let card1tot=(card1.value + " of " + card1.suit);
    
        let cardUrl2 = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
        let cardRes2 = await axios.get(cardUrl2);
        let card2 = cardRes2.data.cards[0];
        let card2tot=(card2.value + " of " + card2.suit);
    
        console.log(card1.value + " of " + card1.suit);
        console.log(card2.value + " of " + card2.suit);
        cards=(card1tot + " and " + card2tot);
        h2.innerText=cards
        
        // let deckRes = await axios.get(url);
        // deckId = deckRes.data.deck_id;
        // let cardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
        // let cardRes = await axios.get(cardUrl);
        // console.log(cardRes.data.cards[0].value + " of " + cardRes.data.cards[0].suit);
        // cards=(cardRes.data.cards[0].value + " of " + cardRes.data.cards[0].suit);
        // h2.innerText=cards
    } catch (e) {
        console.log("User does not exist")
    }
}


async function getOne(){
    try{
        let deckResy = await axios.get(url);
        deckId = deckResy.data.deck_id;
        console.log(deckId);
    
        let cardUrl1 = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
        let cardRes1 = await axios.get(cardUrl1);
        
        let card1 = cardRes1.data.cards[0];
        console.log(card1)
        let card1tot=(card1.value + " of " + card1.suit);
        console.log(card1tot);
        let imageUrl = cardRes1.data.cards[0].image;
        h3.innerText=card1tot;
        console.log(imageUrl);
        
        let cardElement = document.createElement("img");
        cardElement.classList.add("card");
        cardElement.src = imageUrl;
        cardElement.alt = card1tot;

        if (cardCount > 0) {
        let rotationAngle = cardCount * 10;
        cardElement.classList.add(`rotate${rotationAngle}`);
        }

        document.getElementById("box").appendChild(cardElement);
        cardCount++;
        // img.src=imageUrl;
        // if (cardCount > 0) {
        //     addCard();
        //   }
        // img.classList.remove(`rotate${rotationAngle}`);
        // rotationAngle += 20;
        // img.classList.add(`rotate${rotationAngle}`);
        // img.alt=card1tot;
        // cardCount++;

    } catch (e) {
        console.log("User does not exist")
    }
}


$(document).ready(function () {
    $("#getUser").on("click", getUser);
    $("#getOne").on("click", getOne);
});



function addCard() {
    // Create a new card element
    const card = document.createElement("div");
    card.classList.add("card");
  
    // Increment the rotation angle
    rotationAngle += 20;
  
    // Set the rotation angle and z-index of the card
    card.style.transform = `rotate(${rotationAngle}deg)`;
    card.style.zIndex = rotationAngle / 20;
  
    // Add the card to the document
    document.body.appendChild(card);
  }