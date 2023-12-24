// Main.js

import React from 'react';
import Markdown from 'react-markdown';

const Main = () => {
  const markdownContent = `# Welcome to My Blog

  This is the main page content. Feel free to explore!`;

  return (
    <div>
      <Markdown>{markdownContent}</Markdown>
    </div>
  );
};

export default Main;
