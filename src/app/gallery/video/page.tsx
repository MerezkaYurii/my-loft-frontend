// import { getLoftData } from '@/app/api/api';
// import GalleryPage from '@/app/components/GalleryPage';
// import React from 'react';

// export default async function VideoGalleryPage() {
//   const { items, pagination } = await getLoftData('my-videos');
//   return (
//     <GalleryPage
//       initialItems={items}
//       initialPagination={pagination}
//       category="my-videos"
//     />
//   );
// }
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';
import Loader from '@/app/components/Loader';
import React from 'react';

// Компонент для загрузки видео-данных
async function VideoContent() {
  const { items, pagination } = await getLoftData('my-videos');

  return (
    <GalleryPage
      initialItems={items}
      initialPagination={pagination}
      category="my-videos"
    />
  );
}

// Основная страница
export default function VideoGalleryPage() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <VideoContent />
      </Suspense>
    </main>
  );
}