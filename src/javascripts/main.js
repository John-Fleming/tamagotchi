import '../styles/main.scss';
import eat from './components/eat/eat';
import fun from './components/fun/fun';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';

const events = () => {
  $('body').on('click', '#healthy-food-btn', eat.eatHealthyFood);
  $('body').on('click', '#unhealthy-food-btn', eat.eatUnhealthyFood);
  $('body').on('click', '#super-fun-btn', fun.superFunActivity);
  $('body').on('click', '#slightly-fun-btn', fun.slightlyFunActivity);
  $('body').on('click', '#run-away-btn', fight.runAway);
  $('body').on('click', '#violence-btn', fight.fight);
  $('body').on('click', '#nap-btn', sleep.takeANap);
  $('body').on('click', '#deep-slumber-btn', sleep.deepSlumber);
};

const init = () => {
  eat.printFullScore();
  fun.printFunScore();
  fight.printStrengthScore();
  sleep.printEnergyScore();
  events();
};

init();
