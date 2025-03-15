document.addEventListener("DOMContentLoaded", () => {
  const text = "V S L - Profile";

  function animateTitle(text) {
    let index = 0;

    function loop() {
      document.title = text.slice(0, index + 1);
      index++;

      if (text[index - 1] === " ") {
        setTimeout(loop, 400);
      } else {
        setTimeout(loop, 350);
      }

      if (index >= text.length) {
        index = 0;
      }
    }

    loop();
  }

  animateTitle(text);
});

document.addEventListener("copy", (e) => {
  e.preventDefault();
});

//@media max-width 520px

function updateButtonText() {
  const aboutButtonText = document.querySelector(".about-b-text");
  const backButtonText = document.querySelector(".back-text");
  const aboutParentElement =
    aboutButtonText?.parentNode || document.querySelector(".about-button");
  const backParentElement =
    backButtonText?.parentNode || document.querySelector(".back-button");

  if (window.innerWidth < 521) {
    if (aboutButtonText && aboutParentElement) {
      aboutParentElement.removeChild(aboutButtonText);
    }
  } else {
    if (!document.querySelector(".about-b-text") && aboutParentElement) {
      const newSpan = document.createElement("span");
      newSpan.className = "about-b-text";
      newSpan.textContent = "About Us";
      aboutParentElement.appendChild(newSpan);
    }
  }

  if (window.innerWidth < 521) {
    if (backButtonText && backParentElement) {
      backParentElement.removeChild(backButtonText);
    }
  } else {
    if (!document.querySelector(".back-text") && backParentElement) {
      const newSpan = document.createElement("span");
      newSpan.className = "back-text";
      newSpan.textContent = "Back";
      backParentElement.appendChild(newSpan);
    }
  }
}

window.addEventListener("load", updateButtonText);
window.addEventListener("resize", updateButtonText);

// About us
const aboutButton = document.querySelector(".about-button");
const aboutSquare = document.getElementById("about-square");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-square");

aboutButton.addEventListener("click", () => {
  aboutSquare.style.display = "flex";

  const squareContent = document.querySelector(".square-content");
  squareContent.scrollTop = 0;
});

closeButton.addEventListener("click", () => {
  aboutSquare.style.display = "none";
});

overlay.addEventListener("click", () => {
  aboutSquare.style.display = "none";
});
