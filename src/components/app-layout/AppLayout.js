import React from 'react';
import '../../styles/fonts.scss';
import s from './AppLayout.scss';

export const AppLayout = ({ children }) => (
  <div className={s.layout}>
    {children}
  </div>
);
