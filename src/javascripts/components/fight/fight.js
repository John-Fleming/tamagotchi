import utils from '../../helpers/utils';
import fightData from '../../helpers/data/fightData';
import './fight.scss';

const printStrengthScore = () => {
  const strengthScore = fightData.getStrength();
  let domString = '';
  domString += '<div class="fight-container">';
  domString += '<h2>Fight</h2>';
  domString += `<p>Strength // ${strengthScore}</p>`;
  domString += '<button id="run-away-btn">Run Away</button>';
  domString += '<button id="violence-btn">Commit Violence</button>';
  domString += '</div>';
  utils.printToDom('fight', domString);
};

const runAway = () => {
  fightData.increaseStrengthScore();
  printStrengthScore();
};

const fight = () => {
  fightData.decreaseStrengthScore();
  printStrengthScore();
};

export default { printStrengthScore, runAway, fight };
