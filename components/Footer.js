import React from "react";
import { Container, Footer } from "mdbreact";

class FooterPage extends React.Component {
   render() {
     return (
       <Footer color="default-color" className="font-small pt-4 mt-4">
         <div className="footer-copyright text-center py-3">
           <Container fluid>
             &copy; {new Date().getFullYear()} {"北京中咖道咖啡文化传播有限公司"}
           </Container>
         </div>
       </Footer>
    );
  }
}

export default FooterPage;