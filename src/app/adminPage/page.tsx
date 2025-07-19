// page.tsx или другой компонент
'use client';
import { useState } from 'react';
import LoftModalAdmin from '../components/LoftModalAdmin';

export default function AdminPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        Добавить лофт
      </button>
      {isOpen && <LoftModalAdmin onClose={() => setIsOpen(false)} />}
    </div>
  );
}
