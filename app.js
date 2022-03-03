const sel=document.querySelector('.select');
const flag=document.querySelector('.flag');
const area=document.querySelector('.area');
const nam=document.querySelector('.name');
const official=document.querySelector('.official');
const capital=document.querySelector('.capital');
const currency=document.querySelector('.currency');
const continental=document.querySelector('.continental');
const population=document.querySelector('.population');
const container=document.querySelector('.container');
function data(result,word){
    console.log(word);
    console.log(result);
    area.innerHTML=`Area: ${result[0].area}`;
    console.log(result[0].flags.png);
    flag.style.backgroundImage=`url(${result[0].flags.png})`;
    nam.innerHTML=word;
    official.innerHTML=`Official Name: ${result[0].name.official}`;
    // currency.innerHTML=`Currency: ${result[0].currencies[0].name}`;
    capital.innerHTML=`Capital: ${result[0].capital[0]}`;
    population.innerHTML=`Population: ${result[0].population}`;
    continental.innerHTML=`Continental: ${result[0].continents[0]}`;
   container.classList.remove("hide");


}

function fetchApi(word){
    let url=`https://restcountries.com/v3.1/name/${word}`;
    fetch(url).then(res=>res.json()).then(result=>data(result,word));
}

sel.addEventListener('click',()=>{
    let word=sel.value;
   fetchApi(word);
});

