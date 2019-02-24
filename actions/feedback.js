// feedback.js

import axios from 'axios';
import { GET_ERRORS, ADD_FEEDBACK, DELETE_FEEDBACK, FETCH_FEEDBACK } from '../constants/types';

export const submitFeedback = ({ feedback_name, feedback_email, feedback_city, feedback_phone, feedback_message }) => {
  return (dispatch) => {
    return axios.post( `/api/feedback/add`, {feedback_name, feedback_email, feedback_city, feedback_phone, feedback_message})
     .then(response => {
       dispatch(submitFeedbackSuccess(response.data))
     })
     .catch(error => {
        throw (GET_ERRORS);
     });
 };
};

export const submitFeedbackSuccess = (data) => {
  return {
    type : ADD_FEEDBACK,
    payload: {
     _id: data._id,
     feedback_name: data.feedback_name,
     feedback_email: data.feedback_email,
     feedback_city: data.feedback_city,
     feedback_phone: data.feedback_phone,
     feedback_message: data.feedback_message
   }
 }
};

export const deleteFeedbackSuccess = id => {
  return {
    type : DELETE_FEEDBACK,
    payload: {
     id
   }
 }
}

export const deleteFeedback = id => {
  return (dispatch) => {
    return axios.get( `/api/feedback/delete/${id}` )
     .then(response => {
       dispatch(deleteFeedbackSuccess(response.data))
     })
     .catch(error => {
        throw (error);
     });
 };
};

export const fetchFeedback = (feedback) => {
  return  {
    type : FETCH_FEEDBACK,
    feedback
 }
};

export const  fetchAllFeedback = () => {
  return  (dispatch) => {
    return  axios.get(`/api/feedback`)
     .then(response => {
       dispatch(fetchFeedback(response.data))
     })
     .catch(error => {
        throw (error);
     });
 };
}; 