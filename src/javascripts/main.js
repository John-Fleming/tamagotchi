import '../styles/main.scss';
import eat from './components/eat';
import fun from './components/fun';

const init = () => {
  eat.printFullScore();
  $('#healthy-food-btn').click(eat.eatHealthyFood);
  $('#unhealthy-food-btn').click(eat.eatUnhealthyFood);
  fun.printFunScore();
  $('#super-fun-btn').click(fun.superFunActivity);
  $('#slightly-fun-btn').click(fun.slightlyFunActivity);
};

init();
