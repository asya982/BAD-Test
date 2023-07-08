document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const results = uniqueSymbol(inputText);
    const resultDiv = document.getElementById("resultArea");
    const result = document.getElementById("result");

    resultDiv.style.opacity = 1;
    result.innerHTML = results;
  });
});
