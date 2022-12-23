import { FC } from 'react';
import SearchForm from './form';

const LandingSearch: FC = () => {
  return (
    <div className="container mx-auto px-2 py-10 text-center">
      <h2 className="text-3xl  font-semibold">Search Capsules</h2>
      <p className="text-sm opacity-50 my-3 max-w-xl mx-auto ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nam
        aspernatur quo beatae aperiam voluptatibus, officiis fugiat molestias
        voluptatum tempore sint at est expedita ex aut dolor ullam reprehenderit
        odit.
      </p>
      <SearchForm />
    </div>
  );
};

export default LandingSearch;
