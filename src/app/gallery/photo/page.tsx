import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';

export default async function PhotoGalleryPage() {
  const { items, pagination } = await getLoftData('my-photos');

  return (
    <GalleryPage
      initialItems={items}
      initialPagination={pagination}
      category="my-photos"
    />
  );
}
