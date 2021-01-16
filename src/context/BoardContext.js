import happyApi from '../api/happy'
import createDataContext from './createDataContext'

const boardReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_board':
      return action.payload
    default:
      return state
  }
}

const fetchBoard = dispatch => async () => {
  const response = await happyApi.get('/boards');
  dispatch({ type: 'fetch_board', payload: response.data })
}

export const { Context, Provider } = createDataContext(
  boardReducer,
  { fetchBoard },
  []
)