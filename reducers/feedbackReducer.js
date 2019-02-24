// feedbackReducer.js

import { ADD_FEEDBACK, DELETE_FEEDBACK, FETCH_FEEDBACK } from  '../constants/types';

export default  function feedbackReducer( state = [], action) {
 switch (action.type) {
   case ADD_FEEDBACK:
     return [...state , action.payload];
   case DELETE_FEEDBACK:
     return state.filter(feedback => feedback._id !== action.payload.id);
     case FETCH_FEEDBACK:
     return action.feedbacks;
    default :
     return state ;
 }
} 
