"use client";
import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotesPage() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('/posts/index.json')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Failed to load posts list:", err));
  }, []);

  const loadPostContent = async (file) => {
    setIsLoading(true);
    setSelectedPost(null);
    try {
      const response = await fetch(`/posts/${file}`);
      const markdown = await response.text();
      const content = marked.parse(markdown);
      setSelectedPost({ file, content });
    } catch (error) {
      console.error("Failed to load post content:", error);
      setSelectedPost({ file, content: "<p>Error: Could not load this post.</p>" });
    } finally {
      setIsLoading(false);
    }
  };

  const PostList = () => (
    <section className="section">
      <h2>📝 Blog</h2>
      <ul>
        {posts.map(post => (
          <li key={post.file}>
            <a href="#" onClick={(e) => { e.preventDefault(); loadPostContent(post.file); }}>{post.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );

  const PostContent = () => (
    <section className="section">
      <button className="back-button" onClick={() => setSelectedPost(null)}>← Back to List</button>
      <div style={{ marginTop: '1.5rem' }} dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
    </section>
  );

  return (
    <>
      <Header />
      {isLoading && <p>Loading...</p>}
      {!selectedPost ? <PostList /> : <PostContent />}
      <Footer />
    </>
  );
}