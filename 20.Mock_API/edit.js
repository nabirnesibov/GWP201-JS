let form=document.querySelector("#form")
let input1=document.querySelector(".name1")
let input2=document.querySelector(".email1")
let btn=document.querySelector(".btn-primary")

let id = new URLSearchParams(window.location.search).get("id");



axios(`http://localhost:8000/users/${id}`).then((res) => {
  input1.value = res.data.firstname;
  input2.value = res.data.email;


  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let editedUsers = {
      firstname:input1.value,
      email:input2.value,
    };
    axios.patch(
      `http://localhost:8000/users/${id}`,
      editedUsers
      );
      window.location = "index.html";
    });
  });