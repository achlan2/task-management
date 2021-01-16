import createDataContext from './createDataContext'
import happyApi from '../api/happy'

const taskReducer = (state, action) => {
  switch(action.type){
    case 'fetch_task': 
      const { boardId, data } = action.payload
      return {
        ...state,
        [boardId]: [data]
    }
    default:
      return state
  }
}

const fetchTaskPerBoard = dispatch => async (id) => {
  // dispatch({
  //   type:'init_task',
  //   payload: id
  // })
  try {
    const response = await happyApi.get(`/boards/${id}/tasks`);
    console.log('fetch')
    dispatch({ 
      type:'fetch_task',  
      payload: {
        data: response.data,
        boardId: id
      }
    })
    
  } catch (error) {
    console.log('err',error)
  }
}

export const {Provider, Context} = createDataContext(
  taskReducer,
  { fetchTaskPerBoard },
  []
)