import store from "./reducer/redux-store";

import {
  p1GainLife,
  p1LoseLife,
  p2GainLife,
  p2LoseLife,
} from "./reducer/redux-store";

window.addEventListener("DOMContentLoaded", () => {
  const p1life = document.querySelector(".subcontainer1");
  const p1pm = document.querySelector(".p1pm");
  const p2life = document.querySelector(".subcontainer2");
  const p2pm = document.querySelector(".p2pm");

  p1life.addEventListener("click", (e) => {
    if (p1pm.innerText === "+") {
      store.dispatch(p1GainLife(+e.target.innerHTML));
    } else {
      store.dispatch(p1LoseLife(+e.target.innerHTML));
    }
  });

  p1pm.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "+":
        e.target.innerHTML = "-";
        break;
      default:
        e.target.innerHTML = "+";
        break;
    }
  });

  p2life.addEventListener("click", (e) => {
    if (p1pm.innerText === "+") {
      store.dispatch(p2GainLife(+e.target.innerHTML));
    } else {
      store.dispatch(p2LoseLife(+e.target.innerHTML));
    }
  });

  p2pm.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "+":
        e.target.innerHTML = "-";
        break;
      default:
        e.target.innerHTML = "+";
        break;
    }
  });
  const player1Score = document.querySelector(".p1h");
  const player2Score = document.querySelector(".p2h");

  // Call this function when the Redux store state has updated.
  store.subscribe(() => {
    const state = store.getState();
    player1Score.innerText = state.p1LifePoints;
    player2Score.innerText = state.p2LifePoints;
  });
});
