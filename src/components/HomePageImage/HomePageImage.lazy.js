import React, { lazy, Suspense } from 'react';

const LazyHomePageImage = lazy(() => import('./HomePageImage'));

const HomePageImage = props => (
  <Suspense fallback={null}>
    <LazyHomePageImage {...props} />
  </Suspense>
);

export default HomePageImage;
