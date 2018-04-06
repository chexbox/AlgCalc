function append(char) {
  var v = document.getElementById("in");
  char = String(char);
  v.value = v.value + char;
};

function clr() {
  var v = document.getElementById("in");
  v.value = "";
};

document.getElementById("in").value = "";
