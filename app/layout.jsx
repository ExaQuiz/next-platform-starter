import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
  title: {
    template: '%s | ExaTenge',
    default: 'ExaTenge AI',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="bg-[#0e0e10] text-white font-sans">
        <div className="flex justify-center items-center min-h-screen px-4">
          <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-[#1a1a1d]">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
