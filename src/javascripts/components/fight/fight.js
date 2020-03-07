import utils from '../../helpers/utils';
import fightData from '../../helpers/data/fightData';

const printStrengthScore = () => {
  const strengthScore = fightData.getStrength();
  let domString = '';
  domString += '<h2>Fight</h2>';
  domString += `<p>${strengthScore}</p>`;
  domString += '<button id="run-away-btn">Run Away</button>';
  domString += '<button id="violence-btn">Commit Violence</button>';
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
