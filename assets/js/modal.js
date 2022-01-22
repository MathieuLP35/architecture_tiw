let modal = document.getElementById("myModal");

let btnNav = document.getElementById("contactBtnNav");
let btnFooter = document.getElementById("contactBtnFooter");

let span = document.getElementsByClassName("close")[0];

btnNav.onclick = function() {
  modal.style.display = "block";
}

btnFooter.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}