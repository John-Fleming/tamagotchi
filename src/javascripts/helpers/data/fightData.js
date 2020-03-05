let strength = 100;

const increaseStrengthScore = () => {
  if (strength < 100) {
    strength += 1;
  }
};

const decreaseStrengthScore = () => {
  if (strength >= 10) {
    strength -= 10;
  } else {
    strength = 0;
  }
};

const getStrength = () => strength;

export default { getStrength, increaseStrengthScore, decreaseStrengthScore };
