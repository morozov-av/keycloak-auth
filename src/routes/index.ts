import { ServerRoute } from '@hapi/hapi';
import { loginRoute } from './login.route';

export const routes: Array<ServerRoute> = [
	loginRoute
];