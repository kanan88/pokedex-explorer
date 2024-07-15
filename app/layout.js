import { Josefin_Sans } from 'next/font/google';

import '@/app/_styles/globals.css';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Pokedex Explorer',
  description:
    'The Pokedex Explorer is a web application that allows users to explore various Pokémon, view detailed information about each, and manage their favorite Pokémon',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        {children}
      </body>
    </html>
  );
}
