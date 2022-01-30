import * as React from 'react';
import { Link } from 'gatsby';
import { FC } from 'react';
import Navbar from './Navbar';

type HeaderProps = {
  siteTitle?: string;
};

const Header: FC<HeaderProps> = ({ siteTitle = '' }) => (
  <header
    style={{
      background: '#653d4a',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navbar />
    </div>
  </header>
);

export default Header;
