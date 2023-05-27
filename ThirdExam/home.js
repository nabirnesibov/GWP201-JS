let URL_users= "http://localhost:8080/users";
let row=document.querySelector(".users")
let searchInput = document.querySelector("#search");
let sort = document.querySelector(".sort");


function allUsers(arr){
    row.innerHTML="";
    arr.forEach(element => {
    row.innerHTML += `
     <div class="col-12 col-md-6 col-lg-3 mt-4">
              <div class="card">
               <div class="photo"> <img src="${element.photo}" width="30px " height="30px" alt=""></div>
                <div class="card-body">
                  <h5 class="card-title text-center">${element.title}</h5>
                  <p class="card-text text-center">
                    ${element.content}
                  </p>

                    <p class="text-center">Price:${element.id}</p>
                  <a href="#" class="btn btn-danger" id=${element.id} onclick=deleteUser(${element.id},this)>Delete</a>
                  <a href="add.html?id=${element.id}" class="btn btn-success">Edit</a><br>
                  <a href="fav.html?id=${element.id}" class="btn btn-warning">Favorites</a>
                  <a href="details.html?id=${element.id}" class="btn btn-info">Details</a>
                </div>
              </div>
            </div>
    `;
    });
}

axios(URL_users).then(res=>allUsers(res.data))
async function deleteUser(id, btn) {
  await axios.delete(`${URL_users}/${id}`);
  btn.parentElement().parentElement().parentElement().remove();
}


axios(URL_users).then((res) => allData(res.data));
search.addEventListener("input", function (e) {
  axios(URL_users).then((res) => {
    let filteredUser = res.data.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );

    allUsers(filteredUser);
  });
});

sort.addEventListener("click", function () {
  if (this.innerHTML == "Sort Ascending") {
    axios(URL_users).then((res) => {
      let sortAsc = res.data.sort((a, b) => a.id - b.id);
      allUsers(sortAsc);
    });
    this.innerHTML = "Sort Descending";
  } else if (this.innerHTML == "Sort Descending") {
    axios(URL_users).then((res) => {
      let sortAsc = res.data.sort((a, b) => b.id - a.id);
      allUsers(sortAsc);
    });
    this.innerHTML = "Default";
  } else {
    axios(URL_users).then((res) => {
      allUsers(res.data);
    });
    this.innerHTML = "Sort Ascending";
  }
});