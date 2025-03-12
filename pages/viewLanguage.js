import renderToDom from '../utils/sample_data/render';

const showLanguage = (obj) => {
  let domString = '';
  obj.forEach((item) => {
    domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${item.category}</h6>
    <p class="card-text">${item.description}</p>
    <a href="#" class="card-link">Edit</a>
    <a href="#" class="card-link">Delete</a>
  </div>
</div>`;
  });
  renderToDom('#view', domString);
};

const showTech = (obj) => {
  let domString = '';
  obj.forEach((item) => {
    domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${item.category}</h6>
    <p class="card-text">${item.description}</p>
    <a href="#" class="card-link">Edit</a>
    <a href="#" class="card-link">Delete</a>
  </div>
</div>`;
  });
  renderToDom('#viewTwo', domString);
};

export { showLanguage, showTech };
