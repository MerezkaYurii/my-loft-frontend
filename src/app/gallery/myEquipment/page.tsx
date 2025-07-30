import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';
import React from 'react';

export default async function myEqipmentGalleryPage() {
  const items = await getLoftData('my-equipment');
  return <GalleryPage items={items} />;
}
