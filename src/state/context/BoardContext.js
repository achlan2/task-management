import createDataContext from './createDataContext'
import { fetchBoard } from '../actions/boardActions'
import { boardReducer } from '../reducers/boardReducers'

export const { Context, Provider } = createDataContext(
  boardReducer,
  { fetchBoard },
  []
)