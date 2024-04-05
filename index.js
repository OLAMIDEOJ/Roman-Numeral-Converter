const number = document.getElementById("number");
const button = document.getElementById("convert-btn");
const div = document.getElementById("output");

function convertToRoman(num) {
  let romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  let result = "";
  for(let prop in romanNumerals) {
    //console.log(prop);
    //console.log(romanNumerals[prop]);
    while(num >= romanNumerals[prop]) {
      result += prop;
      num -= romanNumerals[prop];
      console.log(result);
      console.log(num);
    }
  }
  return result;
}

convertToRoman(36);


//Event Listener for the button click
button.addEventListener("click", function() {
  const inputValue = parseInt(number.value); // Get the value entered in the input field and parse it to an integer
if(inputValue < 1 || inputValue == -1) {
  alert("Please enter a number greater than or equal to 1");
  return; 
  //stop execution if no value is entered
}

if (inputValue > 3999) {
  alert("Please enter a number less than or equal to 3999");
  return;
  //stop execution if no value is entered
}

  if (!isNaN(inputValue)) { // Check if the input is a valid number
    const romanNumeral = convertToRoman(inputValue); // Convert the number to Roman numeral
    div.innerText = `Roman numeral: ${romanNumeral}`; // Display the result
  } else {
    div.innerText = "Please enter a valid number."; // Display an error message if the input is not a valid number
  }
});