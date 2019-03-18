const { createStore } = Redux;

const initialState = {
  buttonOneScore: 0,
  buttonTwoScore: 0
}

const scoreReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_BUTTON_ONE_POINT:
    const buttonOneNewScore = state.buttonOneScore + 1
    return Object.assign({}, state, {
      buttonOneScore: buttonOneNewScore
    })
    case ADD_BUTTON_TWO_POINT:
    const buttonTwoNewScore = state.buttonTwoScore + 1
    return Object.assign({}, state, {
      buttonTwoScore: buttonTwoNewScore
    })
    default:
      return state;
  }
}

const buttonOneScoreButton = document.getElementById('add-button-one-point')
const buttonTwoScoreButton = document.getElementById('add-button-two-point')

const ADD_BUTTON_ONE_POINT = 'ADD_BUTTON_ONE_POINT'
const ADD_BUTTON_TWO_POINT = 'ADD_BUTTON_TWO_POINT'

buttonOneScoreButton.addEventListener('click', () => {
  store.dispatch({
    type: ADD_BUTTON_ONE_POINT
  })
})

buttonTwoScoreButton.addEventListener('click', () => {
  store.dispatch({
    type: ADD_BUTTON_TWO_POINT
  })
})

const store = createStore(scoreReducer);

const buttonOneScoreSection = document.getElementById('button-one-score')
const buttonTwoScoreSection = document.getElementById('button-two-score')

const render = () => {
  buttonOneScoreSection.innerHTML = store.getState().buttonOneScore
  buttonTwoScoreSection.innerHTML = store.getState().buttonTwoScore
}

render();
store.subscribe(render);
