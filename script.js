const inputValue = document.getElementById("user-input");

document.querySelectorAll("button").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const value = e.target.innerText;

    if (value === "AC") {
      inputValue.innerText = "0";
    } else if (value === "DEL") {
      inputValue.innerText = inputValue.innerText.slice(0, -1);
      if (inputValue.innerText === "") inputValue.innerText = "0";
    } else if (value === "=") {
      try {
        inputValue.innerText = eval(inputValue.innerText);
      } catch {
        inputValue.innerText = "NaN";
      }
    } else {
      if (inputValue.innerText === "0" || inputValue.innerText === "NaN") {
        inputValue.innerText = value;
      } else {
        inputValue.innerText += value;
      }
    }
  });
});
