import ActionType from "../actions/ActionType.js";

const initState = {
  homeData: []
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.GET_HOME:
      return state;
    default:
      return state;
  }
}

export default appReducer;