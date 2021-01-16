import createDataContext from './createDataContext'
import happyApi from '../api/happy'

const taskReducer = (state, action) => {
  switch(action.type){
    case 'fetch_task': {
      const { boardId, data } = action.payload
      return {
        ...state,
        [boardId]: data
      }
    }
    default:
      state;
  }
}

const fetchTaskPerBoard = dispatch => async (id) => {
  const response = await happyApi.get(`/boards/${id}/tasks`);
  dispatch({ 
    type:'fetch_task',  
    payload: {
      data: response.data,
      boardId: id
    }
  })
}

export const {Provider, Context} = createDataContext(
  taskReducer,
  { fetchTaskPerBoard },
  []
)