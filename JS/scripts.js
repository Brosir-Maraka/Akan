var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Ama"];
var maleNames = [" Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var days = [
  "sunday",
  "Monday",
  "Tuesday",
  "Wednesady",
  "Thursay",
  "FRiday",
  "Satruday"
];

function akanNames() {
  console.log("clicked");
  var year = parseInt(document.getElementById("yy").value);
  var month = parseInt(document.getElementById("mm").value);
  var day = parseInt(document.getElementById("dd").value);
  var male = document.getElementById("M");
  var female = document.getElementById("F");

  if (day < 1 || day > 32) {
    alert("error");
  }
  var day = new Date(year + "/" + month + "/" + day);
  var myDay = day.getDay();
  if (female.checked == true) {
    alert(
      "Great, you were born on " +
        days[myDay] +
        " your akan name is " +
        femaleNames[myDay]
    );
  } else if (male.checked == true) {
    alert(
      "Great, you were born on " +
        days[myDay] +
        " your akan name is " +
        maleNames[myDay]
    );
  }
}
