import renderToDom from '../sample_data/render';
// import clearDom from '../sample_data/clearDom';

const newLangForm = (obj = {}) => {
  const domString = `
 <form id="${obj.firebaseKey ? `update-language--${obj.firebaseKey}` : 'submitLang'}">
  <label for="titleInput" class="form-label">Title</label>
  <input type="text" class="form-control" id="titleInput" placeholder="Title">
  <label for="descriptionInput" class="form-label">Description</label>
  <textarea class="form-control" id="descriptionInput" rows="3"></textarea>
  <label for="languageInput" class="form-label">Language</label>
  <input type="text" class="form-control" id="languageInput" placeholder="Title">
<button type="submit" class="btn btn-primary mb-3">Submit</button>
</form>`;
  renderToDom('#form-container', domString);
};

export default newLangForm;
