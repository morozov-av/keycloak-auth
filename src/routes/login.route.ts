import { ServerRoute } from '@hapi/hapi';
import * as Joi from 'joi';
import { loginController } from '../controllers';

export const loginRoute: ServerRoute = {
	method: 'POST',
	path: '/login',
	options: {
		plugins: {
			'hapi-swagger': {
				security: []
			}
		},
		auth: false,
		id: 'login',
		description: 'Login endpoint',
		notes: 'returns jwt token',
		tags: [ 'api' ],
		handler: loginController,
		validate: {
			payload: Joi.object({
				email: Joi.string().email().required(),
				password: Joi.string().required()
			})
		}
	}
};
