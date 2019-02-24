// Feedback.js 

const  mongoose = require ('mongoose');
const  Schema = mongoose.Schema;

// Define collection and schema for Feedback 
let  Feedback = new  Schema({
  feedback_name: {
    type : String 
  },
  feedback_email: {
    type : String 
  },
  feedback_city: {
    type : String 
  },
  feedback_phone: {
    type : Number 
  },
  feedback_message: {
    type : String 
  },
},{
   collection: 'feedbacks' 
});

module.exports = mongoose.model( 'Feedback' , Feedback); 