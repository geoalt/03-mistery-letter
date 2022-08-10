const paraInput = document.querySelector('#carta-texto');
const paraInsert = document.querySelector('#carta-gerada');
const newLetterButton = document.querySelector('#criar-carta');

// Arrays de estilos
const arrStyles = ['newspaper', 'magazine1', 'magazine2'];
const arrSizes = ['medium', 'big', 'reallybig'];
const arrRotations = ['rotateleft', 'rotateright'];
const arrSkews = ['skewleft', 'skewright'];

// Funcao que separa palavras
const splitInput = () => {
  return paraInput.value.split(' ');
}
// Funcao que check se foi digitado algo no input diferente de espacos
const checkBlanks = () => {
  return paraInput.value.trim().length === 0;
}

// Funcao que escolhe aleatoriamente as classes
const randClass = (arr) => {
  const posDrawn = Math.floor(Math.random() * arr.length);
  return arr[posDrawn];
};

// Funcao que gera a carta
const genLetter = () => {
  paraInsert.innerText = '';
  const splited = splitInput();
  if (checkBlanks()) {
    return paraInsert.innerText = 'Por favor, digite o conteúdo da carta.'
  }
  for (let word of splited) {
    const createSpan = document.createElement('span');

    createSpan.classList.add(
      randClass(arrStyles),
      randClass(arrSizes),
      randClass(arrRotations),
      randClass(arrSkews)
    );
    createSpan.addEventListener('click', changeClass);
    createSpan.innerHTML = word;
    paraInsert.append(createSpan);
  }
  const paraCounter = document.querySelector('#carta-contador')
  paraCounter.innerText = splited.length;
};

// Funcao que muda a classe do elemento ao clicar
const changeClass = (e) => {
  e.target.className = '';
  e.target.classList.add(
    randClass(arrStyles),
    randClass(arrSizes),
    randClass(arrRotations),
    randClass(arrSkews)
  );
};

// Acessa spans para adicionar eventos

// Eventos
newLetterButton.addEventListener('click', genLetter);

/* for (let span of spanList) {
  span.addEventListener('click', changeClass)
  console.log(span)
}
 */