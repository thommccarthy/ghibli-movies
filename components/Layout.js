import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Link href='/'>
        <img
          alt='Studio Ghibli Logo'
          className={styles.logo}
          src={`/images/ghibli-logo.png`}
        />
      </Link>
      <main>{children}</main>
      <div>
        <p className={styles.footerText}>
          2021 tribute by{' '}
          <a href='https://thommccarthy.dev' target='_blank' rel='noreferrer'>
            Thom McCarthy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Layout;
