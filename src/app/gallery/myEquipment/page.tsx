import GalleryPage from '@/app/components/GalleryPage';
import { videoItems } from '@/app/components/videoItems';
import React from 'react';

export default function VideoGalleryPage() {
  return <GalleryPage items={videoItems} />;
}
