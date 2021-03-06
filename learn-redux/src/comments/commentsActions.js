// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(index, postId) {
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId
  }
}
