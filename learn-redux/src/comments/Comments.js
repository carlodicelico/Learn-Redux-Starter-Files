import React from 'react';
//import CommentForm from './CommentForm';


const Comment = (props) => {
  const { comment, index } = props;
  return (
    <div className='comment' key={index}>
      <p>
        <strong>{comment.user}</strong>
        {comment.text}
        <button className='remove-comment'>&times;</button>
      </p>
    </div>
  )
}

/*

Eventually, I want this to be a stateless functional component and use a
redux-form form instead of a regular html form

const Comments = (props) => {
  return (
    <div className='comments'>
      {props.postComments.map((comment, index) =>
        <Comment {...props} key={index} index={index} comment={comment} />
      )}
      <CommentForm {...props} />
    </div>
  );
};
*/

const Comments = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params,
      author = this.refs.author.value,
      comment = this.refs.comment.value;
      this.props.addComment(postId, author, comment);
  },
  render() {
    return (
      <div className='comments'>
        {this.props.postComments.map((comment, index) =>
          <Comment {...this.props} key={index} index={index} comment={comment} />
        )}
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    );
  }
});

export default Comments;
