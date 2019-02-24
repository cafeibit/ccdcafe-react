import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, MDBRow, MDBCol, MDBBtn, Card, CardBody, CardImage, CardTitle, CardText, Fa } from 'mdbreact';
import CafeHouseMap from './CafehouseMap';
import CafeHouseRevview from './CafehouseReview';
import Post from '../../pages/Post';
import { logoutUser } from '../../actions/auth';

class CafehouseInfo extends React.Component {

  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
}

  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    const {isAuthenticated, user} = this.props.auth;

    const authLinks = (
      <div>
        <NavLink to="/login"><Fa icon="sign-in-alt" fixed /> 会员登录</NavLink>
            <a href="/logout" className="nav-link" onClick={this.onLogout.bind(this)}>
                <img src={user.avatar} alt={user.name} title={user.name}
                    className="rounded-circle"
                    style={{ width: '25px', marginRight: '5px'}} />
                        退出
            </a>
      </div>
    )
  const guestLinks = (
        <NavLink to="/register"><Fa icon="sign-in-alt" fixed /> 会员注册</NavLink>
  )

    return (
      <MDBRow>
      <MDBCol size="4">
        <Card style={{ width: "22rem" }}>
        <CardBody>
        <CardTitle>西安原岩咖啡馆</CardTitle>
          <CardImage
            className="img-fluid"
            src="./imgs/cf1.jpg"
            waves
          />
            <CardTitle>咖啡馆信息</CardTitle>
            <div className = "container" >
            <div className = "row" >
              <div className = "col-md-6" >
              {isAuthenticated ? authLinks : guestLinks}
                <Post />
              </div >
            </div >
          </div >
            <CardText>
            <p>地址
            营业时间
            每周二到周日</p>
            </CardText>
            <div>
            <CafeHouseMap />
            </div>
            <CardText>
          <a href='/coffeehouse'> <MDBBtn color="primary" type="submit">更多咖啡馆！</MDBBtn></a>
           </CardText>
          </CardBody>
        </Card>
      </MDBCol>

      <MDBCol size="4">
      <Card style={{ width: "22rem" }}>
          
          <CardBody>
            <CardTitle>中咖道咖啡庄园 - 精品咖啡</CardTitle>
            <CardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            waves
          />
          <CardText>
          <a href='/coffeefarm'> <MDBBtn color="primary" type="submit">更多咖啡庄园！</MDBBtn></a>
           </CardText>
          </CardBody>
        </Card>
        </MDBCol>
      <MDBCol size="4">
        <Card style={{ width: "22rem" }}>
          <CardBody>
            <CardTitle>请您留下对我们的任何建议！</CardTitle>
            <CafeHouseRevview />
          </CardBody>
        </Card>
      </MDBCol>
    </MDBRow>
    )
  }
}

CafehouseInfo.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default (connect(mapStateToProps, { logoutUser })(CafehouseInfo));