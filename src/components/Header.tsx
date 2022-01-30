import * as React from 'react';
import { Link } from 'gatsby';
import { FC } from 'react';

type HeaderProps = {
  siteTitle?: string;
};

const Header: FC<HeaderProps> = ({ siteTitle = '' }) => (
  <header
    style={{
      background: `#653d4a`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;