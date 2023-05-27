

let row=document.querySelector(".cards")
let searchInput=document.querySelector("#search")
let sort=document.querySelector(".sort")


function allData(arr){
    row.innerHTML="",
  arr.forEach(element => {
 row.innerHTML +=`
<div class="col-12 col-md-6 col-lg-3">
<div class="card">
   <a> <img src="${element.photo}" class="card-img-top" alt="..."></a>
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.content}</p>
      <h4>Price:${element.id}</h4>
      <a href="#" class="btn btn-danger"id=${element.id} onclick=deleteCard(${element.id},this)>Delete</a>
      <a href="#" class="btn btn-success"id=${element.id} onclick=deleteCard(${element.id},this)>Favorite</a>
    </div>
  </div>
</div>

 `       
    })
    
}


async function deleteCard(id,btn){
    await axios.delete(`http://localhost:8080/cards/${id}`)
    btn.parentElement().parentElement().parentElement().remove()
}

axios("http://localhost:8080/cards").then(res=> allData(res.data))
search.addEventListener("input",function(e){
    axios("http://localhost:8080/cards").then(res=> 
        {
          let filteredCard = res.data.filter((item=>
                item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) )) 
            
             allData(filteredCard)
        }
       )
    })

    
sort.addEventListener("click", function () {
    if (this.innerHTML == "Sort Ascending") {
      axios("http://localhost:8080/cards").then((res) => {
        let sortAsc = res.data.sort((a, b) => a.id - b.id);
        allData(sortAsc);
      });
      this.innerHTML = "Sort Descending";
    } else if (this.innerHTML == "Sort Descending") {
      axios("http://localhost:8080/cards").then((res) => {
        let sortAsc = res.data.sort((a, b) => b.id - a.id);
        allData(sortAsc);
      });
      this.innerHTML = "Default";
    } else {
      axios("http://localhost:8080/cards").then((res) => {
        allData(res.data);
      });
      this.innerHTML = "Sort Ascending";
    }
  });