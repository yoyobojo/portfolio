import Popup from '@/ui/components/popup/Popup';
import { Footer } from '@/ui/base/footer';
import { Fragment } from 'react';
import { Header } from './header';
export const Base = ({ children, dark }) => {
  return (
    <Fragment>
      <Popup />
      <div className="container" style={{ margin: 0 }}>
        <Header />
        <div className="wrapper">{children}</div>
        <Footer />

        <div className="line top" />
        <div className="line bottom" />
        <div className="line left" />
        <div className="line right" />
      </div>
    </Fragment>
  );
};
