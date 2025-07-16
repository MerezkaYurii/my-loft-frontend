'use client';

import React from 'react';
import ReactLoading from 'react-loading';

interface LoaderProps {
  height?: number;
  width?: number;
  color?: string;
  fullScreen?: boolean;
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({
  height = 50,
  width = 50,
  color = 'blue',
  fullScreen = true,
  message,
}) => {
  const style: React.CSSProperties = fullScreen
    ? {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 9999,
        position: 'fixed',
        top: 0,
        left: 0,
      }
    : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      };

  return (
    <div style={style}>
      <ReactLoading type="spin" color={color} height={height} width={width} />
      {message && (
        <p style={{ marginTop: '1rem', color: '#ccc', fontSize: '0.9rem' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Loader;
