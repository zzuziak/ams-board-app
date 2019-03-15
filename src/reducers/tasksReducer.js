const initialState = {
  items: [],
  item: {}
}

const tasksReducer = (state = initialState, action) => {
  switch(action.type) {
    case "CREATE_TASK":
      return {
        ...state,
        item: action.payload
      }
    default:
    return state
  }
}

export default tasksReducer;
