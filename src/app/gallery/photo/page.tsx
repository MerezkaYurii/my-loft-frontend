// import { getLoftData } from '@/app/api/api';
// import GalleryPage from '@/app/components/GalleryPage';


// export default async function PhotoGalleryPage() {
//   const { items, pagination } = await getLoftData('my-photos');

//   return (

//     <GalleryPage
//       initialItems={items}
//       initialPagination={pagination}
//       category="my-photos"
//     />


//   );
// }


export const dynamic = 'force-dynamic';
import { Suspense } from 'react';
import { getLoftData } from '@/app/api/api';
import GalleryPage from '@/app/components/GalleryPage';
import Loader from '@/app/components/Loader';


async function DataFetcher() {

  const { items, pagination } = await getLoftData('my-photos');

  return (
    <GalleryPage
      initialItems={items}
      initialPagination={pagination}
      category="my-photos"
    />
  );
}

// 2. Сама страница теперь не async и не ждет данные в корне
export default function PhotoGalleryPage() {
  return (
    <main>
      <Suspense fallback={<Loader />}>

        <DataFetcher />
      </Suspense>
    </main>
  );
}