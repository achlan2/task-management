import { REMOVE_TASK, EDIT_TASK, ADD_TASK, MOVE_TASK, FETCH_TASK, DRAG_TASK } from "../../const/reducerConst";
import happyApi from '../../api/happy'

const requestMoveApi = async (id, destinationId) => {
  await happyApi.put(`/tasks/${id}/move/target/${destinationId}`)
}

export const fetchTaskPerBoard = dispatch => async (id) => {
  try {
    const response = await happyApi.get(`/boards/${id}/tasks`);
    dispatch({
      type: FETCH_TASK,
      payload: {
        data: response.data,
        boardId: id
      }
    })

  } catch (error) {
    console.log('err', error)
  }
}

export const removeTask = dispatch => async (from, id) => {
  try {

    dispatch({
      type: REMOVE_TASK,
      payload: {
        from,
        id
      }
    })

    await happyApi.delete(`/tasks/${id}`)

  } catch (error) {

  }
}

export const moveTask = dispatch => async (from, destination, data) => {
  try {

    dispatch({
      type: MOVE_TASK,
      payload: {
        from,
        destination,
        data: {
          id: data.id,
          title: data.title,
          userId: data.userId,
          weight: data.weight,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          boardId: destination
        }
      }
    })

    requestMoveApi(data.id, destination)


  } catch (e) {

  }
}

export const addTask = dispatch => async (boardId, data) => {

  try {


    const response = await happyApi.post(`/boards/${boardId}/tasks`, data)

    dispatch({
      type: ADD_TASK,
      payload: {
        destination: boardId,
        data: response.data
      }
    })

  } catch (e) {

  }
}

export const editTask = dispatch => async (id, boardId, data, index) => {

  const response = await happyApi.put(`/tasks/${id}`, data);

  dispatch({
    type: EDIT_TASK,
    payload: {
      boardId,
      index,
      data: response.data
    }
  })

}

export const dragTask = dispatch => (result) => {

  try {
    const { source, destination, draggableId } = result

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return
    }
    console.log('edit run!')
    dispatch({
      type: DRAG_TASK,
      payload: {
        source,
        destination
      }
    })

    if (source.droppableId !== destination.droppableId) {
      requestMoveApi(draggableId, destination.droppableId)
    }

  } catch (error) {

  }
}
