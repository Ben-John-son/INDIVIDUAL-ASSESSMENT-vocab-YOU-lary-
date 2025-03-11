import renderToDom from '../sample_data/render';

const buildDom = () => {
  const domString = `
   <div id="navigation"></div>
  <div id="main-container"></div>
  <div id="add-button"></div>
  <div id="form-container"></div>
  <div id="view"></div>
  <div id='viewTwo'></div>`;
  renderToDom('#app', domString);
};
export default buildDom;
