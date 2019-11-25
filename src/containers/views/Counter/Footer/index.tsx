import React from 'react';
const Footer = () => (
  <p>
    show: 
    {' '}
    <div filter="SHOW_ALL">
      All
    </div>
    {', '}
    <div filter="SHOW_ACTIVE">
      ACTIVE
    </div>
    {', '}
    <div filter="SHOW_COMPLETED">
      Completed
    </div>
    {', '}
  </p>
)

export default Footer;
