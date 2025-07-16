'use client';
import { useParams } from 'next/navigation';
import { photoItems } from '../page';
import DetailPage from '@/app/components/DetailePage';

export default function PhotoDetailPage() {
  const params = useParams();
  const id = params?.id;
  const item = photoItems.find((photo) => photo.id === Number(id));

  if (!item) return <p className="text-center text-white">Photo not found</p>;

  return <DetailPage item={item} />;
}
