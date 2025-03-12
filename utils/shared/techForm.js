import renderToDom from '../sample_data/render';
import clearDom from '../sample_data/clearDom';

const newTechForm = () => {
  clearDom();
  const domString = `
  <form id='submitTech'>
  <label for="titleTech" class="form-label">Title</label>
  <input type="text" class="form-control" id="titleTech" placeholder="Title">
  <label for="descriptionTech" class="form-label">Description</label>
  <textarea class="form-control" id="descriptionTech" rows="3"></textarea>
  <label for="techInput" class="form-label">Language</label>
  <input type="text" class="form-control" id="techInput" placeholder="Title">
<button type="submit" class="btn btn-primary mb-3">Submit</button>
</form>`;

  renderToDom('#form-containerTwo', domString);
};

export default newTechForm;
