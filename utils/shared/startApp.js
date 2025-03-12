import { getLanguage, getTech } from '../../api/vocabData';
import { showLanguage, showTech } from '../../pages/viewLanguage';
import buildDom from './domBuilder';
import navBar from './navBar';
import navigationEvents from '../events/navEvents';
import onDomEvents from '../events/domEvents';
import formSubmit from '../events/formEvents';

const startApp = () => {
  buildDom();
  formSubmit();
  navBar();
  getLanguage().then(getTech()).then((language) => showLanguage(language));
  getTech().then((tech) => showTech(tech));
  navigationEvents();
  onDomEvents();
};

export default startApp;
