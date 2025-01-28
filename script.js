var input;
var text;

document.getElementByID("send").onclick = function(){
  input = document.getElementByID("userInput").textContent
  text = input
  document.getElementByID("shiggidi").textContent = text
}
