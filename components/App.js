import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { MDBContainer } from "mdbreact";
import { withRouter } from 'react-router-dom';
import Loader from './Loader';
import Footer from './Footer';
import NavPage from './NavPage';
import ErrorMessage from './error/Error';
//import Home from '../pages/Home';
//import Login from '../pages/Login';
//import Register from './Register';
//import "./App.css";
/**
 * The app component serves as a root for the project and renders either children,
 * the error state, or a loading state
 * @method App
 * @module ccdcafe/components
 */
class App extends Component {
  componentDidMount() {
      // Remove the initial state that was embedded with the intial HTML sent by the server
      const embeddedState = document.getElementById('initialState');
      if (embeddedState) {
          embeddedState.remove();
      }
  }
  render() {
    if (this.props.error) {
      return (
              <div className="app">
                  <ErrorMessage error={this.props.error} />
              </div>
          );
      }
      return (
        <div className="app">
          <MDBContainer fluid>
             <NavPage />
             <Footer />

              {this.props.loading ? (
                  <div className="loading">
                      <Loader />
                  </div>
              ) : (
                  this.props.children
              )}
          </MDBContainer> 
        </div>
      );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export const mapStateToProps = state => {
  return {
      error: state.error,
      loading: state.loading
  };
};
export default withRouter(connect(mapStateToProps)(App));