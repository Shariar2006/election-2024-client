import React from 'react';

const ConditionalRander = ({ showContent }) => {
  return (
    <div>
      {showContent ? (
        <p>Content is visible.</p>
      ) : (
        <p>Content is hidden.</p>
      )}
    </div>
  );
};

export default ConditionalRender;