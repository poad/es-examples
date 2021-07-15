import React from 'react';

export default function Button({ children }: React.PropsWithChildren<void> ) {
    return (
      <button
        style={{
          borderRadius: '3px',
          border: '1px solid black',
          color: 'black',
          padding: '0.5em 1em',
          cursor: 'pointer',
          fontSize: '1.1em',
        }}
      >
        {children}
      </button>
    )
  }
