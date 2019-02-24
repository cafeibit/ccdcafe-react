import React, { Component } from 'react' ;
import CreatePost from '../components/post/CreatePost' ;
import PostList from '../components/post/PostList' ;

const  stylesApp = {
  marginTop : 40 
}

class Post extends Component {
 render() {
    return  (
     <div className = "container">
       <div className = "row" style = { stylesApp }>
         <div className = "col-md-6">
           <CreatePost />
         </div>
         <div className = "col-md-6" >
           <PostList />
         </div>
       </div>
     </div>
   );
 }
}

export default Post; 