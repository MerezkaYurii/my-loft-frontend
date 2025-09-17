import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';
import React from 'react';

export default async function howToDoItGalleryPage() {
  const { items, pagination } = await getLoftData('how-to');
  return (
    <GalleryPage
      initialItems={items}
      initialPagination={pagination}
      category="how-to"
    />
  );
}
