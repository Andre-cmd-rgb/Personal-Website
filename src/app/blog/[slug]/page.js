import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// This function also runs on the server.
function getPost(slug) {
  const postsDirectory = path.join(process.cwd(), 'public/posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);

  // Check if the markdown file exists.
  if (!fs.existsSync(filePath)) {
    return null; // We'll use this to trigger a 404.
  }

  const markdown = fs.readFileSync(filePath, 'utf8');
  // Convert the markdown content to HTML.
  const content = marked.parse(markdown);

  return { content };
}

export default function PostPage({ params }) {
  const { slug } = params;
  const post = getPost(slug);

  // If getPost returns null, Next.js will render the nearest not-found.js page.
  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <section className="section">
        <Link href="/blog" className="back-button">
          ← Back to Blog List
        </Link>

        <div
          style={{ marginTop: '1.5rem' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
      <Footer />
    </>
  );
}