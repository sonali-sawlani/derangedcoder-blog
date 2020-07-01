import React from 'react';

import { rhythm } from 'utils/typography';

function Footer() {
  return (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1),
        textAlign: 'center',
      }}
    >
      <p>
        Made of{' '}
        <a
          href="https://github.com/sonali-20/derangedcoder-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          e-blog
        </a>
      </p>
    </footer>
  );
}

export default Footer;
