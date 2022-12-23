import { FC, ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="animate-fade-in" key={children?.toString()}>
      <Header />
      <main className="sm:mt-20 mt-14  min-h-[86vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
