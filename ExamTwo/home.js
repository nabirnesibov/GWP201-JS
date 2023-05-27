
// let row=document.querySelector(".cards")
// let searchInput=document.querySelector("#search")
// let sort=document.querySelector(".sort")



// function allData(arr){
//     row.innerHTML="",
//   arr.forEach(element => {
//  row.innerHTML +=`
// <div class="col-12 col-md-6 col-lg-4 mt-4 ">
// <div class="card">
//    <a> <img src="${element.photo}" class="card-img-top" alt="..."></a>
//     <div class="card-body">
//       <strong class="card-title">${element.firstName},</strong><span class="card-text">${element.age} .years old</span><br>
      
      
//       <a href="#" class="btn btn-danger mt-3"id=${element.id} onclick=deleteCard(${element.id},this)>Delete</a>
//       <a href="add.html?id=${element.id}" class="btn btn-success mt-3")>Edit</a>
//       <a href="fav.html" class="btn btn-info mt-3" id=${element.id} onclick=deleteCard(${element.id},this)>Favorite</a>
//     </div>
//   </div>
// </div>

//  `       
//     })
    
// }

// async function deleteCard(id,btn){
//     await axios.delete(` http://localhost:8000/users/${id}`)
//     btn.parentElement().parentElement().parentElement().remove()
// }

// axios(" http://localhost:8000/users").then(res=> allData(res.data))
// search.addEventListener("input",function(e){
//     axios( " http://localhost:8000/users").then(res=> 
//         {
//           let filteredCard = res.data.filter((item=>
//                 item.firstName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) )) 
            
//              allData(filteredCard)
//         }
//        )
//     })

//     sort.addEventListener("click", function () {
//         if (this.innerHTML == "Sort Ascending") {
//           axios(" http://localhost:8000/users").then((res) => {
//             let sortAsc = res.data.sort((a, b) => a.age - b.age);
//             allData(sortAsc);
//           });
//           this.innerHTML = "Sort Descending";
//         } else if (this.innerHTML == "Sort Descending") {
//           axios(" http://localhost:8000/users").then((res) => {
//             let sortAsc = res.data.sort((a, b) => b.age - a.age);
//             allData(sortAsc);
//           });
//           this.innerHTML = "Default";
//         } else {
//           axios(" http://localhost:8000/users").then((res) => {
//             allData(res.data);
//           });
//           this.innerHTML = "Sort Ascending";
//         }
//       });