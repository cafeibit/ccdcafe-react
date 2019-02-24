//feedbackRoute.js

const  express = require ( 'express' );
const  feedbackRoutes = express.Router();

// Require Feedback model in our routes module 
let  Feedback = require ( '../models/Feedback' );

// Defined store route 
feedbackRoutes.route( '/add' ).post( function (req, res) {
  let  feedback = new  Feedback(req.body);
 feedback.save()
   .then(feedback => {
     res.status( 200 ).json({ 'feedback' : 'feedback in added successfully' });
   })
   .catch(err => {
    res.status( 400 ).send( "unable to save to database" );
    });
 });
 
 // Defined get data(index or listing) route 
 feedbackRoutes.route( '/' ).get( function (req, res) {
    Feedback.find( {}, function (err, feedback){
     if (err){
       console.log(err);
    }
     else  {
      res.json(feedback);
    }
  });
 });
 
 // Defined edit route 
 feedbackRoutes.route( '/edit/:id' ).get( function  (req, res) {
   let  id = req.params.id;
  Feedback.findById(id, function  (err, feedback){
      res.json(feedback);
  });
 });
 
 //  Defined update route 
 feedbackRoutes.route( '/update/:id' ).post( function  (req, res) {
    Feedback.findById(req.params.id, function (err, feedback) {
        if  (!feedback)
         res.status( 404 ).send( "feedback is not found" );
        else  {
           feedback.feedback_name = req.body.feedback_name;
           feedback.feedback_email = req.body.feedback_email;
           feedback.feedback_city = req.body.feedback_city;
           feedback.feedback_phone = req.body.feedback_phone;
           feedback.feedback_message = req.body.feedback_message;
           feedback.save().then(feedback => {
             res.json( 'Update complete' );
         })
         .catch(err => {
               res.status( 400 ).send( "unable to update the database" );
         });
       }
     });
    });
   
   // Defined delete | remove | destroy route 
   feedbackRoutes.route( '/delete/:id' ).get( function  (req, res) {
      Feedback.findByIdAndRemove({ _id : req.params.id}, function (err, feedback){
           if (err) res.json(err);
           else  res.json( 'Successfully removed' );
      });
   });
   
   module.exports = feedbackRoutes;