let progressScore = '';

const setProgressScore = (score) => {
  progressScore = Math.floor(score);
};

const getProgressScore = () => progressScore;

export default { setProgressScore, getProgressScore };
