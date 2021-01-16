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

    case 'add_task': {
      const { to, data } = action.payload
      let target = Array.from(state[to])
      console.log('data reducer', data, target)
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
      return {
        ...state,
        [from]: removed,
        [to]: target
      }
    }
    case 'fetch_task': {
      const { boardId, data } = action.payload
      return {
        ...state,
        [boardId]: data
      }
    }
    default:
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

const removeTask = dispatch => (from, id) => {
  dispatch({
    type: 'remove_task',
    payload: {
      from,
      id
    }
  })
}

const moveTask = dispatch => (from, to, data) => {
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
}

const addTask = dispatch => async (boardId, title, weight) => {

  try {

    const numValidate = /^\d+$/
    let data = {}
    if (numValidate.test(weight)) {
      data = {
        title, weight
      }
    } else {
      data = { title }
    }

    const response = await happyApi.post(`/boards/${boardId}/tasks`, data)

    console.log('response', response.data)
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

export const { Provider, Context } = createDataContext(
  taskReducer,
  { fetchTaskPerBoard, removeTask, moveTask, addTask },
  []
)