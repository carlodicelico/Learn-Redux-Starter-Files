import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './appActions';
import App from './App';


function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const Dispatcher = connect(mapStateToProps, mapDispatchToProps)(App);

export default Dispatcher;
