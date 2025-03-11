import renderToDom from '../sample_data/render';
// import clearDom from '../sample_data/clearDom';

const newLangButton = () => {
  const domString = '<button type="button" class="btn btn-primary">New Language Card</button>';
  renderToDom('#view', domString);
};

export default newLangButton;
