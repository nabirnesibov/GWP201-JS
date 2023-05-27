let URL_ELEMENTS = "http://localhost:8000/elements";
let row = document.querySelector(".row");

let id = new URLSearchParams(window.location.search).get("id");

let obj;
axios(`${URL_ELEMENTS}/${id}`).then((res) => {
  obj = res.data;
  row.innerHTML = `
<div class="card" style="width: 18rem">
<div class="card-body">
  <h5 class="card-title"><strong>Title: </strong> ${res.data.title}</h5>
  <p class="card-text">
  <strong>Content: </strong> ${res.data.content}
  </p>
  <button href="#" class="btn btn-primary" onclick=goBack()>Go Back</button>
</div>
</div>
`;
});

function goBack() {
  window.location = "home.html";
}
