import { REMOVE_TASK, EDIT_TASK, ADD_TASK, MOVE_TASK, FETCH_TASK, DRAG_TASK } from "../../const/reducerConst";

export const taskReducer = (state, action) => {
  switch (action.type) {
    case REMOVE_TASK: {
      const { from, id } = action.payload
      const filter = Array.from(state[from]).filter(task => task.id !== id)
      return {
        ...state,
        [from]: filter
      }
    }

    case EDIT_TASK: {
      const { boardId, data, index } = action.payload
      const edittedData = Array.from(state[boardId])
      edittedData[index].title = data.title
      edittedData[index].weight = data.weight
      return {
        ...state,
        [boardId]: edittedData
      }

    }

    case ADD_TASK: {
      const { destination, data } = action.payload
      let target = Array.from(state[destination])
      target.push(data)
      return {
        ...state,
        [destination]: target
      }
    }

    case MOVE_TASK: {
      const { from, destination, data } = action.payload
      const removed = Array.from(state[from]).filter(task => task.id !== data.id)
      let target = Array.from(state[destination])
      target.push(data)
      // target.sort((a, b) => b.id - a.id)
      return {
        ...state,
        [from]: removed,
        [destination]: target
      }
    }
    case FETCH_TASK: {
      const { boardId, data } = action.payload
      // const sortedData = data.sort((a, b) => b.id - a.id)
      return {
        ...state,
        [boardId]: data
      }
    }
    case DRAG_TASK: {
      const { source, destination } = action.payload
      if (!destination) {
        return state
      }
      let boardDataSource = Array.from(state[source.droppableId])
      const taskSource = boardDataSource.slice(0)[source.index]
      boardDataSource.splice(source.index, 1)

      let returnData = {}
      if (source.droppableId === destination.droppableId) {
        boardDataSource.splice(destination.index, 0, taskSource)
        returnData = {
          ...state,
          [source.droppableId]: boardDataSource
        }
      } else {
        let destinationBoard = Array.from(state[destination.droppableId])
        destinationBoard.splice(destination.index, 0, taskSource)
        returnData = {
          ...state,
          [source.droppableId]: boardDataSource,
          [destination.droppableId]: destinationBoard
        }
      }
      // const target = Array.from(state[destination.droppableId])

      return returnData
    }
    default:
      return state
  }
}