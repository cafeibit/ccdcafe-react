// CreatePost.js 

import { connect } from 'react-redux' ;
import { createPost } from '../../actions/posts' ;
import NewPost from  './NewPost' ;

const mapDispatchToProps = dispatch => {
  return {
    onAddPost : post => {
     dispatch(createPost(post));
   }
 };
};

export default connect(null ,mapDispatchToProps)(NewPost);