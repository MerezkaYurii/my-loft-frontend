'use client';
import { useParams } from 'next/navigation';

import DetailPage from '@/app/components/DetailePage';
import { photoItems } from '@/app/components/photoItems';

export default function PhotoDetailPage() {
  const params = useParams();
  const id = params?.id;
  const item = photoItems.find((photo) => photo.id === String(id));

  if (!item) return <p className="text-center text-white">Photo not found</p>;

  return <DetailPage item={item} />;
}
