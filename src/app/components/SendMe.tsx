'use client';

import Link from 'next/link';

export default function SubmitIconLink() {
  return (
    <Link
      href="/submit"
      className=" w-[70px] h-[70px] "
      aria-label="Suggest content"
    >
      <svg height="70" width="70" className="">
        <use xlinkHref="/sprite.svg#icon-IconSendMe" />
      </svg>
    </Link>
  );
}
