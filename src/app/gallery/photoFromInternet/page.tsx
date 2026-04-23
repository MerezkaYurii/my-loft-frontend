// import { getLoftData } from '@/app/api/api';
// import GalleryPage from '@/app/components/GalleryPage';
// import React from 'react';

// export default async function photoFromInternetGallaryPage() {
//   const { items, pagination } = await getLoftData('internet-photos');
//   return (
//     <GalleryPage
//       initialItems={items}
//       initialPagination={pagination}
//       category="internet-photos"
//     />
//   );
// }
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';
import Loader from '@/app/components/Loader';
import React from 'react';

// Компонент для загрузки данных из интернета
async function InternetPhotosContent() {
  const { items, pagination } = await getLoftData('internet-photos');

  return (
    <GalleryPage
      initialItems={items}
      initialPagination={pagination}
      category="internet-photos"
    />
  );
}

// Основная страница (мгновенный рендер)
export default function PhotoFromInternetGalleryPage() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <InternetPhotosContent />
      </Suspense>
    </main>
  );
}