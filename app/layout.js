import './globals.css';

export const metadata = {
  title: 'MyMovieList',
  description: 'A movie listing website',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-dark-bg text-light-text font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}