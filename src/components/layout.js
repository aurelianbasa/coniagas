import * as React from 'react';

import Header from '@components/header';
import Footer from '@components/footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='bg-whiteLight'>{children}</main>
      <Footer />
    </>
  );
}
