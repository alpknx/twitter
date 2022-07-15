import Home from '../Home/Home';
import Login from '../Login/Login';

export interface Route {
  path: string;
  element: React.ElementType;
}

export enum RouteNames {
  LOGIN = '/login',
  HOME = '/',
}

export const publicRoutes: Route[] = [
  { path: RouteNames.LOGIN, element: Login },
];

export const privateRoutes: Route[] = [
  { path: RouteNames.HOME, element: Home },
];
