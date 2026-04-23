

// import { getLoftData } from '@/app/api/api';
// import GalleryPage from '@/app/components/GalleryPage';
// import React from 'react';

// export default async function howToDoItGalleryPage() {
//   const { items, pagination } = await getLoftData('how-to');
//   return (
//     <GalleryPage
//       initialItems={items}
//       initialPagination={pagination}
//       category="how-to"
//     />
//   );
// }
export const dynamic = 'force-dynamic';
import { Suspense } from 'react';
import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';
import Loader from '@/app/components/Loader';
import React from 'react';

// 1. Компонент, который делает тяжелый запрос
async function HowToDoContent() {
  const { items, pagination } = await getLoftData('how-to');

  return (
    <GalleryPage
      initialItems={items}
      initialPagination={pagination}
      category="how-to"
    />
  );
}

// 2. Основная страница (НЕ async), которая сразу отдает Loader
export default function HowToDoItGalleryPage() {
  return (
    <Suspense fallback={<Loader />}>
      <HowToDoContent />
    </Suspense>
  );
}