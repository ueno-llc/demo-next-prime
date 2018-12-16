import React from 'react';
import s from './Cta.scss';

export const Cta = ({ children }) => (
  <div className={s.cta}>
    <div className={s.cta__container}>
      {children}
    </div>
  </div>
);
