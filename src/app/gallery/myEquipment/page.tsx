import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';
import React from 'react';

export default async function myEqipmentGalleryPage() {
  const { items, pagination } = await getLoftData('my-equipment');
  return (
    <GalleryPage
      initialItems={items}
      initialPagination={pagination}
      category="my-equipment"
    />
  );
}
