function append(char) {
  var v = document.getElementById("in");
  char = String(char);
  if (v.tagName=="INPUT"){
    v.value = v.value + char;
  }
  if (v.tagName=="P"){
    v.innerHTML = v.innerHTML + char;
  }
};

function clr() {
  var v = document.getElementById("in");
  v.value = "";
  v.innerHTML = "";
};

function calc() {
  var v = document.getElementById("in");
  var res = eval(v.value);
  v.value = res;
  v.innerHTML = res;
};

function del() {
  var v = document.getElementById("in");
  res = v.value.substring(0, v.value.length - 1);
  v.value = res;
  v.innerHTML = res;
};

function sqr() {
  var v = document.getElementById("in");
  res = eval(v.value) * eval(v.value);
  v.value = res;
  v.innerHTML = res;
};

function sqrt() {
  var v = document.getElementById("in");
  res = Math.sqrt(eval(v.value));
  v.value = res;
  v.innerHTML = res;
};

function abs() {
  var v = document.getElementById("in");
  res = Math.abs(eval(v.value));
  v.value = res;
  v.innerHTML = res;
};
function pct() {
  var v = document.getElementById("in");
  res = ( eval(v.value) * 100 );
  v.value = res;
  v.innerHTML = res;
};
function sine() {
  var v = document.getElementById("in");
  res = Math.sin(eval(v.value));
  v.value = res;
  v.innerHTML = res;
};
function cosi() {
  var v = document.getElementById("in");
  res = Math.cos(eval(v.value));
  v.value = res;
  v.innerHTML = res;
};
function tang() {
  var v = document.getElementById("in");
  res = Math.tan(eval(v.value));
  v.value = res;
  v.innerHTML = res;
};
function logr() {
  var v = document.getElementById("in");
  v.value = eval(v.value)
  res = Math.log(res);
  v.value = res;
  v.innerHTML = res;
};
