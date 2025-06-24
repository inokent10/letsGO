import React from 'react';
import StoreProvider from './storeProvider';

function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru'>
      <head>
        <meta charSet='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/vite.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Поехали</title>
      </head>
      <body>
        <header>
          <h2>ЗАГОЛОВОК</h2>
        </header>
        <main>
          <StoreProvider>
            {children}
          </StoreProvider>
          
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
