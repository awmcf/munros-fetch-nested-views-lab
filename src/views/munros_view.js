const MunrosView = function (container, munro) {
  this.munrosContainer = container;
  this.munro = munro;
};

MunrosView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const name = this.createMunroHeading();
  munroContainer.appendChild(name);

  const meaning = this.createMeaning();
  munroContainer.appendChild(meaning);

  const height = this.createHeight();
  munroContainer.appendChild(meaning);

  this.munrosContainer.appendChild(munrosContainer);
};

MunrosView.prototype.createMunroHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('munro-name');
  return name;
};

MunrosView.prototype.createMeaning = function () {
  const meaning = document.createElement('p');
  meaning.classList.add('munros');
  return meaning;
};

MunrosView.prototype.createHeight = function () {
  const height = document.createElement('p');
  height.classList.add('munros');
  return meaning;
};



module.exports = MunrosView;
