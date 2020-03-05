let full = 100;

const increaseFullScore = () => {
  if (full <= 90) {
    full += 10;
  } else {
    full = 100;
  }
};

const decreaseFullScore = () => {
  if (full >= 3) {
    full -= 3;
  } else {
    full = 0;
  }
};

const getFull = () => full;

export default { getFull, increaseFullScore, decreaseFullScore };
