import React from "react";
import Info1 from "./Info1.jsx"
import Info2 from "./Info2.jsx"
import Info3 from "./Info3.jsx"
import Logo from "./Logo.jsx"

function App() {
    return (
        <div>
          <div className="row0">
            <Logo />

            <div className="header-right">
              <Info1
                thiscolor="#e41e2a"
                value="731"
                name="MALWARE"/>
              <Info1
                thiscolor="#e8515a"
                value="1"
                name="MALICIOUS"/>
              <Info1
                thiscolor="#623fe2"
                value="85,960"
                name="SUSPICIOUS"/>
              <Info1
                thiscolor="#098076"
                value="140"
                name="BITCOIN NODE"/>
              <Info1
                thiscolor="#86076a"
                value="139"
                name="ZOMBIE PC"/>
            </div>
          </div>

          <div className="row0-1">
            <button className="button-Filter">Filter</button>
          </div>

          <div className="row1">
            <Info2
              chartName="chart0"
              title="Time Alert"/>
            <Info2
              chartName="chart1"
              title="Top Ten Malware"/>
            <Info2
              chartName="chart2"
              title="Top Ten IP Address"/>
          </div>

          <div className="row2">
            <Info3
              chartName="chart3"
              title="Alert By Department"/>
            <Info3
              chartName="chart4"
              title="Total PC By Department"/>
          </div>
        </div>
      );
}

export default App;
