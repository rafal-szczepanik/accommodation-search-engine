import React, {useContext} from 'react';
import {ThemeContext} from "../../../context/themeContext";


export const LoadingIcon = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="d-flex justify-content-center">
      <div className={`spinner-border text-${theme.theme}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};