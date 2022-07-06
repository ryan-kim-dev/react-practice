import { createStore } from 'redux';

function counterReducer(initialState = { counter: 0 }, action) {
  switch (action.type) {
    case '증가':
      return {
        counter: initialState.counter + 1,
      };

    case '감소':
      return {
        counter: initialState.counter - 1,
      };

    default:
      return initialState; // { counter: 0 }
  }
}

const store = createStore(counterReducer);

export default store;
