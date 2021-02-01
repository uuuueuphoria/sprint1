// Toggle.js
import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return <button onClick={toggleTheme}>Change Theme</button>;
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
