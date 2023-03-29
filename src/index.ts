import * as Hapi from '@hapi/hapi';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as AuthBearer from 'hapi-auth-bearer-token';
import * as HapiSwagger from 'hapi-swagger';
import { swaggerOptions } from './swagger/swaggerOptions';
import { routes } from './routes';
import { validate } from './validate';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

(async (): Promise<void> => {
	const server: Hapi.Server = new Hapi.Server( {
		host,
		port,
		debug: { request: [ 'error' ] },
		routes: {
			cors: true,
			response: {
				modify: true
			}
		}
	});

	await server.register([ AuthBearer, Inert, Vision ]);

	server.auth.strategy('jwt', 'bearer-access-token',
		{
			validate
		});

	server.auth.default('jwt');

	await server.register([ Vision, { plugin: HapiSwagger, options: swaggerOptions } ]);


	server.route(routes);

	await server.start();
	console.info('Server running at:', server.info.uri);
	console.info(`Swagger UI: ${server.info.uri}/swagger`);
})();
