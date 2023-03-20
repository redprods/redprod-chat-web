import React, { lazy, Suspense } from 'react';

const LazyMenuProfile = lazy(() => import('./MenuProfile'));

const MenuProfile = props => (
  <Suspense fallback={null}>
    <LazyMenuProfile {...props} />
  </Suspense>
);

export default MenuProfile;
