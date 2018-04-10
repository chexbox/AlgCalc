function append(char) {
  var v = document.getElementById("in");
  char = String(char);
  v.value = v.value + char;
};

function clr() {
  var v = document.getElementById("in");
  v.value = "";
};

function calc() {
  var v = document.getElementById("in");
  var res = eval(v.value);
  v.value = res;
};

function del() {
  var v = document.getElementById("in");
  res = v.value.substring(0, v.value.length - 1);
  v.value = res;
};

function sqr() {
  var v = document.getElementById("in");
  res = eval(v.value) * eval(v.value);
  v.value = res;
};

function sqrt() {
  var v = document.getElementById("in");
  res = Math.sqrt(eval(v.value));
  v.value = res;
};

function abs() {
  var v = document.getElementById("in");
  res = Math.abs(eval(v.value));
  v.value = res;
};
function pct() {
  var v = document.getElementById("in");
  res = ( eval(v.value) * 100 );
  v.value = res;
};
function sine() {
  var v = document.getElementById("in");
  res = sin(eval(v.value));
  v.value = res;
};
function cosi() {
  var v = document.getElementById("in");
  res = cos(eval(v.value));
  v.value = res;
};
function tang() {
  var v = document.getElementById("in");
  res = tan(eval(v.value));
  v.value = res;
};
function logr() {
  var v = document.getElementById("in");
  res = log(eval(v.value));
  v.value = res;
};
