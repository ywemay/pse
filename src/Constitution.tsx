import { md5 } from 'js-md5';
import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';

function Constitution() {
  const [markdown, setMarkdown] = useState('');
  const [ hash, setHash ] = useState('');

  useEffect(() => {
    async function loadMarkdown() {
      try {
        const response = await fetch('/assets/constitution.md');
        if (!response.ok) {
          throw new Error(`Failed to fetch constitution.md: ${response.status}`);
        }
        const text = await response.text();
        setHash(md5(text));
        setMarkdown(text);
      } catch (error) {
        console.error('Error loading constitution.md:', error);
      }
    }

    loadMarkdown();
  }, []);

  return (
    <div className="page">
      <Markdown>{markdown}</Markdown>
      <p><b>Hash:</b> {hash}</p>
    </div>
  );
}

export default Constitution;