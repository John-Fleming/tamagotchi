import utils from '../../helpers/utils';
import funData from '../../helpers/data/funData';
import progress from '../progress/progress';
import './play.scss';

const printFunScore = () => {
  const funScore = funData.getFun();
  let domString = '';
  domString += '<div class="play-container">';
  domString += '<h2>Play</h2>';
  domString += `<p>Fun // ${funScore}</p>`;
  domString += '<button id="super-fun-btn">Super Fun Activity</button>';
  domString += '<button id="slightly-fun-btn">Slightly Fun Activity</button>';
  domString += '</div>';
  utils.printToDom('play', domString);
};

const superFunActivity = () => {
  funData.increaseFunScore();
  printFunScore();
  progress.getAllScores();
};

const slightlyFunActivity = () => {
  funData.slightlyIncreaseFunScore();
  printFunScore();
  progress.getAllScores();
};

export default { printFunScore, superFunActivity, slightlyFunActivity };
