import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import axios from 'axios' ;
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { submitFeedback } from '../actions/feedback'

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
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
    };
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
  
   onSubmitHandler(e) {
     e.preventDefault();
     const feedback = {
      feedback_name: this.state.feedback_name,
      feedback_email: this.state.feedback_email,
      feedback_city: this.state.feedback_city,
      feedback_phone: this.state.feedback_phone,
      feedback_message: this.state.feedback_message
  }
  //axios.post( 'http://localhost:5000/feedback/add' , feedback)
  //.then(res => console.log(res.data ));
  submitFeedback(feedback, this.props.history);
   }

  render() {
    return (
      <div>
        <h5>请您留下对我们的任何建议！</h5>
        <form
          className="needs-validation"
          onSubmit={this.onSubmitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                姓名
              </label>
              <input
                name="name"
                type="text"
                id="defaultFormRegisterNameEx"
                value={this.state.feeback_name}
                onChange={this.onChangeFeedbackName}
                className="form-control"
                placeholder="姓名"
                required
              />
              <div className="valid-feedback">看上去不错！</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Email
              </label>
              <input
                value={this.state.feeback_email}
                onChange={this.onChangeFeedbackEmail}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="电子邮件"
              />
              <small id="emailHelp" className="form-text text-muted">
                请留下您的邮件地址！
              </small>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                城市
              </label>
              <input
                value={this.state.feeback_city}
                onChange={this.onChangeFeedbackCity}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="city"
                placeholder="城市"
                required
              />
              <div className="invalid-feedback">
                请提供有效的城市名称。
              </div>
              <div className="valid-feedback">看上去不错。</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                联系电话
              </label>
              <input
                value={this.state.feedback_phone}
                onChange={this.onChangeFeedbackPhone}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="phone"
                placeholder="123456789"
                required
              />
              <div className="invalid-feedback">
                请提供一个有效联系电话。
              </div>
              <div className="valid-feedback">看上去不错。</div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
             <MDBCol md="12" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                留言
              </label>
              <input
                name="message"
                icon="pencil-alt"
                rows="3"
                value={this.state.feedback_message}
                onChange={this.onChangeFeedbackMessage}
                type="textarea"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder=""请留言
                required
              />
              <div className="valid-feedback">看上去不错！</div>
            </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4" className="mb-3">
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                同意相关条款
              </label>
              <div className="invalid-feedback">
                请同意后提交建议。
              </div>
            </div>
          </MDBCol>
          <MDBBtn color="primary" type="submit">
            提交反馈！
          </MDBBtn>
          </MDBRow>
        </form>
      </div>
    );
  }
}

ContactPage.propTypes = {
  submitFeedback: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  feedback_name: state.feedback_name,
  feedback_email: state.feedback_email,
  feedback_city: state.feedback_city,
  feedback_phone: state.feedback_phone,
  feedback_message: state.feedback_message
})

export  default connect(mapStateToProps, { submitFeedback })(ContactPage)