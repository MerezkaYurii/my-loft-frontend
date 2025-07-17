'use client';

import Link from 'next/link';

export default function SubmitIconLink() {
  return (
    <Link
      href="/submit"
      className=" w-[70px] h-[70px] "
      aria-label="Предложить контент"
    >
      <svg height="70" width="70" className="">
        <use xlinkHref="/sprite.svg#icon-IconSendMe" />
      </svg>
    </Link>
  );
}
