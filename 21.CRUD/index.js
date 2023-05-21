let form = document.querySelector("form");
let firstInput = document.querySelector("#firstName");
let lastInput = document.querySelector("#lastName");
let email1 = document.querySelector("#email");
let cardNumber = document.querySelector("#number");
let subbtn = document.querySelector(".subbtn");
let icon1 = document.querySelector("#icon1");
let icon2 = document.querySelector("#icon2");
let tBody = document.querySelector("tbody");
let search = document.querySelector("#search");


icon1.style.display="none"
icon2.style.display="none"

async function allData() {
  tBody.innerHTML = "";
  await axios(" http://localhost:8000/users").then((res) =>
    res.data.forEach((element) => {
      tBody.innerHTML += `
    <tr>
    <td>${element.firstName}</td>
    <td>${element.lastName}</td>
    <td>${element.email}</td>
    <td>${(element.cardnumber)}</td>
    <td><a class="btn btn-warning">Edit</a> 
    <button class="btn btn-danger" id=${element.id} onclick=deleteUser(${element.id}) >Delete</button>
    <a class="btn btn-primary">Detail</a>
    </td>
    
    </tr>
    `;
    })
  );
}
allData();


async function checkInput(){
    if(firstInput.value && lastInput.value && email1.value){
        
     subbtn.removeAttribute('disabled')
    } else {
      subbtn.setAttribute('disabled', '')
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let user = {
        id: Date.now(),
        firstName: firstInput.value,
        lastName:lastInput.value,
        email:email1.value , 
        cardnumber:cardNumber.value  
    };
      fetch(" http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })

  });

async function deleteUser(id){
    await axios.delete(`http://localhost:8000/users/${id}`)
}

async function searchUsers(){
    search.addEventListener("input",function(e){
    axios(" http://localhost:8000/users").then(res=>
    res.data.filter((el)=>
	`${el.firstName} ${el.lastName}`
	.toLocaleLowerCase()
	.includes(e.target.value.toLocaleLowerCase())
	))
    })
}
searchUsers()