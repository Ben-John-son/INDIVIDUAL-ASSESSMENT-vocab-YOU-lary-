import {
  getLanguage, getTech, createLanguageCard, updateCard
} from '../../api/vocabData';
import { showLanguage, showTech } from '../../pages/viewLanguage';

const formSubmit = () => {
  document.querySelector('#view').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submitBtn')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value,
      };

      createLanguageCard(payload).then(({ title }) => {
        const patchPayload = { firebaseKey: title };

        updateCard(patchPayload).then(() => {
          getLanguage().then(showLanguage);
          getTech().then((tech) => showTech(tech));
        });
      });
    }
  });
};

export default formSubmit;
