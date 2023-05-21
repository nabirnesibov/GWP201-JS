let form = document.querySelector("form");
let input1 = document.querySelector(".title");
let textarea1 = document.querySelector(".textarea");
let select = document.querySelector("#select");
let author;

select.addEventListener("change", function (e) {
  author = e.target.value;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let blog = {
    title: input1.value,
    body: textarea1.value,
    author: author || "Lorem",
  };
  
  axios.post(`http://localhost:3000/blogs`, blog);
  window.location= "home.html";
});
