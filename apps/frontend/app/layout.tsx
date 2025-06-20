import Header from '@/src/components/header/header';
import React from 'react';

import '@/src/styles/global.scss';
import Footer from '@/src/components/footer/footer';

function RootLayout({ children }: {
  children: React.ReactNode
}) {
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
          <Header />
        </header>

        <main>
          {children}
        </main>
        
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
