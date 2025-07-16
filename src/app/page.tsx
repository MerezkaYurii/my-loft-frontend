import React from 'react';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

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

          <Link
            href={'/about'}
            className="text-gray-200 text-[70px] font-bold absolute left-1/2 -translate-x-1/2 top-2"
          >
            My loft
          </Link>

          <p className=" w-[450px] text-gray-200 text-[20px] font-bold absolute left-1/2 -translate-x-1/2 top-32 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut
            perferendis provident corrupti, officiis sint beatae molestias a
            odio repudiandae, voluptas temporibus iure voluptatem architecto
            atque tempora, aut eius dolores.
          </p>
          <div className="absolute inset-0 z-20 flex justify-between mt-20 h-full px-10 ">
            <div className="flex flex-col  gap-8 ml-10">
              {/* Фотогалерея */}
              <Link
                href="/gallery/photo"
                className="inline-block relative w-[250px] h-[80px]  "
              >
                <Image
                  src="/myfoto.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </Link>

              <Link
                href="/gallery/photoFromInternet"
                className="inline-block relative w-[250px] h-[80px] ml-10 "
              >
                <Image
                  src="/photoInternet.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </Link>

              {/* Видеоархив */}
              <Link
                href="/gallery/myEquipment"
                className="inline-block relative w-[250px] h-[80px] ml-20"
              >
                <Image
                  src="/myEquipment.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
            <div className="flex flex-col  gap-8 mr-10">
              {/* Фотогалерея */}
              <Link
                href="/gallery/photo"
                className="inline-block relative w-[250px] h-[80px]  ml-20"
              >
                <Image
                  src="/myvideo.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </Link>

              <Link
                href="/gallery/videoFromInternet"
                className="inline-block relative w-[250px] h-[80px]  ml-10 "
              >
                <Image
                  src="/videoInternet.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </Link>
              <Link
                href="/gallery/howToDoItCorrectly"
                className="inline-block relative w-[250px] h-[80px]  "
              >
                <Image
                  src="/doCorrectly.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
