import React from 'react';
import './globals.css';
import Header from './components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My loft',
  description: 'Описание сайта',
  icons: {
    icon: '/LOGOtop.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
