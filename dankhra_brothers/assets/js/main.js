// password view function start 
function eyeOpen1() {
  var x = document.getElementById("passwordinput1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function eyeOpen2() {
  var x = document.getElementById("passwordinput2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
// password view function End 

// otp function start 
function clickEvent(first,last){
  if(first.value.length){
    document.getElementById(last).focus();
  }
}
// otp function End 

// timer function start 

let timerOn = true;

function timer(remaining) {
  var m = Math.floor(remaining / 60);
  var s = remaining % 60;
  
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  document.getElementById('timer').innerHTML = m + ':' + s;
  remaining -= 1;
  
  if(remaining >= 0 && timerOn) {
    setTimeout(function() {
        timer(remaining);
    }, 1000);
    return;
  }

  if(!timerOn) {
    // Do validate stuff here
    return;
  }
  
  // Do timeout stuff here
  alert('The verification OTP has timed out. Please restart the verification process and ensure you enter the new OTP code within the specified time limit.');
}

timer(5);

// timer function End 