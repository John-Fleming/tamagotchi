import '../styles/main.scss';
import eat from './components/eat';

const init = () => {
  eat.printFullScore();
  $('#healthy-food-btn').click(eat.eatHealthyFood);
  $('#unhealthy-food-btn').click(eat.eatUnhealthyFood);
};

init();
