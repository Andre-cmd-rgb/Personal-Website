import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// This function runs on the server when the page is built or requested.
function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'public/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter(filename => filename.endsWith('.md')) // Ensure we only read markdown files
    .map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      // A simple way to get the title is to look for the first H1 header in the markdown.
      // Example: The line "# My Post Title" will be captured.
      const titleMatch = fileContents.match(/^# (.*)/);
      const title = titleMatch ? titleMatch[1] : 'Untitled Post';

      // The slug is the filename without the .md extension.
      const slug = filename.replace(/\.md$/, '');

      return { slug, title };
    });

  return posts;
}

export default function BlogIndexPage() {
  const posts = getPosts();

  return (
    <>
      <Header />
      <section className="section">
        <h2>✍️ Blog</h2>
        {posts.length > 0 ? (
          <ul>
            {posts.map(post => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No blog posts found.</p>
        )}
      </section>
      <Footer />
    </>
  );
}