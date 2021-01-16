import createDataContext from './createDataContext'
import happyApi from '../api/happy'

const taskReducer = (state, action) => {
  switch(action.type){
    case 'remove_task':
      const {from, id} = action.payload
      const filter = Array.from(state[from]).filter(task=>task.id !== id)
      return {
        ...state,
        [from]: filter
      }

    case 'fetch_task': 
      const { boardId, data } = action.payload
      return {
        ...state,
        [boardId]: data
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

const removeTask = dispatch => (from, id) => {
  console.log('remove', from, id)
  dispatch({
    type:'remove_task',
    payload:{
      from,
      id
    }
  })
}

export const {Provider, Context} = createDataContext(
  taskReducer,
  { fetchTaskPerBoard, removeTask },
  []
)