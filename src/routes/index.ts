import { ServerRoute } from '@hapi/hapi';
import { loginRoute } from './login.route';
import { userRoute } from './user.route';

export const routes: Array<ServerRoute> = [
  loginRoute,
  userRoute
];