'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import LogoutIconLink from './LogoutIconLink';
import SubmitIconLink from './SendMe';

export default function Header() {
  const pathname = usePathname();
  const linkClass = (path: string) =>
    `text-center leading-tight font-bold ${
      pathname === path ? 'text-red-500' : 'text-white'
    }`;

  return (
    <header className=" max-w-7xl mx-auto  sticky top-0 z-50 h-24 bg-[url('/fonehader.jpg')] bg-cover bg-center ">
      <div className="max-w-7xl mx-auto px-14 py-6 flex items-center justify-between ">
        <Link
          href={'/'}
          className="flex items-center h-[50px] w-[100px] justify-center"
        >
          <svg height="50 " className="drop-shadow-[2px_2px_4px_black]">
            <use href="/sprite.svg#icon-logogrey"></use>
          </svg>
        </Link>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  ">
          <nav
            className="flex gap-6 text-white text-[16px] font-bold whitespace-nowrap "
            style={{ textShadow: '2px 2px 4px black' }}
          >
            <Link href={'/about'} className={linkClass('/about')}>
              <span>About</span>
              <br />
              <span>as</span>
            </Link>
            <Link
              href={'/gallery/photo'}
              className={linkClass('/gallery/photo')}
            >
              <span>My</span>
              <br />
              <span>Photo</span>
            </Link>
            <Link
              href={'/gallery/photoFromInternet'}
              className={linkClass('/gallery/photoFromInternet')}
            >
              <span>Photo from</span>
              <br />
              <span>the Internet</span>
            </Link>
            <Link
              href={'/gallery/video'}
              className={linkClass('/gallery/video')}
            >
              <span>My</span>
              <br />
              <span>Video</span>
            </Link>
            <Link
              href={'/gallery/videoFromInternet'}
              className={linkClass('/gallery/videoFromInternet')}
            >
              <span>Video from</span>
              <br />
              <span>the Internet</span>
            </Link>
            <Link
              href={'/gallery/myEquipment'}
              className={linkClass('/gallery/myEquipment')}
            >
              <span>My </span>
              <br />
              <span>equipment</span>
            </Link>
            <Link
              href={'/gallery/howToDoItCorrectly'}
              className={linkClass('/gallery/howToDoItCorrectly')}
            >
              <span>How to do</span>
              <br />
              <span>it correctly</span>
            </Link>
          </nav>
        </div>

        <div className="  flex gap-8">
          <SubmitIconLink />

          <LogoutIconLink />
        </div>
      </div>
    </header>
  );
}
