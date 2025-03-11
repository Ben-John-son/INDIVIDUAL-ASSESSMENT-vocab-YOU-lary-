import newLangForm from '../shared/langForm';
import newTechForm from '../shared/techForm';

const onDomEvents = () => {
  document.querySelector('#view').addEventListener('click', () => {
    newLangForm();
  });

  document.querySelector('#viewTwo').addEventListener('click', () => {
    newTechForm();
  });
};

export default onDomEvents;
