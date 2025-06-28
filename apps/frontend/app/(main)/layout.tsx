'use client';
import Header from '@/src/components/header/header';
import React from 'react';

import '@/src/styles/global.scss';
import Footer from '@/src/components/footer/footer';
import { usePathname } from 'next/navigation';
import { AppRoute, HEADER_TITLES } from '@/src/const';
import StoreProvider from '../storeProvider';

function RootLayout({ children }: {
  children: React.ReactNode
}) {
  const pathName = usePathname();
  const dynamicHeaderTitle = pathName === AppRoute.FormPage ? HEADER_TITLES.DIRECTIONS : HEADER_TITLES.TRAVELERS;

  return (
    <html lang='ru'>
      <head>
        <meta charSet='UTF-8' />
        <link rel='icon' type='svg+xml' href='/logo_full.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Поехали</title>
      </head>
      <body>
        <header>
          <Header title={dynamicHeaderTitle} />
        </header>
        <StoreProvider>
          <main>
            {children}
          </main>
        </StoreProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
