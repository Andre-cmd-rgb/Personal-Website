"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { marked } from 'marked';
import { useRandomQuote } from '@/components/Quotes'; // Import our new custom hook from its new location
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [aboutMeContent, setAboutMeContent] = useState('<p>Loading bio...</p>');
  const randomQuote = useRandomQuote(); // The logic is still clean and encapsulated

  // useEffect for fetching "About Me" markdown
  useEffect(() => {
    fetch('/about/about-me.md')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.text();
      })
      .then(text => setAboutMeContent(marked.parse(text)))
      .catch(err => {
        console.error("Failed to load about-me.md:", err);
        setAboutMeContent('<p>Error loading bio.</p>');
      });
  }, []);

  return (
    <>
      <Header />

      <section className="section">
        <h2>Navigation</h2>
        <ul>
          <li><Link href="/linktree">Link Tree</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/countdown">Countdown to 2026</Link></li>
        </ul>
      </section>

      <section className="section">
        <div dangerouslySetInnerHTML={{ __html: aboutMeContent }} />
      </section>

      <section className="section">
        <h2>Quote</h2>
        <div id="random-thought">
            <p style={{fontStyle: 'italic', lineHeight: '1.6'}}>"{randomQuote.content}"</p>
            {randomQuote.author && (<p style={{textAlign: 'right', color: '#888888', marginTop: '1.5rem'}}>— {randomQuote.author}</p>)}
        </div>
      </section>
      
      <Footer />
    </>
  );
}