import React, { lazy, Suspense } from 'react';

const LazyHomePageText = lazy(() => import('./HomePageText'));

const HomePageText = props => (
  <Suspense fallback={null}>
    <LazyHomePageText {...props} />
  </Suspense>
);

export default HomePageText;
