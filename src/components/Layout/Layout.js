import React from 'react';

export const Layout = (props) => {
  return (
    <div>
      <div>{props.header}</div>
      <div className="container">{props.menu}</div>
      <div className="container">{props.content}</div>
      <div>{props.footer}</div>
    </div>
  );
};