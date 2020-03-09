import eatData from '../../helpers/data/eatData';
import fightData from '../../helpers/data/fightData';
import funData from '../../helpers/data/funData';
import sleepData from '../../helpers/data/sleepData';
import progressData from '../../helpers/data/progressData';
import utils from '../../helpers/utils';
import './progress.scss';

const printProgressScore = () => {
  const progressScore = progressData.getProgressScore();
  let domString = '';
  domString += `<h2>Progress Score // ${progressScore}</h2>`;
  domString += '<div class="meter">';
  domString += `<span style="width: ${progressScore}%"></span>`;
  domString += '</div>';
  utils.printToDom('progress', domString);
};

const getAllScores = () => {
  const eatScore = eatData.getFull();
  const strengthScore = fightData.getStrength();
  const funScore = funData.getFun();
  const sleepScore = sleepData.getEnergy();
  const allScores = eatScore + strengthScore + funScore + sleepScore;
  const progressScore = allScores / 4;
  progressData.setProgressScore(progressScore);
  printProgressScore();
};

export default { getAllScores };
