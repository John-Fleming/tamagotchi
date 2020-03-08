// build an function that imports all data and calls each of the getters functions for the current scores and pushes them to an array
// create a function that adds an acumulator to the current index value in the array and then divides them by the array.length
// then pass that function result to array.reduce() to create a single value
// pass that value to a print function to push it to the DOM

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
  progressData.setProgressScore(eatScore);
  progressData.setProgressScore(strengthScore);
  progressData.setProgressScore(funScore);
  progressData.setProgressScore(sleepScore);
  const allScores = progressData.getAllScores();
  console.error(allScores); // this is now printing the array, but it doesn't re-console error when buttons are clicked to update - check this
  // probably can fix this by calling getAllScores() again to the bottom of the click events as well
};

export default { getAllScores };
