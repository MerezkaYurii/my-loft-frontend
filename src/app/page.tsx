import React from 'react';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <div className=" w-full max-w-7xl  mt-[-1rem]">
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

          {/* Заголовок */}
          <Link
            href={'/about'}
            // className="text-gray-200 text-[70px] font-bold absolute left-1/2 -translate-x-1/2 top-2"
            className="absolute left-1/2 -translate-x-1/2 top-2 text-gray-200 text-4xl sm:text-5xl md:text-6xl font-bold mt-3 z-50"
            //  className="text-gray-200 text-[70px] font-bold absolute left-1/2 -translate-x-1/2 top-2 z-20"
          >
            My loft
          </Link>

          <p className="hidden md:block w-[200px] leading-[1.2] xl:w-[450px] text-gray-200 text-[20px] font-bold absolute left-1/2 -translate-x-1/2 top-32 xl:leading-relaxed z-20 text-center drop-shadow-[2px_2px_4px_black]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut
            perferendis provident corrupti, officiis sint beatae molestias a
            odio repudiandae, voluptas temporibus iure voluptatem architecto
            atque tempora, aut eius dolores.
          </p>

          <div className="absolute inset-0 z-10 flex flex-col md:flex-row justify-center md:justify-between items-center h-full gap-8 px-4 md:px-10 py-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-6 md:w-full max-w-6xl md:mx-auto overflow-y-auto md:overflow-visible  md:max-h-full">
              {/* ЛЕВАЯ колонка */}

              <div className="flex flex-col gap-3 items-center md:items-start min-w-[280px]">
                {/* Фотогалерея */}
                <Link href="/gallery/photo" className="relative w-60 h-20  ">
                  <Image
                    src="/myfoto.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </Link>

                {/* Фотогалерея  интернет*/}
                <Link
                  href="/gallery/photoFromInternet"
                  className="relative w-60 h-20  "
                >
                  <Image
                    src="/photoInternet.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </Link>

                {/* Оборудование */}
                <Link
                  href="/gallery/myEquipment"
                  className="relative w-60 h-20 "
                >
                  <Image
                    src="/myEquipment.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </Link>
              </div>

              {/* Правая колонка */}

              {/* <div className="flex flex-col  gap-8 mr-10"> */}
              <div className="flex flex-col gap-3 items-center md:items-end min-w-[280px]">
                {/* Видеогалерея */}

                <Link href="/gallery/myVideo" className="relative w-60 h-20">
                  <Image
                    src="/myvideo.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </Link>

                {/* Видеогалерея интернет */}

                <Link
                  href="/gallery/videoFromInternet"
                  className="relative w-60 h-20 "
                >
                  <Image
                    src="/videoInternet.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </Link>

                {/*как это делают */}

                <Link
                  href="/gallery/howToDoItCorrectly"
                  className="relative w-60 h-20 "
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
      </div>
    </main>
  );
}
