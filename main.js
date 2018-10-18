var timeout = 0;
function hitclick(){
    var time = document.getElementById(id ="time").value;
    time = time*1000;
    var myVar = setInterval(myTimer, time);
    timeout = timeout +1;
}

function myTimer() {
  console.log("clicked submit");
  document.getElementById(id ="output").innerHTML = timeout;
  document.getElementById(id ="_submit").click();
}
