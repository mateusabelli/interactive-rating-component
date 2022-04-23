const root = document.querySelector("main");
const cardThankYou = document.querySelector("template");
const rateButtons = document.querySelector(".card-rate-buttons");
const submitButton = document.querySelector(".card-submit-button");

let rate = 0;

getRate();

submitButton.addEventListener("click", () => {
  if (rate != 0) {
    root.innerHTML = "";
    root.append(cardThankYou.content.cloneNode(true));
    const rateLabel = document.querySelector("#rate");
    const emoji = document.querySelector("#emoji");
    rateLabel.innerHTML = rate;
    emoji.innerHTML = getEmoji(rate);
  }
});

function getRate() {
  rateButtons.childNodes.forEach((button) => {
    button.addEventListener("click", () => {
      rate = parseInt(button.innerHTML);
    });
  });
}

function getEmoji(rate) {
  switch (rate) {
    case 1:
      return "😢";
    case 2:
      return "🙁";
    case 3:
      return "😐";
    case 4:
      return "😉";
    case 5:
      return "😀";
  }
}

