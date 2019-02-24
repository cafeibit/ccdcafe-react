// manageFeedback.js 

import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class manageFeedback extends Component  {

  constructor (props) {
      super (props);
      this.state = { feedback : []};
   }
   componentDidMount(){
     axios.get( '/api/feedback/' )
       .then(response => {
          this.setState({ feedback : response.data });
       })
       .catch( function (error) {
          console.log(error);
       })
   }
   tabRow(){
      return this.state.feedback.map( function (object, i){
          return  <TableRow obj = {object} key = {i} />;
     });
   }

   render() {
     return (
       <div >
         <h3 align = "center" >反馈列表</h3>
         <table className = "table table-striped" style = {{ marginTop: 20 }}>
           <thead>
             <tr>
               <th>反馈名称</th>
               <th>反馈邮件</th>
               <th>反馈城市</th>
               <th>反馈电话</th>
               <th>反馈信息</th>
             </ tr >
           </ thead >
           < tbody >
             { this.tabRow() }
           </ tbody >
         </ table >
       </ div >
            );
   }
 } 