let form=document.querySelector("form")
let fileInput=document.querySelector("#exampleInputFile1")
let titleInput=document.querySelector("#exampleInputTitle1")
let contentInput=document.querySelector("#exampleInputContent1")
let btn=document.querySelector(".btn-primary")

form.addEventListener("submit",function(e){
  e.preventDefault()
  let card = {
    id: Date.now(),
    photo: fileInput.value,
    title:titleInput.value,  
    content:contentInput.value,  
};
  fetch(`http://localhost:8000/cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  })

  window.location.href="./home.html"
})



