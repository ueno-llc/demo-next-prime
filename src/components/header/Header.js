import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import s from './Header.scss';

// import { Link } from 'react-router-dom';
// import UenoLogoSvg from 'assets/images/ueno-logo.svg';

export const Header = ({ children }) => (
  <header className={s.header}>
    <div className={s.header__container}>
      <div className={s.header__content}>
        <Link href="/" prefetch>
          <a className={s.header__logo}>
            <Logo className={s.header__logoSvg} />
          </a>
        </Link>
        <div className={s.header__row}>
          <div className={s.header__navigation}>
            {children}
          </div>
        </div>
      </div>
    </div>
  </header>
);
