import type { FC } from 'react';
import { SWRConfig } from 'swr';
import LandingBanner from './components/landing/banner';
import LandingCapsulesResults from './components/landing/capsules';
import LandingSearch from './components/landing/search';
import { useFetchOptions } from './hooks/useFetchOptions';
import Layout from './layout';
import SearchFormContextProvider from './providers/search-form-context-provider';

const App: FC = () => {
  const options = useFetchOptions();

  return (
    <Layout>
      <SWRConfig value={options}>
        <LandingBanner />
        <SearchFormContextProvider>
          <LandingSearch />
          <LandingCapsulesResults />
        </SearchFormContextProvider>
      </SWRConfig>
    </Layout>
  );
};

export default App;
