function append(char) {
  var v = document.getElementById("in");
  char = String(char);
  v.value = v.value + char;
}

function clr() {
  var v = document.getElementById("in");
  v.value = "";
}

function calc() {
  var v = document.getElementById("in");
  var res = eval(v.value);
  v.value = res;
}

function del() {
  var v = document.getElementById("in")
  res = v.value.substring(0, v.value.length - 1);
  v.value = res;
}

function sqrt() {
  var v = document.getElementById("in")
  res = v.value * v.value
  v.value = res;
}
/* //Calculations
function calculate(what) {
  var cnst[];
  var oper[];
  var i = 0;
  var j;
  var pre;
  var order;
  while (i <= what.length) {
    if (typeof what[i] == 'number') {
      if (pre !== 'number') {
        oper.push(what[i]);
        pre = 
      } else {
        j += 1;
      };
    };
    i += 1
    
  };
};
*/
/*document.getElementById("in").value = "";*/
