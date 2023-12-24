import React from 'react';
import Markdown from 'react-markdown';

const AboutMe = () => {
  const markdownContent = `# About Me
  
  I'm passionate about blogging and sharing knowledge.`;

  return (
    <div>
      <Markdown>{markdownContent}</Markdown>
    </div>
  );
};

export default AboutMe;
