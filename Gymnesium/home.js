let URL_ELEMENTS = "http://localhost:8000/elements";
let row = document.querySelector(".elements");
let search = document.querySelector("#search");
let sortbtn = document.querySelector(".sort");

function allElements(arr) {
  row.innerHTML = "";
  arr.forEach((element) => {
    row.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 mt-4">
            <div class="element">
              <div class="image"><img src="${element.photo}" alt="" /></div>
              <div class="element-content">
                <h3>${element.title}</h3>
                <p>
                  ${element.content}
                </p>
                <p>
                  Price : ${element.id}
                </p>
                <div class="buttons">
                  <a href="" class="btn btn-danger mt-2" id=${element.id} onclick=deleteElement(${element.id},this)>Delete</a>
                  <a href="addvsedit.html?id=${element.id}" class="btn btn-success mt-2" id=${element.id}>Edit</a>
                  <a href="" class="btn btn-primary mt-2" id=${element.id} onclick=favElement(${element.id})>Favorits</a>
                  <a href="details.html?id=${element.id}" class="btn btn-info mt-2 text-white">Details</a>
                </div>
              </div>
            </div>
          </div>
        `;
  });
}

axios(URL_ELEMENTS).then((res) => allElements(res.data));

async function deleteElement(id, btn) {
  await axios.delete(`${URL_ELEMENTS}/${id}`);
  btn.parentElement().parentElement().parentElement().parentElement().remove();
}


search.addEventListener("input",function(e){
  
     axios(URL_ELEMENTS).then((res) => {
    let filteredElement = res.data.filter((item) =>
      item.title
        .trim()
        .toLocaleLowerCase()
        .includes(e.target.value.trim().toLocaleLowerCase())
    );
allElements(filteredElement);
  });
})



sortbtn.addEventListener("click", function () {
  if (this.innerHTML == "Sort Ascending") {
    axios(URL_ELEMENTS).then((res) => {
      let sortAsc = res.data.sort((a, b) => a.price - b.price);
      allElements(sortAsc);
    });
    this.innerHTML = "Sort Descending";
  } else if (this.innerHTML == "Sort Descending") {
    axios(URL_ELEMENTS).then((res) => {
      let sortAsc = res.data.sort((a, b) => b.price - a.price);
      allElements(sortAsc);
    });
    this.innerHTML = "Default";
  } else {
    axios(URL_ELEMENTS).then((res) => {
      allElements(res.data);
    });
    this.innerHTML = "Sort Ascending";
  }
});

async function favElement(id){
    await axios()
}


