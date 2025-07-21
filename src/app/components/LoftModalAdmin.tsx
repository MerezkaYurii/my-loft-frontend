'use client';
import { useState } from 'react';

export default function LoftModalAdmin({ onClose }: { onClose: () => void }) {
  const [collection, setCollection] = useState(''); // <-- переместили выше
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: '',
    type: '',
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
        alert('Data saved successfully!');
        setFormData({
          title: '',
          description: '',
          thumbnail: '',
          type: 'photo',
        });
        setCollection('my-photos'); // сброс коллекции
        onClose();
      } else {
        alert('Error saving data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error saving');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 shadow-md space-y-4 w-full max-w-md rounded-xl"
      >
        <label className="text-gray-900 font-bold ">
          Name photo/video:
          <input
            className=" border border-gray-500 p-2 rounded-md mb-4 "
            type="text"
            placeholder="Name"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </label>
        <label className="text-gray-900 font-bold">
          Photo/Video description:
          <textarea
            className="w-full border border-gray-500 p-2 rounded-md mb-4"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </label>
        <label className="text-gray-900 font-bold ">
          Link to Photo/Video:
          <input
            className="w-full border border-gray-500 p-2 rounded-md mb-4"
            type="text"
            placeholder="Link "
            value={formData.thumbnail}
            onChange={(e) =>
              setFormData({ ...formData, thumbnail: e.target.value })
            }
            required
          />
        </label>
        <label className="text-gray-900 font-bold ">
          Select Image or Video
          <select
            className="w-full border border-gray-500 p-2 rounded-md text-gray-700 mb-4"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value=""></option>
            <option value="photo">Photo</option>
            <option value="video">Video</option>
          </select>
        </label>
        <label className="text-gray-900 font-bold ">
          Select category
          <select
            value={collection}
            onChange={(e) => setCollection(e.target.value)}
            className="w-full border border-gray-500 p-2 rounded-md text-gray-700 mb-4"
          >
            <option value=""></option>
            <option value="my-photos">My Photo</option>
            <option value="my-photos">My Photo</option>
            <option value="my-photos">My Photo</option>
            <option value="internet-photos">Photo from the Internet</option>
            <option value="my-videos">My Video</option>
            <option value="internet-videos">Video from the Internet</option>
            <option value="my-equipment">My equipment</option>
            <option value="how-to">How to do it correctly</option>
          </select>
        </label>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-700 px-10 text-white font-bold py-2 rounded-xl hover:bg-blue-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-800 text-white font-bold px-12 py-2 rounded-xl hover:bg-gray-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
