import React from 'react';
import './globals.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <div className=" w-full max-w-7xl  mt-[-1rem">
        <div className="relative  overflow-hidden ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src="/video/lofthomepage2.mp4" />
          </video>
          <div className="absolute inset-0 z-20 flex justify-between items-center h-full px-10">
            {/* Видеоархив */}
            <Link
              href="/gallery/video"
              className="text-white border border-white px-6 py-4 text-3xl font-bold rounded-lg hover:bg-white hover:text-black transition"
            >
              Видеоархив
            </Link>

            {/* Фотогалерея */}
            <Link
              href="/gallery/photo"
              className="text-white border border-white px-6 py-4 text-3xl font-bold rounded-lg hover:bg-white hover:text-black transition"
            >
              Фотогалерея
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
