
let random= Math.floor(Math.random()*100);
let mandom= Math.floor(Math.random()*100);
let url = `http://numbersapi.com/${random}?json`;
let rangeurl=`http://numbersapi.com/${random}..${mandom}`;
let p = document.querySelector('p');
let fourFacts = [];
let h2= document.querySelector('h2');

axios.get(url)
.then(res=>{
    console.log(res);
    console.log(res.data);
    let fact=res.data.text;
    let newfact=document.createElement('p');
    newfact.setAttribute("id", "fact");
    newfact.innerText= fact;
    p.appendChild(newfact);
})
axios.get(rangeurl)
.then(res=>{
    console.log(res);
    let listoffacts=res.data;
    let factrange=document.createElement('ul');
    h2.appendChild(factrange);

    for (let number in listoffacts) {
        let fact = listoffacts[number];
        let firstli = document.createElement('li');
        firstli.innerText = fact;
        factrange.appendChild(firstli);
    }
 
 
})

for(let i=0;i<=3; i++){
fourFacts.push(
    axios.get(url)
    .then(res=> res.data.text)
)
console.log(fourFacts)
}
Promise.all(fourFacts)
  .then(facts => {
    let factList = document.createElement('ul');
    p.appendChild(factList);
    facts.forEach(fact => {
      let li = document.createElement('li');
      li.innerText = fact;
      factList.appendChild(li);
    });
  });
