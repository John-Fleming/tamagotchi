import '../styles/main.scss';
import eat from './components/eat';
import fun from './components/fun';
import fight from './components/fight';
import sleep from './components/sleep';

const init = () => {
  eat.printFullScore();
  $('#healthy-food-btn').click(eat.eatHealthyFood);
  $('#unhealthy-food-btn').click(eat.eatUnhealthyFood);
  fun.printFunScore();
  $('#super-fun-btn').click(fun.superFunActivity);
  $('#slightly-fun-btn').click(fun.slightlyFunActivity);
  fight.printStrengthScore();
  $('#run-away-btn').click(fight.runAway);
  $('#violence-btn').click(fight.fight);
  sleep.printEnergyScore();
  $('#nap-btn').click(sleep.takeANap);
  $('#deep-slumber-btn').click(sleep.deepSlumber);
};

init();
