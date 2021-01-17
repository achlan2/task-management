import { FETCH_BOARD } from '../const/reducerConst'
import happyApi from '../api/happy'

export const fetchBoard = dispatch => async () => {
  const response = await happyApi.get('/boards');
  dispatch({ type: FETCH_BOARD, payload: response.data })
}