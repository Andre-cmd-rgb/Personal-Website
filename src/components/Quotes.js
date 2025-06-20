import { useState, useEffect } from 'react';

// This custom hook encapsulates all the logic for fetching a random quote.
// We can call it from any component that needs a quote.
export const useRandomQuote = () => {
  const [quote, setQuote] = useState({
    content: 'Fetching transmission...',
    author: ''
  });

  useEffect(() => {
    let script;
    const callbackName = `jsonpCallback_${Math.random().toString(36).substring(7)}`;

    window[callbackName] = (data) => {
      setQuote({
        content: data.quoteText.trim() || "No quote available.",
        author: data.quoteAuthor.trim() || "Unknown"
      });
      delete window[callbackName];
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };

    script = document.createElement('script');
    script.src = `https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=${callbackName}`;
    script.onerror = () => {
      setQuote({
        content: "Could not retrieve quote.",
        author: "System"
      });
      delete window[callbackName];
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };

    document.body.appendChild(script);

    // Cleanup function to prevent memory leaks
    return () => {
      delete window[callbackName];
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []); // The empty array ensures this runs only once

  return quote;
};