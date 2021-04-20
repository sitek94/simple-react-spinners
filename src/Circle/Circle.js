import React from 'react';
import css from './Circle.css';

const styles = `${css}`;

export function Circle() {
  return (
    <>
      <styles>{styles}</styles>
      <div className="lds-circle">
        <div></div>
      </div>
    </>
  );
}
