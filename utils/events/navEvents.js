// import renderToDom from '../sample_data/render';
import {
  languageBtn, techButton, getLanguage, getTech
} from '../../api/vocabData';
import { showLanguage, showTech } from '../../pages/viewLanguage';
import clearDom from '../sample_data/clearDom';
// import clearDomTwo from '../sample_data/clearDom2';
// import newCardForm from '../shared/form';
import newLangButton from '../buttons/langButton';
import newTechBtn from '../buttons/techButton';

const navigationEvents = () => {
  document.querySelector('#allBtn').addEventListener('click', () => {
    clearDom();
    getLanguage().then(getTech()).then((language) => showLanguage(language));
    getTech().then((tech) => showTech(tech));
  });
  document.querySelector('#langBtn').addEventListener('click', () => {
    clearDom();
    languageBtn().then(showLanguage);
  });

  document.querySelector('#techBtn').addEventListener('click', () => {
    clearDom();
    techButton().then(showTech);
  });
  document.querySelector('#formBtn').addEventListener('click', () => {
    newLangButton();
    newTechBtn();
  });
};

export default navigationEvents;
