function toggleChat() {
  const chat = document.getElementById("chat-body");
  chat.style.display = chat.style.display === "block" ? "none" : "block";
}

function respondChat() {
  const input = document.querySelector("#chat-body input");
  const msg = input.value.trim();
  if (msg) {
    const bot = document.createElement("p");
    bot.innerHTML = `<strong>You:</strong> ${msg}`;
    document.getElementById("chat-body").appendChild(bot);
    input.value = "";
  }
}

document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const typedText = document.querySelector(".typing-text");
const phrases = ["Web Developer", "Innovative Thinker", "Problem solver"];
let i = 0, j = 0, isDeleting = false;

function type() {
  let currentPhrase = phrases[i];
  if (isDeleting) {
    typedText.textContent = currentPhrase.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  } else {
    typedText.textContent = currentPhrase.substring(0, j++);
    if (j > currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
  }
  setTimeout(type, isDeleting ? 60 : 100);
}

window.addEventListener('DOMContentLoaded', type);