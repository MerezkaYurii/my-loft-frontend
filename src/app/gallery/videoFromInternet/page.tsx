import GalleryPage, { GalleryItem } from '@/app/components/GalleryPage';
import React from 'react';

export const videoItems: GalleryItem[] = [
  {
    id: 1,
    title: ' INTERNET Видео 1',
    description: 'Описание видео 1',
    thumbnail: '/preview/video1.jpeg',
    type: 'video',
  },
  {
    id: 2,
    title: 'INTERNET Видео 2',
    description: 'Описание видео 2',
    thumbnail: '/preview/video2.jpeg',
    type: 'video',
  },
  {
    id: 3,
    title: 'Видео 3',
    description: 'Описание видео 3',
    thumbnail: '/preview/video3.jpeg',
    type: 'video',
  },
  {
    id: 4,
    title: 'Видео 1',
    description: 'Описание видео 1',
    thumbnail: '/preview/video1.jpeg',
    type: 'video',
  },
  {
    id: 5,
    title: 'Видео 2',
    description: 'Описание видео 2',
    thumbnail: '/preview/video2.jpeg',
    type: 'video',
  },
  {
    id: 6,
    title: 'Видео 3',
    description: 'Описание видео 3',
    thumbnail: '/preview/video3.jpeg',
    type: 'video',
  },
];

export default function VideoGalleryPage() {
  return <GalleryPage items={videoItems} />;
}
