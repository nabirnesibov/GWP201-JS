let URL = "http://localhost:8080/users" 
let tBody = document.querySelector("tbody")


function drawTable(arr) {
    tBody.innerHTML = "";
    arr.forEach((element) => {
      tBody.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.photo}</td>
                <td>${element.name}</td>
                <td>${element.surname}</td>
                <td>${element.email}</td>
                <td>${element.date}</td>
                <td><a class="btn btn-warning" href="form.html?id=${element.id}">edit</a>
                <button class="btn btn-danger" onclick=deleteUser("${element.id}",this)>delete</button>
                <a class="btn btn-primary" href="details.html?id=${element.id}">details</a></td>
                
            </tr>
            `;
    });
  }

axios(URL).then((res) => {
  drawTable(res.data);
});

function deleteUser(id){
    // console.log("salam")
    axios(`${URL}/${id}`)
    btn.parentElement().parentElement().remove()
}