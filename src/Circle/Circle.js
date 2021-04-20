import React from 'react';
import css from './Circle.css';

export function Circle() {
  return (
    <>
      <style>{`${css}`}</style>
      <div className="lds-circle">
        <div></div>
      </div>
    </>
  );
}
