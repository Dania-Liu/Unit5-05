// Sets root as 5 and answer as 0.
let root = 5
let answer = 0

// Click on button to calculate square.
document.getElementById('button').addEventListener('click', square)

// Gives an alert with the answer inserted into the input box.
function square () {
  root = document.getElementById('input').value
  answer = root * root
  alert(answer)
}
