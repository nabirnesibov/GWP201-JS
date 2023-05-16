let API = "https://restcountries.com/v2/all"
let row=document.querySelector(".cards")
let search=document.querySelector("#search")


async function allData(arr){
    row.innerHTML=""
    arr.forEach(element => {
row.innerHTML += `
<div class="col-3">
<a href="details.html?name=${element.name}">
    <div class="card" style="width: 18rem;">
        <img src="${element.flags.svg}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">Population: ${element.population}</p>
          <p class="card-text">Region:${element.region}</p>
          <p class="card-text">Capital::${element.capital}</p>
          
        </div>
      </div>
</a>
  </div>

`      
    });
}

axios(API).then(res=> allData(res.data))

search.addEventListener("input",function(e){
axios(API).then(res=> 
    {
      let filteredData = res.data.filter((item=>
            item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) )) 
        
         allData(filteredData)
    }
   )
})