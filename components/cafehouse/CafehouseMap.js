import React from "react";
import { Row } from "mdbreact";
import DisplayMap from '../map/DisplayMap'

class CafehouseMap extends React.Component {

  render() {

     return (
      <div>
      <Row >
        <h2>咖啡馆地图</h2>
        <DisplayMap />
      </Row>
      </div>
        )
    }
}
export default CafehouseMap;