import './globals.css';

export const metadata = {
  title: 'Nooscope',
  description: 'Nooscope — Visual Instrument for Collective Intelligence',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
