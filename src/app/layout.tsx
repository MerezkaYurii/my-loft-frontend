import React from 'react';
import './globals.css';
import Header from './components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Loft',
  description: 'DIY furniture, tools, and Loft-style projects',
  icons: {
    icon: '/LOGOtop.svg',
  },
  openGraph: {
    title: 'My Loft',
    description: 'DIY furniture, tools, and Loft-style projects.',
    url: 'https://my-loft-frontend.vercel.app',
    siteName: 'My Loft',
    images: [
      {
        url: '/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'My Loft preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Loft',
    description: 'DIY furniture, tools, and Loft-style projects',
    images: ['/preview.jpg'],
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
