// Import from redux
import { createStore } from "redux";

//state
const initialState = {
  p1LifePoints: 8000,
  p2LifePoints: 8000,
};

// Action type
const p1GainLifePoint = "+p1";
const p1LoseLifePoint = "-p1";
const p2GainLifePoint = "+p2";
const p2LoseLifePoint = "-p2";

// Action Creators

// This function when invoked "creates" an action object
// for anywhere in your application to dispatch.
// This is so that the other parts of your application
// DO NOT NEED TO KNOW how to dispatch an instruction to the store.

export const p1GainLife = (amount) => ({ type: p1GainLifePoint, amount });
export const p1LoseLife = (amount) => ({ type: p1LoseLifePoint, amount });
export const p2GainLife = (amount) => ({ type: p2GainLifePoint, amount });
export const p2LoseLife = (amount) => ({ type: p2LoseLifePoint, amount });

// When an action is dispatched (store.dispatch)
// take in the current state of the store and the action object
// and produce the next state.

const reducer = (currState = initialState, action) => {
  switch (action.type) {
    case p1GainLifePoint:
      return {
        ...currState,
        p1LifePoints: currState.p1LifePoints + action.amount,
      };
    case p1LoseLifePoint:
      return {
        ...currState,
        p1LifePoints: currState.p1LifePoints - action.amount,
      };
    case p2GainLifePoint:
      return {
        ...currState,
        p2LifePoints: currState.p2LifePoints + action.amount,
      };
    case p2LoseLifePoint:
      return {
        ...currState,
        p2LifePoints: currState.p2LifePoints - action.amount,
      };
    default:
      return currState;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

window.store = store;
