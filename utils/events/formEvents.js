import {
  getLanguage, createLanguageCard, updateCard,
  createTechCard,
  upddateTechCard,
  getTech
} from '../../api/vocabData';
import { showLanguage, showTech } from '../../pages/viewLanguage';

const formSubmit = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submitLang')) {
      const payload = {
        title: document.querySelector('#titleInput').value,
        description: document.querySelector('#descriptionInput').value,
        category: 'Language',
        language: document.querySelector('#languageInput').value,
        favorite: true
      };

      createLanguageCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
          getLanguage().then(showLanguage);
        });
      });
    }
  });
  document.querySelector('#form-containerTwo').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submitTech')) {
      const payload = {
        title: document.querySelector('#techInput').value,
        description: document.querySelector('#descriptionTech').value,
        category: 'Tech',
        tech: document.querySelector('#techInput').value,
        favorite: true
      };

      createTechCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        upddateTechCard(patchPayload).then(() => {
          getTech().then(showTech);
        });
      });
    }
  });

  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('update-language')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#titleInput').value,
        description: document.querySelector('#descriptionInput').value,
        category: 'Language',
        language: document.querySelector('#languageInput').value,
        favorite: true,
        firebaseKey
      };
      updateCard(payload).then(() => {
        getLanguage().then(showLanguage);
      });
    }
  });
};

export default formSubmit;
