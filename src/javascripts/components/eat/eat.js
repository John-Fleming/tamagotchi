import utils from '../../helpers/utils';
import eatData from '../../helpers/data/eatData';

const printFullScore = () => {
  const fullScore = eatData.getFull();
  let domString = '';
  domString += '<h2>Eat</h2>';
  domString += `<p>${fullScore}</p>`;
  domString += '<button id="healthy-food-btn">Healthy Food</button>';
  domString += '<button id="unhealthy-food-btn">Unhealthy Food</button>';
  utils.printToDom('eat', domString);
};

const eatHealthyFood = () => {
  eatData.increaseFullScore();
  printFullScore();
};

const eatUnhealthyFood = () => {
  eatData.decreaseFullScore();
  printFullScore();
};

export default { printFullScore, eatHealthyFood, eatUnhealthyFood };
