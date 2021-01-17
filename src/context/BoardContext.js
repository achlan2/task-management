import happyApi from '../api/happy'
import { FETCH_BOARD } from '../const/reducerConst'
import createDataContext from './createDataContext'

const boardReducer = (state, action) => {
  switch (action.type) {
    case FETCH_BOARD:
      return action.payload
    default:
      return state
  }
}

const fetchBoard = dispatch => async () => {
  const response = await happyApi.get('/boards');
  dispatch({ type: FETCH_BOARD, payload: response.data })
}

export const { Context, Provider } = createDataContext(
  boardReducer,
  { fetchBoard },
  []
)