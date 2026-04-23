// import { getLoftData } from '@/app/api/api';
// import GalleryPage from '@/app/components/GalleryPage';
// import React from 'react';

// export default async function VideoFromInternetGalleryPage() {
//   const { items, pagination } = await getLoftData('internet-videos');
//   return (
//     <GalleryPage
//       initialItems={items}
//       initialPagination={pagination}
//       category="internet-videos"
//     />
//   );
// }
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';
import Loader from '@/app/components/Loader';
import React from 'react';

// Компонент для загрузки данных видео из интернета
async function InternetVideoContent() {
  const { items, pagination } = await getLoftData('internet-videos');

  return (
    <GalleryPage
      initialItems={items}
      initialPagination={pagination}
      category="internet-videos"
    />
  );
}

// Основная страница
export default function VideoFromInternetGalleryPage() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <InternetVideoContent />
      </Suspense>
    </main>
  );
}