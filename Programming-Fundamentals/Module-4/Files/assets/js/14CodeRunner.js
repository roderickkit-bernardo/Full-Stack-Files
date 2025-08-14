/* 
  Developer: Roderick Bernardo
  Purpose: JS dynamic code execution
*/

// JavaScript function to execute code
function executeCode() {
  let code = document.getElementById("codeInput").value;
  try {
    // Execute the code, this is only for testing purposes
    // eval is not safe for production systems
    var result = eval(code);

    // Display the result in the console output
    var consoleOutput = document.getElementById("consoleOutput");
    consoleOutput.textContent = String(result);
  } catch (error) {
    // Display any errors in the console output
    consoleOutput.textContent = "Error: " + error.message;
  }
}
