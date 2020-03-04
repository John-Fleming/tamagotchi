import utils from '../helpers/utils';
import eatData from '../helpers/data/eatData';

const printFullScore = () => {
  const fullScore = eatData.getFull();
  let domString = '';
  domString += '<h2>Eat</h2>';
  domString += `<p>${fullScore}</p>`;
  domString += '<button class="healthy-food">Healthy Food</button>';
  domString += '<button class="unhealthy-food">Unhealthy Food</button>';
  utils.printToDom('eat', domString);
};

export default { printFullScore };
