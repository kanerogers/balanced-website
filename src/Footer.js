import React from 'react';
import './Footer.css';
import footer_icon from './footer_icon.png';

export default () => (
  <div id="Footer_Container">
    <div id="Footer_InnerContainer">
      <div
        style={{justifyContent: 'flex-start'}}
        className="Footer_SectionContainer"
      >
        <i className="fa fa-envelope Footer_LeftIcon" />
        <a href="mailto:info@balanced.org">
          <span className="Footer_Text">info@balanced.org</span>
        </a>
        <i className="fa fa-phone Footer_LeftIcon" />
        <span>816.945.4037</span>
      </div>
      <div
        style={{justifyContent: 'center'}}
        className="Footer_SectionContainer"
      >
        <img alt="Footer Icon" src={footer_icon} />
      </div>
      <div
        className="Footer_SectionContainer"
        style={{justifyContent: 'flex-end'}}
      >
        <a href="https://www.facebook.com/GetBalancedNow/" target="_blank">
          <i className="fa fa-facebook Footer_RightIcon" />
        </a>
        <a href="https://twitter.com/getbalanced_now" target="_blank">
          <i className="fa fa-twitter Footer_RightIcon" />
        </a>
        <a href="https://www.instagram.com/getbalancednow/" target="_blank">
          <i className="fa fa-instagram Footer_RightIcon" />
        </a>
      </div>
    </div>
  </div>
);
