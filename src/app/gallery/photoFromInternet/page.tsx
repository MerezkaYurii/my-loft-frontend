import GalleryPage, { GalleryItem } from '@/app/components/GalleryPage';

export const photoItems: GalleryItem[] = [
  {
    id: 1,
    title: ' INTERNET Лофт. Интерьер',
    description: 'Современный дизайн интерьера с естественным освещением.',
    thumbnail: '/photo/loft1.jpg',
    type: 'photo',
  },

  {
    id: 2,
    title: 'INTERNET Детали декора',
    description: 'Уютные элементы декора в индустриальном стиле.',
    thumbnail: '/photo/loft1.jpg',
    type: 'photo',
  },
  {
    id: 3,
    title: 'INTERNET Общий план',
    description: 'Общий вид помещения с мебелью и освещением.',
    thumbnail: '/photo/loft1.jpg',
    type: 'photo',
  },
];

export default function PhotoGalleryPage() {
  return <GalleryPage items={photoItems} />;
}
