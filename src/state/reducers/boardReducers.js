import { FETCH_BOARD } from "../../const/reducerConst"

export const boardReducer = (state, action) => {
  switch (action.type) {
    case FETCH_BOARD:
      return action.payload
    default:
      return state
  }
}
