'use client';

import { useRouter } from 'next/navigation';

export default function LogoutIconLink() {
  const router = useRouter();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    // Здесь потом можно добавить очистку токена или logout API
    router.push('/');
  };

  return (
    <a
      href="#"
      onClick={handleLogout}
      className="bg-gray-800 w-[50px] h-[50px] flex items-center justify-center"
    >
      <svg height="50" width="50" className="fill-white" aria-label="Logout">
        <use xlinkHref="/sprite.svg#icon-exit" />
      </svg>
    </a>
  );
}
