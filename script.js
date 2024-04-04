let nameField = document.querySelector("#name");
let professionField = document.querySelector("#profession");
let ageField = document.querySelector("#age");
let addUserButton = document.querySelector("#addUser");
let form = document.querySelector("form");
let employeeDetails = document.querySelector("p");
let listOfEmployee = document.querySelector("h3");
let errorMessage = document.querySelector(".errorMessage");
let successMessage = document.querySelector(".successMessage");
errorMessage.style.display = "none";
successMessage.style.display = "none";

addUserButton.addEventListener("click", addUser);

let errorFlag = false;
let successFlag = false;
let count = 1;
let delCount = 0;
function addUser() {
  let name = nameField.value;
  let profession = professionField.value;
  let age = ageField.value;
  if (name == "" || profession == "" || age == "") {
    if (!errorFlag) {
      errorMessage.style.display = "block";
      successMessage.style.display = "none";
      errorFlag = true;
      successFlag = false;
    }
  } else {
    if (!successFlag) {
      successMessage.style.display = "block";
      errorMessage.style.display = "none";
      errorFlag = false;
      successFlag = true;
    }

    let newUserSection = document.createElement("div");
    newUserSection.className = "newUserSection";
    let userDetails = document.createElement("div");
    userDetails.className = "userDetails";
    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";

    let idNumber = document.createElement("div");
    let nameArea = document.createElement("div");
    let professionArea = document.createElement("div");
    let ageArea = document.createElement("div");

    idNumber.innerText = `${count++}.`;
    nameArea.innerText = `Name : ${name}`;
    professionArea.innerText = `Profession: ${profession}`;
    ageArea.innerText = `Age:${age}`;

    userDetails.append(idNumber);
    userDetails.append(nameArea);
    userDetails.append(professionArea);
    userDetails.append(ageArea);

    deleteButton.innerText = `Delete User`;

    newUserSection.append(userDetails);
    newUserSection.append(deleteButton);

    employeeDetails.style.display = "none";
    listOfEmployee.append(newUserSection);

    deleteButton.addEventListener("click", deleteEmployee);

    function deleteEmployee(eventDetails) {
      delCount++;
      newUserSection.remove();
      if (count == delCount + 1) {
        employeeDetails.style.display = "block";
      }
    }
  }
}
