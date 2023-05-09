let submit=document.querySelector("#myForm")
let subbtn=document.querySelector(".btn")
let inputName=document.querySelector(".name")
let inputEmail=document.querySelector(".email")


subbtn.setAttribute("disabled","")

submit.addEventListener("submit", function (e) {
    e.preventDefault();
    let user = {
        id: Date.now(),
        firstname: inputName.value,
        email:inputEmail.value  
    };
      fetch(`http://localhost:8080/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })

      window.location.href="./index.html"

  });

  function checkAnyInput() {
    if (inputName.value && inputEmail.value) {
      subbtn.removeAttribute('disabled')
    } else {
      subbtn.setAttribute('disabled', '')
    }
  }

  inputName.addEventListener('input', () => {
    checkAnyInput()
  })
  inputEmail.addEventListener('input', () => {
    checkAnyInput()
  })