import React from 'react';
import CommentForm from './CommentForm';


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

export default Comments;
