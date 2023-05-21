let row =document.querySelector(".row")


async function allData() {
    row.innerHTML = "";
    await axios("http://localhost:3000/blogs").then((res) =>
      res.data.forEach((element) => {
        row.innerHTML += `
        <span class="col-12 ">
        <h2 class="">${element.title}</h2>
        <p class="text-danger">
         ${element.body.slice(0,150)}...
        </p>
        <a href="">Read More</a><br>
        <span class="text-secondary">written by ${element.author} </span><br>
       <button class="btn btn-danger" id=${element.id} onclick=deleteData(${element.id},this)>Delete</button>
       <a href="" id="edit" class="btn btn-warning text-white" href="">Edit</a>
      </span>
      `;
      })
    
    );
  }
  allData();

  async function deleteData(id,btn){
    await axios.delete(`http://localhost:3000/blogs/${id}`)
    btn.closest("span").remove()
}

