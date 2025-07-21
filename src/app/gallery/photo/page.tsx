import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';

export default async function PhotoGalleryPage() {
  const items = await getLoftData('my-photos');

  return <GalleryPage items={items} />;
}
