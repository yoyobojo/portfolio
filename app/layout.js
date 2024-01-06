import { Preloader } from '@/ui/base/preloader';
import '@css/animate.css';
import '@css/basic.css';
import '@css/layout.css';
import '@css/ionicons.css';
import '@css/magnific-popup.css';
import '@css/template-colors/tan.css';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';
import State from '@/stores/global';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap'
});
export const metadata = {
  title: 'Angello Lazar',
  description:
    "Meet a passionate software engineer with a knack for creativity, fueled by a love for blockchain technology and a dedication to both code and business automations. Join me in exploring a realm of innovative strategies and technical prowess designed to scale ventures in today's digital landscape."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoMono.variable}>
        <Preloader />
        <State>{children}</State>
      </body>
    </html>
  );
}
