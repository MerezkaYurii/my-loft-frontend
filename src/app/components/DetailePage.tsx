'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export type GalleryItem = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  type: 'photo' | 'video';
};

type DetailPageProps = {
  item: GalleryItem;
};

export default function DetailPage({ item }: DetailPageProps) {
  const router = useRouter();

  const handleBackdropClick = () => {
    router.back();
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className=" flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div
        className="max-w-4xl mx-auto px-6 py-12 text-center"
        onClick={stopPropagation}
      >
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700 bg-gray-900">
          {item.type === 'video' ? (
            <video
              controls
              className="w-full max-h-[600px] object-cover"
              poster={item.thumbnail}
            >
              <source
                src={item.thumbnail.replace('preview', 'video')}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          )}
          <div className="p-6">
            <h1 className="text-3xl text-white font-bold mb-4">{item.title}</h1>
            <p className="text-gray-300 text-lg">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
