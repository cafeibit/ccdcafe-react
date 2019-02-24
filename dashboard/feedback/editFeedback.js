// editFeedback.js 

import React, { Component } from 'react' ;
import axios from 'axios' ;

export default class editFeedback extends Component  {
  constructor (props) {
    super (props);
    this.onChangeFeedbackName = this.onChangeFeedbackName.bind( this );
    this.onChangeFeedbackEmail = this.onChangeFeedbackEmail.bind( this );
    this.onChangeFeedbackCity = this.onChangeFeedbackCity.bind( this );
    this.onChangeFeedbackPhone = this.onChangeFeedbackPhone.bind( this );   
    this.onChangeFeedbackMessage = this.onChangeFeedbackMessage.bind( this );
    this.onSubmitHandler = this.onSubmitHandler.bind( this );

    this.state = {
      feedback_name: "爱咖啡",
      feedback_email: "xxx@xxx.xxx",
      feedback_city: "西安",
      feedback_phone: "",
      feedback_message: ""
   }
 }

 componentDidMount() {
     axios.get ( '/api/feedback/edit/' + this.props.match.params.id)
     .then(response => {
          this.setState({ 
            feedback_name: response.data.feedback_name, 
            feedback_email: response.data.feedback_email,
            feedback_city: response.data.feedback_city,
            feedback_phone: response.data.feedback_phone,
            feedback_message: response.data.feedback_message});
     })
     . catch (function (error) {
         console.log(error);
     })
}
 
onChangeFeedbackName (e) {
    this.setState({
     feedback_name: e.target.value
   });
  }
  
  onChangeFeedbackEmail (e) {
    this.setState({
     feedback_email: e.target.value
   });
  }

  onChangeFeedbackCity (e) {
    this.setState({
     feedback_city: e.target.value
   });
  }

  onChangeFeedbackPhone (e) {
    this.setState({
     feedback_phone: e.target.value
   });
  }

  onChangeFeedbackMessage (e) {
    this.setState({
     feedback_message: e.target.value
   });
  }
  
  onSubmit(e) {
    e.preventDefault();
    const feedback = {
     feedback_name: this.state.feedback_name,
     feedback_email: this.state.feedback_email,
     feedback_city: this.state.feedback_city,
     feedback_phone: this.state.feedback_phone,
     feedback_message: this.state.feedback_message
    };
    axios.post( '/api/feedback/update/' + this.props.match.params.id, feedback)
        .then(res => console.log(res.data ));
    
     this.props.history.push( '/feedback' );
  }
 
  render() {
     return  (
        <div style={{ marginTop: 10  }}>
            <h3 align= "center" >更新反馈</h3>
            <form onSubmit={ this.onSubmit}>
                <div className= "form-group" >
                    <label>反馈名称：</label>
                    <input 
                      type= "text"  
                      className= "form-control"  
                      value={ this.state.feedback_name}
                      onChange={ 
                        this.onChangeFeedbackName}
                        />
                  </div>
                  <div className= "form-group" >
                      <label>反馈邮件：</label>
                      <input type= "text"  
                        className= "form-control" 
                        value={ this.state.feedback_email}
                        onChange={ this.onChangeFeedbackEmail}
                        />
                  </div>
                  <div className= "form-group" >
                      <label>反馈城市：</label>
                      <input type= "text"  
                        className= "form-control" 
                        value={ this.state.feedback_city}
                        onChange={ this.onChangeFeedbackCity}
                        />
                  </div>
                  <div className= "form-group" >
                      <label>反馈电话：</label>
                      <input type= "text"  
                        className= "form-control" 
                        value={ this.state.feedback_phone}
                        onChange={ this.onChangeFeedbackPhone}
                        />
                  </div>
                  <div className= "form-group" >
                      <label>反馈信息：</label>
                      <input type= "text"  
                        className= "form-control" 
                        value={ this.state.feedback_message}
                        onChange={ this.onChangeFeedbackMessage}
                        />
                  </div>
                  <div className= "form-group" >
                      <input type= "submit"  
                        value= "更新反馈"  
                        className= "btn btn-primary" />
                        </div>
                    </form>
                </div>
            )
          }
         }
            