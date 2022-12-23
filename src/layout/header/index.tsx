import type { FC } from 'react';
import BrandLogo from './brand-logo';

const Header: FC = () => {
  return (
    <header className="sm:py-5 py-2 px-2 fixed top-0 left-0 right-0 border-b z-50 bg-gray-50 shadow-sm">
      <div className="container mx-auto ">
        <BrandLogo />
      </div>
    </header>
  );
};

export default Header;
