import * as React from 'react';
import Layout from '../components/Layout';
import background from '../images/pastelshapes2.jpg';

const pageStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: 40,
  margin: 0,
  textAlign: 'center'
};

const linkStyles = {
  color: '#334556',
  fontWeight: 600,
  fontSize: 18,
  margin: '0 0 0 5px'
};

const BlogPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <p>
          <a
            target='_blank'
            style={linkStyles}
            href='https://csabaeszter.wordpress.com/'
            rel='noreferrer'
          >
            Blog megtekintése eredeti oldalon
          </a>
        </p>
        <iframe
          style={{ width: '80vw', height: '80vh' }}
          title='blog'
          src='https://csabaeszter.wordpress.com/'
        />
      </main>
    </Layout>
  );
};

export default BlogPage;
