import { md5 } from 'js-md5';
import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';

function Democracy() {
  const [ markdown, setMarkdown ] = useState('');
  const [ hash, setHash ] = useState('');

  useEffect(() => {
    async function loadMarkdown() {
      try {
        const response = await fetch('/assets/democracy.md');
        if (!response.ok) {
          throw new Error(`Failed to fetch Democracy.md: ${response.status}`);
        }
        const text = await response.text();
        setHash(md5(text));
        setMarkdown(text);
      } catch (error) {
        console.error('Error loading Democracy.md:', error);
      }
    }

    loadMarkdown();
  }, []);

  return (
    <div className="page">
      <img src="/assets/democracy_00018_.png" alt="Logo" />
      <h1>Emergent Democracy</h1>
      <Markdown>{markdown}</Markdown>
      <p><b>Hash:</b> {hash}</p>
    </div>
  );
}

export default Democracy;