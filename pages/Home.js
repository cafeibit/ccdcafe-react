import React, { Component } from 'react';
//import { MDBRow, MDBCol, Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import CafehouseInfo from '../components/cafehouse/CafehouseInfo';
//import CafehouseReview from '../components/cafehouse/CafehouseReview';

class Home extends Component {
  render() {
    return (
      <div>
		    <CafehouseInfo />
      </div>
    )
  }
}

export default Home;