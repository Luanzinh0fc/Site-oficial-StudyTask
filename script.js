const subjects = [
    "Português",
    "Inglês",
    "Matemática",
    "Ciências da Natureza",
    "Ciências Humanas",
    "Educação Física",
    "Educação Empreendedorismo"
];

let subjectIndex = 0;
let charIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 100;
const newTextDelay = 2000;
const subjectsElement = document.getElementById("subjects");

function type() {
  if (charIndex < subjects[subjectIndex].length) {
    subjectsElement.textContent += subjects[subjectIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    subjectsElement.textContent = subjects[subjectIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    subjectIndex = (subjectIndex + 1) % subjects.length;
    setTimeout(type, typingSpeed + 1100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa o efeito de digitação após o carregamento da página
  setTimeout(type, newTextDelay + 250);
});

// Get modal elements
var modal = document.getElementById("loginModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");
var loginForm = document.getElementById("loginForm");
var errorMessage = document.getElementById("errorMessage");
var recoveryLink = document.getElementById("recoveryLink");
var recoveryMessage = document.getElementById("recoveryMessage");

// Correct password
var correctPassword = "Aluno2024";

// Open modal
openModalBtn.onclick = function() {
  modal.style.display = "flex";
}

// Close modal
closeModalBtn.onclick = function() {
  modal.style.display = "none";
  errorMessage.textContent = "";
  recoveryMessage.style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    errorMessage.textContent = "";
    recoveryMessage.style.display = "none";
  }
}

// Handle form submission
loginForm.onsubmit = function(event) {
  event.preventDefault();
  var password = document.getElementById("password").value;

  if (password === correctPassword) {
    errorMessage.textContent = "";
    alert("Login bem-sucedido!"); // Adicione a ação após o login bem-sucedido
    modal.style.display = "none";
  } else {
    errorMessage.textContent = "Senha incorreta. Tente novamente.";
    recoveryMessage.style.display = "none";
  }
}

// Show recovery message
recoveryLink.onclick = function() {
  recoveryMessage.style.display = "block";
}
