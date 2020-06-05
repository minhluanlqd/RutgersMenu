import React from "react";
import logo from "../../assets/images/rutgersLogo.png";
import "./header.styles.scss";

export const Header = () => (
  <div>
    <nav className="nav db dt-l w-100 border-box pa3 ph5-l">
      <img
        src={logo}
        className="dib w2 h2 br-100"
        alt="Site Name"
      />

      <a
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l options"
        href="#"
        title="Home"
      >
        Busch
      </a>
      <a
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l options"
        href="#"
        title="How it Works"
      >
        College Ave
      </a>
      <a
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l options"
        href="#"
        title="Blog"
      >
        Livingston
      </a>
      <a
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l options"
        href="#"
        title="Press"
      >
        Cook Douglass
      </a>
    </nav>
  </div>
);
