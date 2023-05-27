
let URL_users = "http://localhost:8080/users";
let row = document.querySelector(".row");

let id = new URLSearchParams(window.location.search).get("id");

let obj;
axios(`${URL_users}/${id}`).then((res) => {

  obj = res.data;
  row.innerHTML = `
<div class="card" style="width: 18rem">
<div class="card-body">
  <h5 class="card-title">${res.data.title}</h5>
  <p class="card-text">
  Content: ${res.data.content}
  </p>
  <button href="#" class="btn btn-primary" onclick=goBack()>Go Back</button>
</div>
</div>
`;
});

function goBack(){
    window.location="home.html"
}