import {DECREMENT, INCREMENT} from './action';

const initial = {
  count: 0,
};

export const reducer = (state = initial, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log(state.count + 1, 'increment');
      return {...state, count: state.count + 1};
    case DECREMENT:
      console.log(state.count - 1, 'decrement');
      return {...state, count: state.count > 0 ? state.count - 1 : 0};
    default:
      return state;
  }
};
