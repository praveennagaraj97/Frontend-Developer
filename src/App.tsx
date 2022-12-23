import type { FC } from 'react';
import LandingBanner from './components/landing/banner';
import Layout from './layout';

const App: FC = () => {
  return (
    <Layout>
      <LandingBanner />
    </Layout>
  );
};

export default App;
