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
import Script from 'next/script'
import Layout from 'components/Layout';

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
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script>
            {`
              // Hotjar Tracking Code
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid: 3575186, hjsv: 6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </script>
        {/* <Script
  strategy="lazyOnload"
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
/>

<Script id="ga-script" strategy="lazyOnload">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
</Script> */}

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
    </Layout>
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

// <TinaEditProvider
//           editMode={
//             <TinaCMS
//               query={pageProps.query}
//               variables={pageProps.variables}
//               data={pageProps.data}
//               isLocalClient={!process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
//               branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
//               clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
//               {...pageProps}
//             >
//               {(livePageProps: any) => <Component {...livePageProps} />}
//             </TinaCMS>
//           }
//         >
//         </TinaEditProvider>