'use client';

import React from 'react';

type Props = {
  url: string;
};

export default function ExternalFacebookVideo({ url }: Props) {
  const handleOpen = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full h-48 bg-gray-800 text-white flex flex-col justify-center items-center text-center px-4">
      <p className="mb-2">Facebook videos cannot be embedded.</p>
      <button
        onClick={handleOpen}
        className="text-blue-300 underline hover:text-blue-900 font-bold text-xl"
      >
        Open in a new tab
      </button>
    </div>
  );
}
