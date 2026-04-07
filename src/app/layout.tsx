import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Himanshu Saini | Royal Portfolio',
  description: 'Product Manager Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased text-amber-50">
        {children}
      </body>
    </html>
  );
}
