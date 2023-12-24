import React from 'react';
import Markdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-latex';

const Articles = () => {
  var Latex = require('react-latex');

    return (
        <h3>
            <Latex displayMode={true}>$$(3\times 4) \div (5-3)$$</Latex>
        </h3>
    );
};

export default Articles;
