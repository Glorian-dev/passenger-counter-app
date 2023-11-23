let count = 0;

document.getElementById("increment-btn").addEventListener("click", function(){
  count = count + 1;
  document.getElementById("count-el").textContent = count;

});

document.getElementById("save-btn").addEventListener("click", function(){
  let countAndSeperator = " " + count + " - ";

  document.getElementById("p1").textContent += countAndSeperator;

  count = 0;

  document.getElementById("count-el").textContent = count;

});