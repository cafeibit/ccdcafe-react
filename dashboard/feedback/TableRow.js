// TableRow.js 

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor (props) {
        super (props);
        this.delete = this.delete.bind( this );
   }
    delete () {
       axios.get( '/api/feedback/delete/' + this.props.obj._id)
           .then( console.log( 'Deleted' ))
           .catch(err => console.log(err))
   }
 render() {
    return  (
       <tr>
         <td>
           {this.props.obj.feedback_name}
           </td>
         <td>
           {this.props.obj.feedback_email}
         </td>
         <td>
           {this.props.obj.feedback_city}
         </td>
         <td>
           {this.props.obj.feedback_phone}
         </td>
         <td>
           {this.props.obj.feedback_message}
         </td>
         <td>
           <Link to = { "/edit/"+ this.props.obj._id } className = "btn btn-primary" >编辑</ Link >
         </td>
         <td>
           <button onClick = {this.delete} className = "btn btn-danger" >删除</ button >
         </td>
       </tr>
   );
 }
}

export   default  TableRow; 