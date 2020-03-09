import utils from '../../helpers/utils';
import eatData from '../../helpers/data/eatData';
import progress from '../progress/progress';
import './eat.scss';

const printFullScore = () => {
  const fullScore = eatData.getFull();
  let domString = '';
  domString += '<div class="eat-container">';
  domString += '<h2>Eat</h2>';
  domString += `<p>Full // ${fullScore}</p>`;
  domString += '<button id="healthy-food-btn">Healthy Food</button>';
  domString += '<button id="unhealthy-food-btn">Unhealthy Food</button>';
  domString += '</div>';
  utils.printToDom('eat', domString);
};

const eatHealthyFood = () => {
  eatData.increaseFullScore();
  printFullScore();
  progress.getAllScores();
};

const eatUnhealthyFood = () => {
  eatData.decreaseFullScore();
  printFullScore();
  progress.getAllScores();
};

export default { printFullScore, eatHealthyFood, eatUnhealthyFood };
