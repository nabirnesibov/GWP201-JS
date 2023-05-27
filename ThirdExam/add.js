let form = document.querySelector("form");
let fileInput = document.querySelector("#exampleInputFile1");
let titleInput = document.querySelector("#exampleInputTitle1");
let textarea1 = document.querySelector(".textarea");
let btn = document.querySelector(".btn-primary");

const id =  new URLSearchParams(window.location.search).get("id");
let URL_users = "http://localhost:8080/users";


if (id) {
  btn.innerHTML = "EDIT";

  axios(`${URL_users}/${id}`)
  .then((res) => {
    titleInput.value = res.data.title;
    textarea1.value = res.data.content;
     })
}


form.addEventListener("submit",function(e){
    e.preventDefault()

    let user = {
      id: Date.now(),
      photo: `./assests/img/${fileInput.value.split("\\")[2]}`,
      title:titleInput.value,
      content:textarea1.value

    };

    if(!id){
       fetch(URL_users, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
       }).then(()=>{
        window.location="home.html"
       })
    }else{
       fetch(`${URL_users}/${id}`,{
             method: "PATCH",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
       }).then(()=>{
        window.location="home.html"
       })
       
    }
})