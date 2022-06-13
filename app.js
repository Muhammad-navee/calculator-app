
var input = document.getElementById("input");
console.log(input);

function getValue(num) {
    var input = document.getElementById("input");
    input.value += num;
       console.log(num);
  }
  
  function totalValue() {
    var input = document.getElementById("input");
  
    input.value = eval(input.value);
  }
  
  function allClear() {
    var input = document.getElementById("input");
    input.value = "";
  }
  
  function clearValue() {
    var input = document.getElementById("input");
    input.value = input.value.slice(0, -1);
  }
