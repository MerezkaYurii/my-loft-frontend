import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export type GalleryItem = {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  link?: string;
  type: 'video' | 'photo';
  category: string;
};

type GalleryPageProps = {
  items: GalleryItem[];
};

export default function GalleryPage({ items }: GalleryPageProps) {
  const getFolderName = (item: GalleryItem) => {
    if (item.category === 'my-photos') return 'photo';
    if (item.category === 'internet-photos') return 'photoFromInternet';
    if (item.category === 'my-videos') return 'video';
    if (item.category === 'internet-videos') return 'videoFromInternet';
    if (item.category === 'my-equipment') return 'myEquipment';
    if (item.category === 'how-to') return 'howToDoItCorrectly';
    return 'unknown';
  };
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            href={`/gallery/${getFolderName(item)}/${item._id}`}
            key={item._id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 "
          >
            {item.type === 'photo' ? (
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            ) : (
              <video
                src={item.thumbnail}
                className="w-full h-48 object-cover"
                muted
                autoPlay
                loop
                playsInline
              />
            )}

            <div className="p-4">
              <h2 className="text-xl text-gray-300 font-bold mb-2">
                {item.title}
              </h2>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
