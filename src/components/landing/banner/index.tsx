import { FC } from 'react';

const LandingBanner: FC = () => {
  return (
    <div className="md:py-40 sm:py-20 py-10 bg-cover bg-center text-gray-50 bg-[url(https://sxcontent9668.azureedge.us/cms-assets/assets/Star4_37_outsidebeach_IMG_4152_1_desktop_1_0ae909e40a.jpg)]">
      <div className="container mx-auto grid lg:grid-cols-2 ">
        <div className="xl:px-10 lg:px-6 px-4">
          <h1 className="text-6xl font-semibold leading-tight">
            Powerful Tagline for your Product
          </h1>
          <p className="opacity-70 text-sm mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero
            incidunt quis voluptatibus perspiciatis amet rem, iure dignissimos
            eius reiciendis fuga aut soluta modi enim? Doloremque nihil fugit
            vitae aperiam!
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LandingBanner;
