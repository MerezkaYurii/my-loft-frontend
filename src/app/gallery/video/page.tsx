import React from 'react';

const videos = [
  {
    id: 1,
    title: 'Видео 1',
    description: 'Описание видео 1',
    thumbnail: '/preview/video1.jpeg',
  },
  {
    id: 2,
    title: 'Видео 2',
    description: 'Описание видео 2',
    thumbnail: '/preview/video2.jpeg',
  },
  {
    id: 3,
    title: 'Видео 3',
    description: 'Описание видео 3',
    thumbnail: '/preview/video3.jpeg',
  },
];

export default function VideoGallery() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-red-700">
        Відеоархив
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 "
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl text-gray-300 font-bold mb-2">
                {video.title}
              </h2>
              <p className="text-gray-300 text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
