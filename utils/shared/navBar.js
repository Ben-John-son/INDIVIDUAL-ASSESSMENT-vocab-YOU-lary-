import renderToDom from '../sample_data/render';

const navBar = () => {
  const domString = `<nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="https://i.redd.it/funniest-cat-pictures-you-have-v0-cvk0vuc0hj5a1.jpg?width=3000&format=pjpg&auto=webp&s=73c395c63462f04c52e1550559dfb9809dd2a599" alt="Bootstrap" width="30" height="24">
    </a>
    <ul id='navFilters'>
    <button id='allBtn' type="button" class="btn btn-primary">All Cards</button>
    <button id='langBtn' type="button" class="btn btn-primary">Language</button>
    <button id='techBtn' type="button" class="btn btn-primary">Tech</button>
    <button id='formBtn' type="button" class="btn btn-primary">Add Card</button>
    </ul>
      <div id="login-form-container"></div>
  </div>
</nav>`;
  renderToDom('#navigation', domString);
};

export default navBar;
