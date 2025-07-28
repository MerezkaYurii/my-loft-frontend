'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import DetailPage from '@/app/components/DetailePage';
import { getLoftItemById } from '@/app/api/api';

export default function PhotoFromInternetDetailPage() {
  const { id } = useParams() as { id: string };

  const category = 'internet-photos';

  const [item, setItem] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id || id === 'undefined') {
      setError('ID не передан в URL');
      return;
    }

    getLoftItemById(category, id)
      .then((data) => setItem(data))
      .catch((err) => setError(err.message));
  }, [id, category]);

  if (error) return <p className="text-center text-white">{error}</p>;
  if (!item) return <p className="text-center text-white">Загрузка...</p>;

  return <DetailPage item={item} />;
}
