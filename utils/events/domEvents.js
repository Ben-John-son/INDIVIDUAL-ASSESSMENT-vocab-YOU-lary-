import { deleteLanguage, getLanguage, getSingleLanguage } from '../../api/vocabData';
import { showLanguage } from '../../pages/viewLanguage';
import newLangForm from '../shared/langForm';
import newTechForm from '../shared/techForm';

const onDomEvents = () => {
  document.querySelector('#view').addEventListener('click', () => {
    newLangForm();
  });

  document.querySelector('#viewTwo').addEventListener('click', () => {
    newTechForm();
  });

  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-language')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleLanguage(firebaseKey).then((languageObj) => newLangForm(languageObj));
    }
  });

  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-language')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE LANGUAGE', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteLanguage(firebaseKey).then(() => {
          getLanguage().then(showLanguage);
        });
      }
    }
  });
};

export default onDomEvents;
