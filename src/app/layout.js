import './globals.css';
import LayoutShell from '@/components/LayoutShell';

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
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
