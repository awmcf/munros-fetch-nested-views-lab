const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.data = [];
};

Munros.prototype.getData = function () {
  const url = ('https://munroapi.herokuapp.com/munros')
  const request = new RequestHelper(url);

  request.get()
  .then((data) => {
    this.data =data.message;
    PubSub.publish('Munros:munros-data-ready', this.data);
  })
  .catch((error) => console.error(error));

};




module.exports = Munros;
