import createDataContext from './createDataContext'
import happyApi from '../api/happy'

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'remove_task': {
      const { from, id } = action.payload
      const filter = Array.from(state[from]).filter(task => task.id !== id)
      return {
        ...state,
        [from]: filter
      }
    }

    case 'edit_task': {
      const { boardId, data, index } = action.payload
      const edittedData = Array.from(state[boardId])
      edittedData[index].title = data.title
      edittedData[index].weight = data.weight
      return {
        ...state,
        [boardId]: edittedData
      }

    }

    case 'add_task': {
      const { to, data } = action.payload
      let target = Array.from(state[to])
      target.push(data)
      return {
        ...state,
        [to]: target
      }
    }

    case 'move_task': {
      const { from, to, data } = action.payload
      const removed = Array.from(state[from]).filter(task => task.id !== data.id)
      let target = Array.from(state[to])
      target.push(data)
      // target.sort((a, b) => b.id - a.id)
      return {
        ...state,
        [from]: removed,
        [to]: target
      }
    }
    case 'fetch_task': {
      const { boardId, data } = action.payload
      // const sortedData = data.sort((a, b) => b.id - a.id)
      return {
        ...state,
        [boardId]: data
      }
    }
    default:
      console.log('default reducer', action.payload)
      return state
  }
}

const fetchTaskPerBoard = dispatch => async (id) => {
  try {
    const response = await happyApi.get(`/boards/${id}/tasks`);
    dispatch({
      type: 'fetch_task',
      payload: {
        data: response.data,
        boardId: id
      }
    })

  } catch (error) {
    console.log('err', error)
  }
}

const removeTask = dispatch => async (from, id) => {
  try {

    dispatch({
      type: 'remove_task',
      payload: {
        from,
        id
      }
    })

    await happyApi.delete(`/tasks/${id}`)

  } catch (error) {

  }
}

const moveTask = dispatch => async (from, to, data) => {
  try {

    dispatch({
      type: 'move_task',
      payload: {
        from,
        to,
        data: {
          id: data.id,
          title: data.title,
          userId: data.userId,
          weight: data.weight,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          boardId: to
        }
      }
    })

    await happyApi.put(`/tasks/${data.id}/move/target/${to}`)

  } catch (e) {

  }
}

const addTask = dispatch => async (boardId, data) => {

  try {


    const response = await happyApi.post(`/boards/${boardId}/tasks`, data)

    dispatch({
      type: 'add_task',
      payload: {
        to: boardId,
        data: response.data
      }
    })

  } catch (e) {

  }
}

const editTask = dispatch => async (id, boardId, data, index) => {
  dispatch({
    type: 'edit_task',
    payload: {
      boardId,
      index,
      data
    }
  })
}

export const { Provider, Context } = createDataContext(
  taskReducer,
  { fetchTaskPerBoard, removeTask, moveTask, addTask, editTask },
  []
)