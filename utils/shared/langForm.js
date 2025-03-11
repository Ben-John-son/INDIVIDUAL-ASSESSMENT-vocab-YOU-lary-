import renderToDom from '../sample_data/render';
import clearDom from '../sample_data/clearDom';

const newLangForm = () => {
  const domString = `
  <div id='formId' class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Title</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Title">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
<button id='submitBtn' type="submit" class="btn btn-primary mb-3">Submit</button>
</div>`;
  clearDom();
  renderToDom('#view', domString);
};

export default newLangForm;
