function append(char) {
  var v = document.getElementById("in");
  char = String(char);
  v.value = v.value + char;
};

document.getElementById("in").value = "";