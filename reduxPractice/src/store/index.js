import { createStore } from 'redux';

function counterReducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case '증가':
      return {
        counter: state.counter + 1,
      };

    case '가변적인증가':
      return {
        counter: state.counter + action.amount,
      };

    case '감소':
      return {
        counter: state.counter - 1,
      };

    default:
      return state; // { counter: 0 }
  }
}

const store = createStore(counterReducer);

export default store;
