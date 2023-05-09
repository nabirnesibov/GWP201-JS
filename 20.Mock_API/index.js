let list = document.querySelector(".row");
let edit = document.querySelector(".fa-pen");


async function allData() {
  list.innerHTML = "";
  await fetch("http://localhost:8080/users")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((element) => {
        list.innerHTML += `
        <div class="col-5 d-flex justify-content-between align-items-center bg-secondary p-3 my-4">
        <div>
          <h3>${element.firstname}</h3>
          <p>${element.email}</p>
        </div>
        <div>
        <button style="background:transparent" id=${element.id} onclick=editData("${element.id}")><i class="fa-solid fa-pen text-success" ></i></button>
        <button style="background:transparent" id=${element.id} onclick=deleteData("${element.id}")><i class="fa-solid fa-trash-can text-danger" ></i></button>  
        </div>
      </div>
        `;
      })
    );
}
allData();

function deleteData(id){
  fetch(`http://localhost:8080/users/${id}`,{method:"DELETE"})
}

edit.addEventListener("click",function(e){
  e.preventDefault()
 window.location.href="./edit.html"


})

