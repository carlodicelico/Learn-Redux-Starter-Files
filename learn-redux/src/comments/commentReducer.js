function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [
        // return new state with comment added
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ]
    case 'REMOVE_COMMENT':
      // return new state with comment deleted
      return [
        // from the start to the one we want to delete
        ...state.slice(0, action.index),
        // from the deleted item to the end
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // current state
      ...state,
      // new post with updated comments
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
