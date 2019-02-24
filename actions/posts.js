import { ADD_POST, DELETE_POST, FETCH_POST } from '../constants/types';
import axios from 'axios';

export const createPost = ({ title, body }) => {
  return (dispatch) => {
    return  axios.post( `/api/posts/add`, {title, body})
     .then(response => {
       dispatch(createPostSuccess(response.data))
     })
     .catch(error => {
        throw (error);
     });
 };
};

export const createPostSuccess = (data) => {
  return {
    type : ADD_POST,
    payload: {
     _id: data._id,
     title: data.title,
     body: data.body
   }
 }
};

export const deletePostSuccess = id => {
  return {
    type : DELETE_POST,
    payload: {
     id
   }
 }
}

export const deletePost = id => {
  return (dispatch) => {
    return axios.get( `/api/posts/delete/${id}` )
     .then(response => {
       dispatch(deletePostSuccess(response.data))
     })
     .catch(error => {
        throw (error);
     });
 };
};

export const fetchPosts = (posts) => {
  return  {
    type : FETCH_POST,
   posts
 }
};

export const  fetchAllPosts = () => {
  return  (dispatch) => {
    return  axios.get(`/api/posts`)
     .then(response => {
       dispatch(fetchPosts(response.data))
     })
     .catch(error => {
        throw (error);
     });
 };
}; 