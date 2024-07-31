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
  setTimeout(type, newTextDelay + 250);
});