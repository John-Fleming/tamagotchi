import eatData from '../../helpers/data/eatData';
import fightData from '../../helpers/data/fightData';
import funData from '../../helpers/data/funData';
import sleepData from '../../helpers/data/sleepData';
import progressData from '../../helpers/data/progressData';

const getAllScores = () => {
  const eatScore = eatData.getFull();
  const strengthScore = fightData.getStrength();
  const funScore = funData.getFun();
  const sleepScore = sleepData.getEnergy();
  const allScores = eatScore + strengthScore + funScore + sleepScore;
  const progressScore = allScores / 4;
  progressData.setProgressScore(progressScore);
  console.error(progressData.getProgressScore());
};

export default { getAllScores };
