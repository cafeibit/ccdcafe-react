// PostList.js 

import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { deletePost } from '../../actions/posts';

function PostList ({ posts, onDelete }) {
  if (!posts.length) {
    return (
     <div>
       还没有评论
     </div>
   )
 }
  return  (
   <div>
     {posts.map(post => {
       return (
         <Post post = { post } onDelete = { onDelete } key = { post._id } />
       );
     })}
   </ div >
 );
}

const mapStateToProps = state => {
 return {
   posts: state.posts
 };
};

const mapDispatchToProps = dispatch => {
 return {
   onDelete: id => {
     dispatch(deletePost(id));
   }
 };
};

export default connect( mapStateToProps, mapDispatchToProps)(PostList); 