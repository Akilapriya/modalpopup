
var modalBtn = document.querySelectorAll(".show-modal");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

let openModal = () => {
  console.log(modal.classList);
  modal.classList.add("show");
  overlay.classList.add("show");
}

let closeModal = () => {
  modal.classList.remove("show");
  overlay.classList.remove("show");
}
let onkeyboarClick=(event)=>{
 console.log(event);
 if(event.key== "Escape" || event.key == "Backspace"){
    closeModal();
 }
}

for (let btn of modalBtn) {
  btn.addEventListener("click", openModal);
}


document.addEventListener("keydown", onkeyboarClick )
