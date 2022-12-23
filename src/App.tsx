import type { FC } from 'react';
import LandingBanner from './components/landing/banner';
import LandingSearch from './components/landing/search';
import Layout from './layout';
import SearchFormContextProvider from './providers/search-form-context-provider';

const App: FC = () => {
  return (
    <Layout>
      <LandingBanner />
      <SearchFormContextProvider>
        <LandingSearch />
      </SearchFormContextProvider>
      <div className="h-screen"></div>
    </Layout>
  );
};

export default App;
