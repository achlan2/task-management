import createDataContext from './createDataContext'
import { fetchTaskPerBoard, removeTask, moveTask, addTask, editTask, dragTask } from '../actions/taskActions'
import { taskReducer } from '../reducers/taskReducers'

export const { Provider, Context } = createDataContext(
  taskReducer,
  { fetchTaskPerBoard, removeTask, moveTask, addTask, editTask, dragTask },
  []
)