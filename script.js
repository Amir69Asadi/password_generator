const generatBtn = document.getElementById("Generat");
const copyBtn = document.getElementById("Copy");
const generatedPass = document.getElementById("passBox");

const number = "1234567890";
const uppercaseWord = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowercaseWord = "qwertyuioplkjhgfdsazxcvbnm";
const symbol = "+-*/;!@#$%&()_";
const allChars = number + uppercaseWord + lowercaseWord + symbol;

//Add events to button
generatBtn.addEventListener("click", creatPassword);
function creatPassword() {
  let password = "";
  const length = parseInt(document.getElementById("passLenght").value);
  password += uppercaseWord[Math.floor(Math.random() * uppercaseWord.length)];
  password += lowercaseWord[Math.floor(Math.random() * lowercaseWord.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while(length > password.length){
    password+=allChars[Math.floor(Math.random() * allChars.length)];
  }
  generatedPass.value=password;
}

$("#Copy").click(function () {
  const text = $("#passBox").val();
  navigator.clipboard.writeText(text);
  console.log(text);
});
