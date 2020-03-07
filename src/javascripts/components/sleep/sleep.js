import utils from '../../helpers/utils';
import sleepData from '../../helpers/data/sleepData';

const printEnergyScore = () => {
  const energyScore = sleepData.getEnergy();
  let domString = '';
  domString += '<h2>Sleep</h2>';
  domString += `<p>${energyScore}</p>`;
  domString += '<button id="nap-btn">Nap</button>';
  domString += '<button id="deep-slumber-btn">Deep Slumber</button>';
  utils.printToDom('sleep', domString);
};

const takeANap = () => {
  sleepData.increaseEnergyScore();
  printEnergyScore();
};

const deepSlumber = () => {
  sleepData.bigEnergyBoost();
  printEnergyScore();
};

export default { printEnergyScore, takeANap, deepSlumber };
