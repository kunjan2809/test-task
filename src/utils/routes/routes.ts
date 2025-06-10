import { lazy } from 'react';

const ApiData = lazy(() => import('@/pages/ApiData'));
const MultiStepForm = lazy(() => import('@/pages/MultiStepForm'));

export const routes = [
  {
    path: '/api-data',
    element: ApiData,
    title: 'API Data',
  },
  {
    path: '/multi-step-form',
    element: MultiStepForm,
    title: 'Multi Step Form',
  },
];
