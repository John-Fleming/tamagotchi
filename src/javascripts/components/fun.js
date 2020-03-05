import utils from '../helpers/utils';
import funData from '../helpers/data/funData';

const printFunScore = () => {
  const funScore = funData.getFun();
  let domString = '';
  domString += '<h2>Play</h2>';
  domString += `<p>${funScore}</p>`;
  domString += '<button id="super-fun-btn">Super Fun Activity</button>';
  domString += '<button id="slightly-fun-btn">Slightly Fun Activity</button>';
  utils.printToDom('play', domString);
};

const superFunActivity = () => {
  funData.increaseFunScore();
  printFunScore();
};

const slightlyFunActivity = () => {
  funData.slightlyIncreaseFunScore();
  printFunScore();
};

export default { printFunScore, superFunActivity, slightlyFunActivity };
