'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import ExternalFacebookVideo from './ExternalFacebookVideo';
import { getLoftData } from '../api/api';

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
  initialItems: GalleryItem[];
  category: string;
  initialPagination: { page: number; totalPages: number };
};

function extractYouTubeID(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([0-9A-Za-z_-]{11})/,
  );
  return match ? match[1] : null;
}

export default function GalleryPage({
  initialItems,
  category,
  initialPagination,
}: GalleryPageProps) {
  const [items, setItems] = useState<GalleryItem[]>(initialItems ?? []);
  const [page, setPage] = useState<number>(
    Number(initialPagination?.page ?? 1),
  );
  const [totalPages, setTotalPages] = useState<number>(
    initialPagination?.totalPages ?? 1,
  );

  const [loading, setLoading] = useState(false);

  const getFolderName = (item: GalleryItem) => {
    if (item.category === 'my-photos') return 'photo';
    if (item.category === 'internet-photos') return 'photoFromInternet';
    if (item.category === 'my-videos') return 'video';
    if (item.category === 'internet-videos') return 'videoFromInternet';
    if (item.category === 'my-equipment') return 'myEquipment';
    if (item.category === 'how-to') return 'howToDoItCorrectly';
    return 'unknown';
  };

  const handleLoadMore = async () => {
    if (page >= totalPages) return;
    setLoading(true);
    try {
      const nextPage = page + 1;
      const { items: newItems, pagination } = await getLoftData(
        category,
        nextPage,
        8,
      );
      setItems((prev) => [...prev, ...newItems]);
      setPage(Number(pagination.page)); // 👈 гарантируем число
      setTotalPages(Number(pagination.totalPages));
    } catch (error) {
      console.error('Ошибка загрузки:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const isYouTube =
            item.thumbnail.includes('youtube.com') ||
            item.thumbnail.includes('youtu.be');
          const isFacebook = item.thumbnail.includes('facebook.com');
          const isDirectVideo =
            item.thumbnail.endsWith('.mp4') ||
            item.thumbnail.includes('cloudinary.com');

          const folder = getFolderName(item);
          const linkHref = `/gallery/${folder}/${item._id}`;

          const content = (
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 h-72 flex flex-col">
              {item.type === 'photo' ? (
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              ) : isDirectVideo ? (
                <video
                  src={item.thumbnail}
                  className="w-full h-48 object-cover"
                  muted
                  autoPlay
                  loop
                  playsInline
                />
              ) : isYouTube ? (
                <Image
                  src={`https://img.youtube.com/vi/${extractYouTubeID(
                    item.thumbnail || '',
                  )}/hqdefault.jpg`}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              ) : isFacebook ? (
                <ExternalFacebookVideo url={item.thumbnail} />
              ) : (
                <div className="w-full h-48 bg-gray-800 text-white flex items-center justify-center">
                  Unknown video format
                </div>
              )}

              <div className="p-4">
                <h2 className="text-xl text-gray-300 font-bold mb-2">
                  {item.title}
                </h2>
                {/* <p className="text-gray-300 text-sm">{item.description}</p> */}
              </div>
            </div>
          );

          // Оборачиваем в ссылку всё, кроме Facebook
          return isFacebook ? (
            <div key={item._id}>{content}</div>
          ) : (
            <Link href={linkHref} key={item._id}>
              {content}
            </Link>
          );
        })}
      </div>
      {page < totalPages && (
        <div className="mt-8 text-center">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="px-6 py-3 bg-gray-900 text-white rounded-2xl disabled:opacity-50 hover:bg-blue-900 transition-colors duration-800"
          >
            {loading ? ' Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}
