'use client';
import { useState } from 'react';

interface FormData {
  name: string;
  message: string;
  file: File | null;
}

export default function SubmitMediaForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    message: '',
    file: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Форма отправлена! Файл отправлен администратору.');
    // Здесь будет отправка на email/API
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md p-4 bg-gray-100 rounded"
    >
      <input
        type="text"
        placeholder="Ваше имя (необязательно)"
        className="p-2 border"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <textarea
        placeholder="Описание или комментарий"
        className="p-2 border"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <input
        type="file"
        accept="image/*,video/*"
        onChange={(e) =>
          setForm({ ...form, file: e.target.files?.[0] || null })
        }
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Отправить
      </button>
    </form>
  );
}
