import Notes from './Containers/Notes';
import Archieves from './Containers/Archieves';

export const routesConfig = {
  Archieves: {
    path: '/archieves',
    element: <Archieves />,
    exact: true,
  },
  Notes: {
    path: '/',
    element: <Notes />,
    exact: true,
  },
};
