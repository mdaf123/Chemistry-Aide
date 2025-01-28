var input;
var text;

const button = document.getElementById('send');
button.addEventListener('click', function() {
  input = document.getElementById('userInput').value;
  text = '${input}';
  document.getElementById('shiggidi').textContent = text;
});
