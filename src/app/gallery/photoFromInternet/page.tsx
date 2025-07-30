import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';
import React from 'react';

export default async function photoFromInternetGallaryPage() {
  const items = await getLoftData('internet-photos');
  return <GalleryPage items={items} />;
}
