let row =document.querySelector(".row1")


let name1=new URLSearchParams(window.location.search).get("name")
let obj;

axios(`https://restcountries.com/v3.1/name/${name1}`).then((res)=>{
    obj=res.data
    row.innerHTML +=`
    <div class="col-6">
    <img src="${res.data.flags.svg}" alt="">
</div>
<div class="col-6">
    <div class="row">
        <div class="col">${res.data.name}</div>
    </div>
    <div class="row">
        <div class="col-6">Native Name: ${res.data.nativeName}</div>
        <div class="col-6">Top Level Domain:${res.data.topLevelDomain}</div>
    </div>
    <div class="row">
        <div class="col-6">Population:${res.data.population}</div>
        <div class="col-6">Currenciies:${res.data.currencies.code}</div>
    </div>
    <div class="row">
        <div class="col-6">Region:${res.data.region}</div>
        <div class="col-6">Languages:${res.data.languages}</div>
    </div>
    <div class="row">
        <div class="col">Sub Region:${res.data.region}</div>
     
    </div>
    <div class="row">
        <div class="col">Capital:${res.data.capital}</div>
        
    </div>
    <div class="row">
        <div class="col">Border Countries:${res.data.borders}</div>
    
    </div>
</div>
    `
})