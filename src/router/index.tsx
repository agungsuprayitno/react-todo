import type { FC } from 'react';
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';

import Layouts from 'layouts';
import Login from 'module/login/pages';
import WrapperRouteComponent from './config';

const Details = lazy(async () => import('pages/Details'));
const Gallery = lazy(async () => import('pages/Gallery'));

const routeList: RouteObject[] = [

  {
    path: "/",
    element:<WrapperRouteComponent auth ><Layouts /></WrapperRouteComponent>,
    children: [
      {
        path: "/",
        element: <WrapperRouteComponent><Gallery /></WrapperRouteComponent>,
      },
      {
        path: "/gallery",
        element: <WrapperRouteComponent><Gallery /></WrapperRouteComponent>,
      },
      {
        path: "/:fruitName",
        element: <WrapperRouteComponent><Details /></WrapperRouteComponent>,
      },
      // {
      //   path: "*",
      //   element: <WrapperRouteComponent><NotFound /></WrapperRouteComponent>,
      // },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  // {
  //   path: ":fruitName",
  //   element: <Details />,
  // },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;