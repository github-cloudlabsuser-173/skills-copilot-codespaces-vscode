
function reverseSentence(sentence) {
  const reversed = sentence.split(' ').reverse().join(' ');
  return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}

const inputSentence = 'Type markdown here';
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence);
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('Type markdown here');

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea value={markdown} onChange={handleMarkdownChange} />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownEditor;
