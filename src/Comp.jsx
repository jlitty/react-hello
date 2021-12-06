import React, { useContext } from 'react';
import { ThemeContext } from './index.js';
export default () => {
  const context = useContext(ThemeContext);
  return (
    <h1
      style={{
        backgroundColor: context.backgroundColor,
        color: context.color,
        fontFamily: context.fontFamily,
        padding: context.padding,
      }}
    >
      Hello World
    </h1>
  );
};
