// 'use client';

// import Link from 'next/link';
// import React from 'react';
// import { usePathname } from 'next/navigation';
// import LogoutIconLink from './LogoutIconLink';
// import SubmitIconLink from './SendMe';

// export default function Header() {
//   const pathname = usePathname();
//   const linkClass = (path: string) =>
//     `text-center leading-tight font-bold ${
//       pathname === path ? 'text-red-500' : 'text-white'
//     }`;

//   return (
//     // <header className=" max-w-7xl mx-auto  sticky top-0 z-50 h-24 bg-[url('/fonehader.jpg')] bg-cover bg-center ">
//     <header className="w-full sticky top-0 z-50 bg-[url('/fonehader.jpg')] bg-cover bg-center">
//       {/* <div className="max-w-7xl mx-auto px-14 py-6 flex items-center justify-between "> */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
//         <Link
//           href={'/'}
//           // className="flex items-center h-[50px] w-[100px] justify-center"
//           className="flex items-center h-[50px] w-[100px] justify-center shrink-0"
//         >
//           {/* <svg height="50 " className="drop-shadow-[2px_2px_4px_black]"> */}
//           <svg
//             height="50"
//             className="drop-shadow-[2px_2px_4px_black] w-full h-full"
//           >
//             <use href="/sprite.svg#icon-logogrey"></use>
//           </svg>
//         </Link>

//         {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  "> */}
//         <nav
//           // className="flex gap-6 text-white text-[16px] font-bold whitespace-nowrap "
//           className="hidden md:flex gap-4 lg:gap-6 text-white text-sm md:text-base font-bold text-center whitespace-nowrap"
//           style={{ textShadow: '2px 2px 4px black' }}
//         >
//           <Link href={'/about'} className={linkClass('/about')}>
//             <span>About</span>
//             <br />
//             <span>as</span>
//           </Link>
//           <Link href={'/gallery/photo'} className={linkClass('/gallery/photo')}>
//             <span>My</span>
//             <br />
//             <span>Photo</span>
//           </Link>
//           <Link
//             href={'/gallery/photoFromInternet'}
//             className={linkClass('/gallery/photoFromInternet')}
//           >
//             <span>Photo from</span>
//             <br />
//             <span>the Internet</span>
//           </Link>
//           <Link href={'/gallery/video'} className={linkClass('/gallery/video')}>
//             <span>My</span>
//             <br />
//             <span>Video</span>
//           </Link>
//           <Link
//             href={'/gallery/videoFromInternet'}
//             className={linkClass('/gallery/videoFromInternet')}
//           >
//             <span>Video from</span>
//             <br />
//             <span>the Internet</span>
//           </Link>
//           <Link
//             href={'/gallery/myEquipment'}
//             className={linkClass('/gallery/myEquipment')}
//           >
//             <span>My </span>
//             <br />
//             <span>equipment</span>
//           </Link>
//           <Link
//             href={'/gallery/howToDoItCorrectly'}
//             className={linkClass('/gallery/howToDoItCorrectly')}
//           >
//             <span>How to do</span>
//             <br />
//             <span>it correctly</span>
//           </Link>
//         </nav>
//       </div>

//       <div className="  flex gap-6">
//         <SubmitIconLink />

//         <LogoutIconLink />
//       </div>
//       {/* </div> */}
//     </header>
//   );
// }
'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import LogoutIconLink from './LogoutIconLink';
import SubmitIconLink from './SendMe';
// import { Menu, X } from 'lucide-react'; // можно любую иконку или кастомную

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (path: string) =>
    `text-center leading-tight font-bold ${
      pathname === path ? 'text-red-500' : 'text-white'
    }`;

  const navLinks = [
    { href: '/about', label1: 'About', label2: 'as' },
    { href: '/gallery/photo', label1: 'My', label2: 'Photo' },
    {
      href: '/gallery/photoFromInternet',
      label1: 'Photo from',
      label2: 'the Internet',
    },
    { href: '/gallery/video', label1: 'My', label2: 'Video' },
    {
      href: '/gallery/videoFromInternet',
      label1: 'Video from',
      label2: 'the Internet',
    },
    { href: '/gallery/myEquipment', label1: 'My', label2: 'equipment' },
    {
      href: '/gallery/howToDoItCorrectly',
      label1: 'How to do',
      label2: 'it correctly',
    },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[url('/fonehader.jpg')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Логотип */}
        <Link
          href="/"
          className="flex items-center h-[50px] w-[100px] justify-center shrink-0"
        >
          <svg
            height="50"
            className="drop-shadow-[2px_2px_4px_black] w-full h-full"
          >
            <use href="/sprite.svg#icon-logogrey"></use>
          </svg>
        </Link>

        {/* Навигация — скрыта на мобилке */}
        <nav
          className={`hidden lg:flex gap-6 text-white text-[16px] font-bold text-center whitespace-nowrap transition-all duration-300`}
          style={{ textShadow: '2px 2px 4px black' }}
        >
          {navLinks.map(({ href, label1, label2 }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              <span>{label1}</span>
              <br />
              <span>{label2}</span>
            </Link>
          ))}
        </nav>

        {/* Иконки + бургер */}
        {/* <div className="flex items-center gap-4 lg:gap-6"> */}
        {/* Бургер только на мобильных */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          {menuOpen ? (
            <svg className="drop-shadow-[2px_2px_4px_black] w-28 h-20">
              <use xlinkHref="/sprite1.svg#icon-logoX"></use>
            </svg>
          ) : (
            <svg className="drop-shadow-[2px_2px_4px_black] w-28 h-20">
              <use xlinkHref="/sprite1.svg#icon-logoMenu"></use>
            </svg>
          )}
        </button>
        <div className="flex gap-7 ">
          <SubmitIconLink />
          <LogoutIconLink />
        </div>
      </div>
      {/* </div> */}

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-4 bg-gray-900 bg-opacity-80 text-white text-center text-sm font-bold">
          {navLinks.map(({ href, label1, label2 }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              <span>{label1}</span> <span>{label2}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
