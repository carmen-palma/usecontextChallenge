import React, { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';

function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={`button ${theme}`} onClick={toggleTheme}>
      Cambiar Tema
    </button>
  );
}

export default Button;