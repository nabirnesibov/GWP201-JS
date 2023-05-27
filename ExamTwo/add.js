let form=document.querySelector("form")
let fileInput=document.querySelector("#exampleInputFile1")
let firstName1=document.querySelector("#exampleInputTitle1")
let age1=document.querySelector("#exampleInputContent1")
let btn=document.querySelector(".btn-primary")



const id = new URLSearchParams(window.location.search).get("id");


if (id) {
btn.innerHTML = "Edit";

  fetch(`http://localhost:8000/users/${id}`)
    .then((res) => res.json())
    .then((data) => {
      firstName1.value = data.firstName;
      age1.value = data.age;
    });
}


form.addEventListener("submit",function(e){
  e.preventDefault()
  let card = {
    id: Date.now(),
    photo:`./assests/img/${fileInput.value.split("\\")[2]}`,
    firstName:firstName1.value,  
    age:age1.value,  
}
if (!id) {

  fetch(`http://localhost:8000/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  }).then(() => {
    window.location = "home.html";
  });
} else {
  fetch(`http://localhost:8000/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  }).then(() => {
    window.location = "home.html";
  });
}
})