let BASE_URL = " http://localhost:8000/users";

let form = document.querySelector("#form");
let inputFirstName = document.querySelector("#firstName");
let inputLastName = document.querySelector("#lastName");
let inputEmail = document.querySelector("#email");
let inputNumber = document.querySelector("#number");
let subbtn = document.querySelector(".subbtn");
let icon1 = document.querySelector("#icon1");
let icon2 = document.querySelector("#icon2");
let tBody = document.querySelector("tbody");
let search = document.querySelector("#search");

icon1.style.display = "none";
icon2.style.display = "none";

async function userTable() {
  let res = await axios(BASE_URL);
  let data = await res.data;
  tBody.innerHTML = "";
  data.forEach((element) => {
    tBody.innerHTML += `
      <tr>
      <td>${element.firstName}</td>
      <td>${element.lastName}</td>
      <td>${element.email}</td>
      <td>${element.cardNumber}</td>
      <td><a class="btn btn-warning">Edit</a> 
      <button class="btn btn-danger" onclick=delFun(${element.id}) >Delete</button>
      <a class="btn btn-primary">Detail</a>
      </td>
    
      </tr>
      `;
  });
}
userTable();

async function delFun(id) {
  await axios.delete(`${BASE_URL}/${id}`);
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    firstName: inputFirstName.value,
    lastName: inputLastName.value,
    email: inputEmail.value,
    cardNumber: inputNumber.value,
  };
  await axios.post(BASE_URL, obj);
  userTable();
});
