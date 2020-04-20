import React, { lazy, Suspense } from 'react';
import { MDBSpinner } from 'mdbreact';

const loader = () => <MDBSpinner />;

const loadable = (importFunc) => {
  const LazyComponent = lazy(importFunc);

  // eslint-disable-next-line react/display-name
  return (props) => (
    <Suspense fallback={loader}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
