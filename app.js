var range = document.getElementById("rangee");
var screen = document.getElementById("password");
var upper = document.getElementById("checkbox1");
var lower = document.getElementById("checkbox2");
var checkbox3 = document.getElementById("checkbox3");
var checkbox4 = document.getElementById("checkbox4");
//  ============= Function_Range =========
function rangeChange() {
  document.getElementById(
    "rValue"
  ).innerHTML = `Password Length ${range.value}`;
  return range.value;
}
//  ============= Function_Range =========

//  ============= Function_Generate =========
function generate() {
  // ====================== Work Start ============

  var allCharacters;
  var allPassword = "";
  if (
    !upper.checked &&
    !lower.checked &&
    !checkbox3.checked &&
    !checkbox4.checked
  ) {
    screen.value = "Atleast Mark One Checkbox";
  } else {
    if (upper.checked) {
      allCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log("this is upper");
    }
    if (lower.checked) {
      allCharacters += "abcdefghijklmnopqrstuvwxyz";
      console.log("this is small");
    }
    if (checkbox3.checked) {
      allCharacters += "1234567813534689131357790";
      console.log("this is number");
    }
    if (checkbox4.checked) {
      allCharacters += "~!@#$%^&*(@!^*(#@$@#$!))!@#%_+";
      console.log("this is symb");
    }

    for (i = 0; i < range.value; i++) {
      var randomValue = Math.floor(Math.random() * allCharacters.length);
      allPassword += allCharacters[randomValue];
    }
    screen.value = allPassword.slice(0, range.value);
    console.log(allPassword);
  }
  if (
    screen.value === "Atleast Mark One Checkbox" ||
    screen.value === "" ||
    screen.value === "Copied"
  ) {
    alert("Please Generate Password First");
  } else {
    // alert(`Password (${screen.value}) Copied Successfully `)
    document.getElementById("copyIcon").style.cssText = "display:flex !important;";
    document.getElementById("copyIcon").style = "color:grey;";
    // screen.value = "Copied";
  }
  // ====================== Work End ============
}
//  ============= Function_Generate =========

function copy() {
  if (
    screen.value === "Atleast Mark One Checkbox" ||
    screen.value === "" ||
    screen.value === "Copied"
  ) {
    alert("Please Re-Generate Password ");
  } else {
    navigator.clipboard.writeText(screen.value);
    document.getElementById("copyIcon").style.cssText = "color:red;";

  //  alert(`Password (${screen.value}) Copied Successfully `)
    // alert(`Password (${screen.value}) Copied Successfully `)
    screen.value = "Copied";
  }
  console.log(screen.value);
}
document.getElementById("rValue").innerHTML = `Password Length ${range.value}`;