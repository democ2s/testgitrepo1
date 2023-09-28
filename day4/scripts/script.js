var divContainer = document.getElementById("main-container");

for (let i = 0; i < 600; i++) {
  var content = document.createElement("div");
  content.className = "one-block";
  divContainer.appendChild(content); //append
}

function sayHello() {
  //alert("Button Clicked");
  var inputDate = new Date(document.getElementById("dob").value);
  //alert(month.value);
  alert(inputDate.getFullYear());
  //var dt = new Date();
}
