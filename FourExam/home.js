let URL_ROBOTS = "http://localhost:8000/robots";
let row=document.querySelector(".robots")
let sort=document.querySelector(".sort")
let search=document.querySelector(".search")

// function allRobots(arr){
//     row.innerHTML="";
//     arr.forEach(element => {
//         row.innerHTML += `
//         <div class="col-12 col-md-6 col-lg-3">
//             <div class="card" style="width: 18rem">
//               <img
//                 src="${element.photo}"
//                 class="card-img-top"
//                 height="300px"
//                 alt="..."
//               />
//               <div class="card-body">
//                 <h5 class="card-titlev text-center">${element.title}</h5>
//                 <p class="card-text text-center">
//             ${element.content}
//                 </p>
//                 <p>Price: ${element.id}</p>
//                 <div class="row">
//                   <a href="details.html?id=${element.id}" class="btn btn-primary mt-2" id=${element.id}>Details</a>
//                   <a href="#" class="btn btn-danger mt-2"  id=${element.id} onclick=deleteRobot(${element.id},this) >Delete</a>
//                   <a href="addvsedit.html?id=${element.id}" class="btn btn-success mt-2" id=${element.id}>Edit</a>
//                   <a href="" class="btn btn-info mt-2" id=${element.id}>Favorits</a>
//                 </div>
//               </div>
//             </div>
//           </div>
        
//         `;
//     });
// }

// axios(URL_ROBOTS).then((res)=>allRobots(res.data))

// async function deleteRobot(id,btn){
//       await axios.delete(`${URL_ROBOTS}/${id}`);
//   btn.parentElement().parentElement().parentElement().parentElement().remove();

// }


// search.addEventListener("input", function (e) {
//   axios(URL_ROBOTS).then((res) => {
//     let filteredRobot = res.data.filter((item) =>
//       item.title
//         .toLocaleLowerCase()
//         .includes(e.target.value.toLocaleLowerCase())
//     );

//     allRobots(filteredRobot);
//   });
// });

// sort.addEventListener("click", function () {
//   if (this.innerHTML == "Sort Ascending") {
//     axios(URL_ROBOTS).then((res) => {
//       let sortAsc = res.data.sort((a, b) => a.price - b.price);
//       allRobots(sortAsc);
//     });
//     this.innerHTML = "Sort Descending";
//   } else if (this.innerHTML == "Sort Descending") {
//     axios(URL_ROBOTS).then((res) => {
//       let sortAsc = res.data.sort((a, b) => b.price - a.price);
//       allRobots(sortAsc);
//     });
//     this.innerHTML = "Default";
//   } else {
//     axios(URL_ROBOTS).then((res) => {
//       allRobots(res.data);
//     });
//     this.innerHTML = "Sort Ascending";
//   }
// });



let filtered = axios("http://localhost:8000/robots").then((res) => res.data.filter(el=>{
  return el.title.toLowerCase().includes(search.target.value.toLowerCase());
}
))


console.log(filtered);
