import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { AppProps } from 'next/dist/shared/lib/router/router';
// import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';
// import { TinaEditProvider } from 'tinacms/dist/edit-state';
import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import NewsletterModal from 'components/NewsletterModal';
import WaveCta from 'components/WaveCta';
import { NewsletterModalContextProvider, useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { NavItems } from 'types';
import { ColorModeProvider } from '../contexts/ColorModeContext';


const navItems: NavItems = [
  { title: 'Home', href: '/' }, 
  { title: 'About Us', href: '/features' },
  { title: 'Innovation', href: '/pricing' },
  { title: 'Blogs', href: '/sign-up' }, 
  { title: 'Contact', href: '/contact', outlined: true },
];

// const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        
      </Head>
      <ColorModeScript />
      <GlobalStyle />
      <Providers>
        <Modals />
        <Navbar items={navItems} />
        <Component {...pageProps} />
        <WaveCta />
        <Footer />
      </Providers>

      <ColorModeProvider>
        {/* Wrap your entire app with the ColorModeProvider */}
        <Component {...pageProps} />
      </ColorModeProvider>




    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <NewsletterModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </NewsletterModalContextProvider>
  );
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
  if (!isModalOpened) {
    return null;
  }
  return <NewsletterModal onClose={() => setIsModalOpened(false)} />;
}

export default MyApp;

 