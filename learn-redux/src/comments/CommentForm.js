import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';


class CommentForm extends Component {
  render() {
    console.info('CommentForm props', this.props);
    const { fields: { author, comment },
      handleSubmit,
      submitting } = this.props;
    return (
      <form className='comment-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='author' {...author} />
        <input type='text' placeholder='comment' {...comment} />
        <input type='submit' hidden />
      </form>
    );
  }
}

CommentForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

CommentForm = reduxForm({
  form: 'comment',
  fields: ['author', 'comment']
})(CommentForm);

export default CommentForm;
