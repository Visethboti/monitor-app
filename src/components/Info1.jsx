import React from "react";

function Info1(prop) {
    return (
        <div className="info1" style={{backgroundColor:prop.thiscolor}}>
          <img src="views/logo.png" />
          <h3>{prop.value}</h3>
          <h4>{prop.name}</h4>
        </div>
      );
}

export default Info1;
