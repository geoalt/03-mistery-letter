const paraInput = document.querySelector('#carta-texto');
const paraInsert = document.querySelector('#carta-gerada');
const newLetterButton = document.querySelector('#criar-carta');

// Funcao que separa palavras
const splitInput = () => {
  return paraInput.value.split(' ');
}
// Funcao que check se foi digitado algo no input diferente de espacos
const checkBlanks = () => {
  return paraInput.value.trim().length === 0;
}

// Funcao que gera a carta
const genLetter = () => {
  let wordsToInsert = '';
  const splited = splitInput();
  if (checkBlanks()) {
    return paraInsert.innerText = 'Por favor, digite o conteúdo da carta.'
  }
  for (let word of splited) {
    wordsToInsert += `<span>${word}</span>`;
  }
  paraInsert.innerHTML = wordsToInsert;
};

// Eventos
newLetterButton.addEventListener('click', genLetter);

