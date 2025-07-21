import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';
import React from 'react';

export default async function VideoGalleryPage() {
  const items = await getLoftData('how-to');
  return <GalleryPage items={items} />;
}
