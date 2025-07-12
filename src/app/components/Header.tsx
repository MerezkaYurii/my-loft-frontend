import Link from 'next/link';
import React from 'react';

// export interface HeaderProps = {}

export default function Header() {
  return (
    <header className=" max-w-7xl mx-auto  sticky top-0 z-50 h-24 bg-[url('/fonehader.jpg')] bg-cover bg-center ">
      <div className="max-w-7xl mx-auto px-14 py-6 flex items-center justify-between ">
        <Link
          href={'/'}
          className="flex items-center h-[50px] w-[120px] justify-center"
        >
          <svg height="50 " className="drop-shadow-[2px_2px_4px_black]">
            <use href="/sprite.svg#icon-logogrey"></use>
          </svg>
        </Link>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <nav
            className="flex gap-10 text-white text-3xl font-bold  "
            style={{ textShadow: '2px 2px 4px black' }}
          >
            <Link href={'/about'}>About</Link>
            <Link href={'/gallery/photo'}>Photos</Link>
            <Link href={'/gallery/video'}>Videos</Link>
          </nav>
        </div>

        <Link
          href={'/logout'}
          className="bg-gray-800 w-[50px] h-[50px] flex items-center justify-center "
        >
          <svg
            height="50"
            width="50"
            className="fill-white "
            aria-label="Logout"
          >
            <use xlinkHref="/sprite.svg#icon-exit" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
