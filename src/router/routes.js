/**
 * basic routes
 */

import Home from '@/components/views/home';
import Auth from '@/components/views/auth';

export default [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
];
