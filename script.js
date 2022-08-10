const paraInput = document.querySelector('#carta-texto');
const paraInsert = document.querySelector('#carta-gerada');
const newLetterButton = document.querySelector('#criar-carta');

// Funcao que separa palavras
const splitInput = () => {
  return paraInput.value.split(' ');
}

// Funcao que gera a carta
const genLetter = () => {
  let wordsToInsert = '';
  const splited = splitInput();
  for (let word of splited) {
    wordsToInsert += `<span>${word}</span>`;
  }
  paraInsert.innerHTML = wordsToInsert;
};

// Eventos
newLetterButton.addEventListener('click', genLetter);

