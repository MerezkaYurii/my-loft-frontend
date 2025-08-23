import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Фон */}
      <div className="relative z-0 w-full max-w-7xl mt-[-1rem] aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/9]">
        <Image
          src="/page-about-me.jpg"
          alt="about-me"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      </div>

      {/* Фото и текст */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-20 w-full px-4 sm:px-8 md:px-0 max-w-2xl">
        <div className="flex justify-center">
          <Image
            src="/my foto-Enhanced.jpg"
            alt="my-photo"
            width={130}
            height={130}
            className="rounded-full border-2 border-gray-100 shadow-lg mt-4"
          />
        </div>

        <div className="mt-6 text-center text-white">
          <p className="text-lg   font-bold leading-6 mb-3">
            My name is Yurii Merezhka. I`m 52 years old and I live in Kharkiv,
            Ukraine. I graduated from the
            <em>National Aerospace University `Kharkiv Aviation Institute`</em>,
            and I also hold a diploma as a CNC machine operator.
          </p>

          <p className="text-lg font-bold leading-6 mb-3">
            Recently, I completed a <strong>Full-stack Developer</strong> course
            at <strong>GoIT</strong>. I built this website entirely by myself —
            from concept to implementation.
          </p>

          <p className="text-lg font-bold leading-6 mb-3">
            Here, I share my projects, ideas, experiences, and sources of
            inspiration. What started as a hobby eventually turned into a source
            of income.
          </p>

          <p className="text-lg font-bold leading-6 mb-3">
            I’ve designed and built furniture in the <strong>loft</strong>{' '}
            style, including both modular and fixed constructions. I also
            created useful tools and custom equipment — all of which I try to
            present on different pages of this website.
          </p>

          <p className="text-lg font-bold leading-6 mb-3">
            At the top of the site, you’ll find a <strong>SendMe</strong> link —
            feel free to send me a message, or share an interesting video or
            photo.
          </p>

          <p className="text-lg font-bold leading-6 mb-3">
            I also accept custom orders — based on your own designs and
            measurements.
          </p>

          <div className="mt-5 text-sm font-bold text-gray-300">
            <p className="mb-1">
              Telegram:{' '}
              <a
                href="https://t.me/YuriiMerezka"
                target="_blank"
                className="underline hover:text-white"
              >
                t.me/YuriiMerezka
              </a>
            </p>
            <p className="mb-1">
              Facebook:{' '}
              <a
                href="https://www.facebook.com/krossprint/"
                target="_blank"
                className="underline hover:text-white"
              >
                facebook.com/krossprint
              </a>
            </p>
            <p className="mb-1">
              LinkedIn:{' '}
              <a
                href="https://linkedin.com/in/yurii-merezhka-90889b152"
                target="_blank"
                className="underline hover:text-white"
              >
                linkedin.com/in/yurii-merezhka-90889b152
              </a>
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:yuriimerezka@gmail.com"
                className="underline hover:text-white"
              >
                yuriimerezka@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
