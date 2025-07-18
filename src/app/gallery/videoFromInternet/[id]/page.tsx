// app/gallery/video/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';

import DetailPage from '@/app/components/DetailePage';
import { videoItems } from '@/app/components/videoItems';

export default function VideoDetailPage() {
  const { id } = useParams();
  const item = videoItems.find((video) => video.id === Number(id));

  if (!item) return <p className="text-center text-white">Video not found</p>;

  return <DetailPage item={item} />;
}
