import * as Hapi from '@hapi/hapi';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as HapiSwagger from 'hapi-swagger';
import { swaggerOptions } from './swagger/swaggerOptions';
import { routes } from './routes';

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

	await server.register([ Inert, Vision, { plugin: HapiSwagger, options: swaggerOptions } ]);

	server.route(routes);

	await server.start();
	console.info('Server running at:', server.info.uri);
})();
