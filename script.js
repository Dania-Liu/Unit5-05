// 
let root = 5
let answer = 0

document.getElementById('button').addEventListener('click', square)

function square () {
  root = document.getElementById('input').value

  answer = root * root

  alert(answer)

}
