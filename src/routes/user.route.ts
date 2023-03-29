import { ServerRoute } from '@hapi/hapi';
import { userController } from '../controllers';

export const userRoute: ServerRoute = {
	method: 'GET',
	path: '/user',
	options: {
		auth: 'jwt',
		id: 'user',
		description: 'User endpoint',
		notes: 'returns user info',
		tags: [ 'api' ],
		handler: userController
	}
};
