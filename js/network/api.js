import {SEND_DATA_ADDRESS} from '../setup.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/code-and-magick/data')
    .then((response) => response.json())
    .then((wizards) => {
      onSuccess(wizards);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_DATA_ADDRESS,
    {
      method: 'POST',
      body
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};