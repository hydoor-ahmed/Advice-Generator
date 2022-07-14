let adviceId = document.querySelector(".adviceId");
let adviceText = document.querySelector(".adviceText");
let dice = document.querySelector(".dice");

window.onload = function () {
  getAdvice()
}

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((res) => {
    adviceId.innerHTML = `Advice #${res.slip.id}`;
    adviceText.innerHTML = `<q>${res.slip.advice}</q>`;
  });
};

dice.addEventListener("click", function () {
  getAdvice();
});
