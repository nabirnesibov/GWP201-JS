let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");

let id = new URLSearchParams(window.location.search).get("id");

form.addEventListener("submit",function(e){
    e.preventDefault()
    if(!id){
       axios(`${URL}/${id}`).then((res) => {
           allInputs[0].value = res.data.name;
           allInputs[1].value = res.data.surname;
           allInputs[2].value = res.data.email;
           allInputs[3].value = res.data.photo;
           form.addEventListener("submit", function (e) {
             e.preventDefault();
             let editedData = {
               id:Date.now(),
               name: allInputs[0].value,
               surname: allInputs[1].value,
               email: allInputs[3].value
               // photo: allInputs[4].value,
               
             };
             axios.patch(
               `${URL}/${id}`,
               editedData
               );
             //   window.location = "index.html";
             });
           })
    }else{
       axios.post(
           `${URL}`,
           editedData
           );
    }
})


