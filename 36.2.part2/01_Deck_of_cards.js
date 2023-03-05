let url=`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
let h1= document.querySelector('h1')
let h2= document.querySelector('h2');
let drawButton = document.querySelector('#draw');
let img = document.getElementById('card-image');



axios.get(url)
.then(res=>{
    console.log(res);
    console.log(res.data);
    console.log(res.data.text);
    let deck= res.data.deck_id;
    h1.innerText=`Deck name is ${deck}`


    drawButton.addEventListener('click', () => {
        let drawurl = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`;
axios.get(drawurl)
.then(res=>{
    console.log(res);
    let value= res.data.cards[0].value;
    let suit= res.data.cards[0].suit;
    let imageUrl = res.data.cards[0].image;
    let cardvalue = document.createElement('ul');
    h2.appendChild(cardvalue);
    let li = document.createElement('li');
    li.innerText = value + ' of ' + suit;
    cardvalue.appendChild(li);
    img.src = imageUrl;
    // let cardImage = document.createElement('img');
    // cardImage.src = imageUrl;
    // h2.appendChild(cardImage);

} )

})

});