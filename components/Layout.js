import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Link href='/'>
        <img className={styles.logo} src={`/images/ghibli-logo.png`} />
      </Link>
      <main>{children}</main>
      <div>
        <p className={styles.footerText}>
          2021 tribute by{' '}
          <a href='https://thommccarthy.dev' target='_blank'>
            Thom McCarthy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Layout;
