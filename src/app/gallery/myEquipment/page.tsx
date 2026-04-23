// import { getLoftData } from '@/app/api/api';
// import GalleryPage from '@/app/components/GalleryPage';
// import React from 'react';

// export default async function myEqipmentGalleryPage() {
//   const { items, pagination } = await getLoftData('my-equipment');
//   return (
//     <GalleryPage
//       initialItems={items}
//       initialPagination={pagination}
//       category="my-equipment"
//     />
//   );
// }
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';
import Loader from '@/app/components/Loader';
import React from 'react';

// Компонент для загрузки данных оборудования
async function EquipmentContent() {
  const { items, pagination } = await getLoftData('my-equipment');

  return (
    <GalleryPage
      initialItems={items}
      initialPagination={pagination}
      category="my-equipment"
    />
  );
}

// Основная страница
export default function MyEquipmentGalleryPage() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <EquipmentContent />
      </Suspense>
    </main>
  );
}