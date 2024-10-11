const inputField = document.getElementById("dob");
const button = document.getElementById("calculate");
const result = document.getElementById("ressults");

button.addEventListener("click", () => {
  if (inputField.value === "") {
    result.innerText = `Please enter a valid date of birth!`;
    result.style.color = "red";
  } else {
    const dob = new Date(inputField.value);
    const diff = Date.now() - dob.getTime();
    const age = new Date(diff);

    result.innerText = `Your age is ${age.getUTCFullYear() - 1970} years old.`;
    result.style.color = "green";
  }
});

/*
button.addEventListener("click", () => {
  if (inputField.value === "") {
    result.innerText = "Please enter a valid date of birth!";
    result.style.color = "red";
  } else {
    const currDate = new Date();
    const dateOfBirth = new Date(inputField.value);
    let age = currDate.getFullYear() - dateOfBirth.getFullYear();

    if (
      currDate.getMonth() < dateOfBirth.getMonth() ||
      (currDate.getMonth() === dateOfBirth.getMonth() &&
        currDate.getDate() < dateOfBirth.getDate())
    ) {
      age--;
    }

    if (age === 1) {
      result.innerText = `Your age is ${age.getUTCFullYear() - 1970} year old.`;
      result.style.color = "green";
    } else {
      result.innerText = `Your age is ${age.getUTCFullYear() - 1970} years old.`;
      result.style.color = "green";
    }
  }
});
*/
