'use client';
import { useState } from 'react';

export default function LoftModalAdmin({ onClose }: { onClose: () => void }) {
  const [collection, setCollection] = useState('my-photos'); // <-- переместили выше
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: '',
    type: 'photo',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/lofts/${collection}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Данные успешно сохранены!');
        setFormData({
          title: '',
          description: '',
          thumbnail: '',
          type: 'photo',
        });
        setCollection('my-photos'); // сброс коллекции
        onClose();
      } else {
        alert('Ошибка при сохранении данных');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при сохранении');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-md"
      >
        <input
          className="w-full border border-gray-300 p-2"
          type="text"
          placeholder="Название"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <textarea
          className="w-full border border-gray-300 p-2"
          placeholder="Описание"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <input
          className="w-full border border-gray-300 p-2"
          type="text"
          placeholder="Ссылка на изображение или видео"
          value={formData.thumbnail}
          onChange={(e) =>
            setFormData({ ...formData, thumbnail: e.target.value })
          }
          required
        />
        <select
          className="w-full border border-gray-300 p-2"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option value="photo">Фото</option>
          <option value="video">Видео</option>
        </select>
        <select
          value={collection}
          onChange={(e) => setCollection(e.target.value)}
          className="w-full border border-gray-300 p-2"
        >
          <option value="my-photos">Мои Фото</option>
          <option value="internet-photos">Фото из интернета</option>
          <option value="my-videos">Мои Видео</option>
          <option value="internet-videos">Видео из интернета</option>
          <option value="my-equipment">Мое оборудование</option>
          <option value="how-to">Как это сделано</option>
        </select>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Отмена
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}
