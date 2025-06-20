import React from 'react';

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
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
