const allScores = [];
const progressScore = '';

const setProgressScore = (score) => {
  allScores.push(score);
  // line to find the average of all scores then save that to the below
  // progressScore =
};

const getAllScores = () => allScores;
const getProgressScore = () => progressScore;

export default { setProgressScore, getProgressScore, getAllScores };
