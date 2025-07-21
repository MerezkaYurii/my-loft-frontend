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
    alert('Form sent! File sent to administrator.');
    // Здесь будет отправка на email/API
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className=" max-h-fit w-full max-w-md mx-auto mt-10 p-6 sm:px-8 bg-gray-100 rounded-2xl shadow-lg flex flex-col gap-4"
      >
        <label className=" font-bold text-gray-900">
          Your name: (optional)
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded-md w-full"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>
        <label className=" font-bold text-gray-900">
          Your comments: (optional)
          <textarea
            placeholder="Your comments"
            className="p-2 border rounded-md w-full"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </label>
        <label className=" font-bold text-gray-900">
          Link to the Image/Video
          <input
            type="text"
            placeholder="Link"
            className="p-2 border rounded-md w-full"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>
        <div className="flex items-center gap-4">
          <label className="bg-gray-500 text-white font-bold px-20 py-2 rounded-md cursor-pointer hover:bg-blue-700">
            Select file
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) =>
                setForm({ ...form, file: e.target.files?.[0] || null })
              }
              className="hidden"
            />
          </label>
          <span className="text-sm text-blue-700  ml-5">
            {form.file ? form.file.name : 'File not selected'}
          </span>
        </div>

        <button
          type="submit"
          className="bg-gray-500 text-white font-bold p-2 rounded-xl hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}
