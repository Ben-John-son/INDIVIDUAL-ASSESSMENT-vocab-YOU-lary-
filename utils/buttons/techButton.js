import renderToDom from '../sample_data/render';

const newTechBtn = () => {
  const domString = `
  <button id='newwTech' type="button" class="btn btn-primary">New Tech Card</button>`;
  renderToDom('#viewTwo', domString);
};
export default newTechBtn;
