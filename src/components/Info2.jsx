import React from "react";

function Info2(prop) {
    return (
        <div className="info2">
        <h3>{prop.title}</h3>
          <div className="info2-graph">

            <div className={prop.chartName} id={prop.chartName}></div>
          </div>
        </div>
      );
}

export default Info2;
