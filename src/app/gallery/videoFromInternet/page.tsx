import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';
import React from 'react';

export default async function VideoFromInternetGalleryPage() {
  const items = await getLoftData('internet-videos');
  return <GalleryPage items={items} />;
}
