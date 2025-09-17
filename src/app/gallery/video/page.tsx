import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';
import React from 'react';

export default async function VideoGalleryPage() {
  const { items, pagination } = await getLoftData('my-videos');
  return (
    <GalleryPage
      initialItems={items}
      initialPagination={pagination}
      category="my-videos"
    />
  );
}
