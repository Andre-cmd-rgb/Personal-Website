import Link from 'next/link';

// This is a special Next.js file. It automatically handles all 404 errors.
export default function NotFound() {
  return (
    // This container will help us center the content on the page
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 style={{ color: 'var(--neon-blue)', textShadow: '0 0 8px var(--neon-blue)' }}>
        Signal Lost in the Void
      </h2>
      <p style={{ maxWidth: '450px', color: 'var(--text-secondary)' }}>
        The coordinates you entered don't match any known sectors in this universe. The page may have been moved or lost to the cosmic dust.
      </p>
      <Link href="/" className="return-home-button">
        Return to Homepage
      </Link>
    </div>
  );
}