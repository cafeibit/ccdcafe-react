import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

class CafehouseReview extends React.Component {
  state = {
    name: "爱咖啡",
    email: "xxx@xxx.xxx",
    city: "西安",
    phonee: "",
    message: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
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
                value={this.state.name}
                name="name"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
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
                value={this.state.email}
                onChange={this.changeHandler}
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
                value={this.state.city}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="city"
                placeholder="City"
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
                value={this.state.phone}
                onChange={this.changeHandler}
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
                value={this.state.message}
                name="message"
                icon="pencil-alt"
                rows="3"
                onChange={this.changeHandler}
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

export default CafehouseReview;