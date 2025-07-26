'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
interface FormData {
  name: string;
  message: string;
  link: string;
  file: File | null;
}

export default function SubmitMediaForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    message: '',
    link: '',
    file: null,
  });

  const router = useRouter();
  const handleBackgroundClick = () => {
    router.push('/'); // переход на homepage
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('message', form.message);
    formData.append('link', form.link);
    if (form.file) {
      formData.append('file', form.file);
    }

    try {
      const API_URL =
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:4000'
          : process.env.NEXT_PUBLIC_BACKEND_API_URL;

      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert('✅ Письмо успешно отправлено!');
        setForm({ name: '', message: '', link: '', file: null });
        router.push('/'); // возврат на главную
      } else {
        alert('❌ Ошибка при отправке письма');
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('❌ Ошибка соединения с сервером');
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center "
      onClick={handleBackgroundClick}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
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
            value={form.link}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>
        <div className="flex items-center gap-4">
          <label className="bg-gray-500 text-white font-bold px-10 py-2 rounded-md cursor-pointer hover:bg-blue-700">
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
