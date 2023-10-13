import React from 'react';

function Menu() {
  const menuStyle = {
    listStyleType: 'none',
    display: 'flex',
  };

  const listItemStyle = {
    margin: '0 10px',
  };

  return (
    <nav>
      <ul style={menuStyle}>
        <li style={listItemStyle}><a href="/">Home</a></li>
        <li style={listItemStyle}><a href="/about">About Us</a></li>
        <li style={listItemStyle}><a href="/contact">Contact</a></li>
        <li style={listItemStyle}><a href="/form">Contact Form</a></li>
      </ul>
    </nav>
  );
}

export default Menu;