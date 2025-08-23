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
            className="absolute left-1/2 -translate-x-1/2 top-2 text-gray-200 text-4xl sm:text-5xl md:text-6xl font-bold mt-3 z-50"
          >
            My loft
          </Link>

          <p className="hidden md:block w-[200px] leading-[1.1] xl:w-[450px] text-gray-200 text-[14px] xl:text-[20px] font-bold absolute left-1/2 -translate-x-1/2 top-24 xl:leading-relaxed z-20 text-center drop-shadow-[2px_2px_4px_black]">
            This is a space for those who value craftsmanship, know how to work
            with wood and metal — who can weld, cut, and paint. For those who
            build Loft-style furniture, equipment, and useful tools with their
            own hands. Here I share my projects, ideas, experience, and
            inspiration: My Equipment — machines, tools, and devices that I made
            myself. My Photo — photos of finished products. My Video — videos
            showing the making process and how the products are used. Photo from
            Internet / Video from Internet — interesting finds from the web:
            ideas, solutions, and inspiration. How to do it correctly — helpful
            tips and recommendations on how to do things properly and with
            quality. Come in, take a look, get inspired, and build with your own
            hands!
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

              <div className="flex flex-col gap-3 items-center md:items-end min-w-[280px]">
                {/* Видеогалерея */}

                <Link href="/gallery/video" className="relative w-60 h-20">
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
