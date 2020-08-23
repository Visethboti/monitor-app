import React from "react";

function Info3(prop){
    return (
        <div className="info3">
        <h3>{prop.title}</h3>
          <div className="info3-graph">
            <div id={prop.chartName}></div>
          </div>
        </div>
      );
}

export default Info3;
