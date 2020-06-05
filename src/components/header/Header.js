import React from "react";
import logo from "../../assets/images/rutgersLogo.png";
import "./header.styles.scss";

export const Header = (props) => (
  <div>
    <nav className="nav db dt-l w-100 border-box pa3 ph5-l">
      <img src={logo} className="dib w2 h2 br-100" alt="Site Name" />

      <div
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l options"
        href="#"
        title="Home"
        onClick={() => {
          props.clicked[0][1](true);
          props.clicked[1][1](false);
          props.clicked[2][1](false);
          props.clicked[3][1](false);
        }}
      >
        Busch
      </div>
      <div
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l options"
        onClick={() => {
          props.clicked[0][1](false);
          props.clicked[1][1](true);
          props.clicked[2][1](false);
          props.clicked[3][1](false);
        }}
      >
        Livingston
      </div>
      <div
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l options"
        onClick={() => {
          props.clicked[0][1](false);
          props.clicked[1][1](false);
          props.clicked[2][1](true);
          props.clicked[3][1](false);
        }}
      >
        College Ave
      </div>
      <div
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l options"
        onClick={() => {
          props.clicked[0][1](false);
          props.clicked[1][1](false);
          props.clicked[2][1](false);
          props.clicked[3][1](true);
        }}
      >
        Cook Douglass
      </div>
    </nav>
  </div>
);
