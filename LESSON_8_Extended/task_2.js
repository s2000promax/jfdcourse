const text = 'Привет! Как дела! Давно мы с тобой не виделись.';

const showSuccessMessage = message => console.log(message);
const showErrorMessage = message => console.error(message);

const checkTextOnErrorSymbol = (text = '', errorSymbol = '', successCallback, errorCallback) => {

  let position = text.indexOf(errorSymbol);
  if (position === -1) {
    successCallback('В данном тексте нет запрещенных символов');

  } else {
    while (position !== -1) {
      errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${position}.`);
      position = text.indexOf(errorSymbol, position + 1);
    }
  }

}

checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
checkTextOnErrorSymbol(text, 'z', showSuccessMessage, showErrorMessage);
