// alert("hello");

function addNewWEField() {
  // console.log("added new NewWEField");

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");


  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);

}

function addNewSKField() {

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("skillField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("row",3);
  newNode.setAttribute("placeholder", "Enter here");

  let SKOb = document.getElementById("skillsField");
  let SKAddButtonOb = document.getElementById("SKAddButton");

  SKOb.insertBefore(newNode, SKAddButtonOb);
}

function addNewHBField() {

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("hbField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let hbOb = document.getElementById("hb");
  let hbAddButtonOb = document.getElementById("hbAddButton");

  hbOb.insertBefore(newNode, hbAddButtonOb);

}

// Generating CV

function generateCV() {
  // console.log("Generating Your Cv ");

  let nameField = document.getElementById("nameField").value;

  let nameT1 = document.getElementById("nameT1");

  nameT1.innerHTML = nameField;
  //direct

  document.getElementById("nameT2").innerHTML = nameField;


  //contact
  document.getElementById("ContactT").innerHTML = document.getElementById(
    "contactField"
  ).value;

  //Address
  document.getElementById("addressT").innerHTML = document.getElementById(
    "addressField"
  ).value;

  // Important Links

  // LinkedIn
  document.getElementById("linkedT").innerHTML = document.getElementById(
    "linkdField"
  ).value;

  // Facebook
  document.getElementById("fbT").innerHTML = document.getElementById(
    "fbField"
  ).value;

  // Instagram
  document.getElementById("instaT").innerHTML = document.getElementById(
    "instaField"
  ).value;

  // Knowlwedge & Skills

    let SKs = document.getElementsByClassName("skillField");
    let str1 = " ";
    for (let K of SKs) {
      str1 = str1 + `<li> ${K.value} </li>`;
    }
    document.getElementById("skillT").innerHTML = str1;


  // ObjectiveT
  document.getElementById("ObjectiveT").innerHTML = document.getElementById(
    "objectiveField"
  ).value;

  // work Experience

  let wes = document.getElementsByClassName("weField");
  let str = " ";
  for (let e of wes) {
    str = str + `<li> ${e.value}  </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  // Academic Qualification

  let aqs = document.getElementsByClassName("aqField");
  let str2 = " ";
  for (let e of wes) {
    str2 = str2 + `<li> ${e.value} </li>`;
  }
  document.getElementById("aqT").innerHTML = str2;

// Hobbies


  let hbs = document.getElementsByClassName("hbField");
  let str3 = " ";
  for (let b of hbs) {
    str3 = str3 + `<li> ${b.value} </li>`;
  }
  document.getElementById("hbT").innerHTML = str3;


  // code for setting image

  let file = document.getElementById("imgField").files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);

  // set the image to the template

  reader.onload = function() {

    document.getElementById("imgT").src = reader.result;
  }

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";

}


// print cv
function printCV() {
  window.print();
}
