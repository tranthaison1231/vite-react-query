import { Suspense, lazy } from 'react';
import Loading from '#/shared/components/common/Loading';

const loadable = (
  importFunc: Promise<{ default: any }>,
  { fallback } = { fallback: <Loading /> },
) => {
  const LazyComponent = lazy(() => importFunc);
  return (props: unknown) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
