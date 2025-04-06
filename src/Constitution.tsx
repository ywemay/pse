import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';

function Constitution() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    async function loadMarkdown() {
      try {
        const response = await fetch('/assets/constitution.md');
        if (!response.ok) {
          throw new Error(`Failed to fetch constitution.md: ${response.status}`);
        }
        const text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error('Error loading constitution.md:', error);
      }
    }

    loadMarkdown();
  }, []);

  return (
    <div className="page">
      <h1>Constitution of Humans of Planet Earth.</h1>

      <p><b>Version 0.0.0</b></p>

      <p>Disclaimer: this version is highly rudimentary and opinionated.</p>
      <Markdown>{markdown}</Markdown>
    </div>
  );
}

export default Constitution;