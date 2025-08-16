  // Append number or operator to the input box
  function append(value) {
    let box = document.getElementById("result");
    box.value = box.value + value;
  }

  // Clear the whole input box (AC button)
  function clearResult() {
    let box = document.getElementById("result");
    box.value = "";
  }

  // Delete the last character (DEL button)
  function deleteOne() {
    let box = document.getElementById("result");
    box.value = box.value.slice(0, -1);
  }

  // Calculate the result when "=" button is pressed
  function calculate() {
    let box = document.getElementById("result");
    let expression = box.value;

    try {
      let answer = eval(expression); // evaluate the math expression
      box.value = answer;
    } catch (error) {
      alert("Invalid Expression");
    }
  }
