import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';
import React from 'react';

export default async function VideoFromInternetGalleryPage() {
  const { items, pagination } = await getLoftData('internet-videos');
  return (
    <GalleryPage
      initialItems={items}
      initialPagination={pagination}
      category="internet-videos"
    />
  );
}
