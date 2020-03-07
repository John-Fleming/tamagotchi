import '../styles/main.scss';
import eat from './components/eat';
import fun from './components/fun';
import fight from './components/fight';
import sleep from './components/sleep';

const init = () => {
  eat.printFullScore();
  $('body').on('click', '#healthy-food-btn', eat.eatHealthyFood);
  $('body').on('click', '#unhealthy-food-btn', eat.eatUnhealthyFood);
  fun.printFunScore();
  $('body').on('click', '#super-fun-btn', fun.superFunActivity);
  $('body').on('click', '#slightly-fun-btn', fun.slightlyFunActivity);
  fight.printStrengthScore();
  $('body').on('click', '#run-away-btn', fight.runAway);
  $('body').on('click', '#violence-btn', fight.fight);
  sleep.printEnergyScore();
  $('body').on('click', '#nap-btn', sleep.takeANap);
  $('body').on('click', '#deep-slumber-btn', sleep.deepSlumber);
};

init();
