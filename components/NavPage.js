import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, withRouter,  Route } from 'react-router-dom';
import { logoutUser } from '../actions/auth';
import Home from '../pages/Home';
import CoffeeFarm from '../pages/CoffeeFarm';
import CoffeeHouse from '../pages/CoffeeHouse';
import CoffeeRoaster from '../pages/CoffeeRoaster';
import CoffeeIot from '../pages/CoffeeIot';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ContactPage from '../pages/ContactPage';
import Post from '../pages/Post';
import NoMatch from '../pages/404';
import { 
  Navbar, 
  NavbarBrand, 
  NavbarNav, 
  NavItem, 
  NavLink, 
  NavbarToggler, 
  Collapse,  
  Dropdown, 
  DropdownToggle, 
  DropdownMenu,  
  DropdownItem, 
  MDBCol, MDBIcon,
  Fa
  //MDBIcon
        } from "mdbreact";
        
class NavbarPage extends React.Component {

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
      <div className="App">
    <MDBCol md="6">
      <form className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="站内搜索" aria-label="Search" />
      </form>
    </MDBCol>
          <Navbar color="default-color" dark expand="md" style={{marginTop: "20px"}} fixed-top>
            <NavbarBrand><strong className="white-text">CCD</strong>
            </NavbarBrand>
          <NavbarToggler  onClick={this.toggleCollapse} />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="/"><Fa icon="home" fixed /> 首页</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/coffeefarm"><Fa icon="tree" fixed /> 咖啡庄园</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/coffeehouse"><Fa icon="coffee" fixed /> 咖啡品馆</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/coffeeroaster"><Fa icon="user" fixed /> 咖啡烘焙</NavLink>
              </NavItem>
              <NavItem>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle  nav caret>
                    <div className="d-none d-md-inline"><Fa fab icon="shopware" /> 咖啡网联</div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default"right>
                    <DropdownItem href="/post">咖啡论坛</DropdownItem>
                    <DropdownItem href="#!">咖啡物联</DropdownItem>
                    <DropdownItem href="https://weidian.com/?userid=986173710&infoType=1">咖啡网店</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <NavLink className="waves-effect waves-light" to="#!"><Fa fab icon="weibo" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="waves-effect waves-light" to="#!"><Fa fab icon="weixin" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="waves-effect waves-light" to="/feedback"><Fa icon="envelope" /></NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret><Fa icon="user" /></DropdownToggle>
                  <DropdownMenu className="dropdown-default" right>
                    <DropdownItem> {isAuthenticated ? authLinks : guestLinks}</DropdownItem>
                    <DropdownItem href="#!">设置</DropdownItem>
                    <DropdownItem href="#!">订单</DropdownItem>
                    <DropdownItem href="#!">退出</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
      </Navbar>
      
      <Switch>
               <Route exact path='/' component={Home}/>
               <Route path='/coffeefarm' component={CoffeeFarm}/>
               <Route path='/coffeehouse' component={CoffeeHouse}/>
               <Route path='/coffeeroaster' component={CoffeeRoaster}/>
               <Route path='/coffeeriot' component={CoffeeIot}/>
               <Route path='/feedback' component={ContactPage}/>
               <Route path='/login' component={LoginPage}/>
               <Route path='/register' component={RegisterPage}/>
               <Route path='/post' component={Post}/>
               <Route component={NoMatch}/>
            </Switch>
    
    </div>
    );
  }
}

NavbarPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default withRouter(connect(mapStateToProps, { logoutUser })(NavbarPage));
