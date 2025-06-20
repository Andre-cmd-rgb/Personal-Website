import React from 'react';
import Link from 'next/link'; // 1. Import the Link component from Next.js


const Header = () => {
  const title = "andre-cmd-rgb";
  return (
    <header style={{ textAlign: 'center', margin: '4rem 0' }}>
      {/* 2. Wrap the h1 title with the Link component */}
      <Link href="/" style={{ textDecoration: 'none' }}>
        <h1 className="neon-title">
          {title}
        </h1>
      </Link>
      <p style={{ color: '#888888', marginTop: '1rem', fontSize: '1.1rem' }}>
      This is my website 😅, don’t judge 🙈
      </p>
    </header>
  );
};

export default Header;