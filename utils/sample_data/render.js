const renderToDom = (divId, toRender) => {
  const domDiv = document.querySelector(divId);
  domDiv.innerHTML = toRender;
};

export default renderToDom;
