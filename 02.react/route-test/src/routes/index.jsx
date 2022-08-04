import * as React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { DashboardMessages } from '../pages/dashboard/DashboardMessages';
import { DashboardTasks } from '../pages/dashboard/DashboardTasks';
import MovieDetail from '../pages/movies/MovieDetail';
import Movies from '../pages/movies/Movies';

export function Router() {
  let element = useRoutes([
    {
      path: '/dashboard',
      children: [
        { element: <Navigate to="/dashboard/main" replace /> },
        { path: 'main', element: <Dashboard /> },
        {
          path: 'messages',
          element: <DashboardMessages />
        },
        { path: 'tasks', element: <DashboardTasks /> }
      ]
    },
    { path: 'movies', element: <Movies /> },
    {
      path: '/movies',
      children: [
        { element: <Navigate to="/movies/main" replace /> },
        { path: 'main', element: <Movies /> },
        {
          path: ':movieId',
          element: <MovieDetail />
        }
      ]
    },
    { path: 'about', element: <AboutPage /> }
  ]);

  return element;
}
