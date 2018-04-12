function menutoggle() {
  document.getElementById("drop").classList.toggle("show");
  document.getElementById("mainbar").classList.toggle("fixed");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!(event.target == document.getElementById("drop")) && !(event.target == document.getElementById("dropbtn"))) {

    document.getElementById("drop").classList.remove("show");
    document.getElementById("mainbar").classList.remove("fixed");
  }
}
/*Inspired and based on a W3Schools tutorial.*/
