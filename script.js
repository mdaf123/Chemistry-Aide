var input;
var text;

onEvent ("send", "click", function() {
  input = getText("userInput");
  setText("shiggidi", input);
});
