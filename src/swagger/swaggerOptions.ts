import * as HapiSwagger from 'hapi-swagger';
import { version } from '../../package.json';

export const swaggerOptions: HapiSwagger.RegisterOptions = {
	info: {
		title: 'Test API Documentation',
		version: version
	},
	tags: [
		{
			name: 'api',
			description: 'This is the basic api'
		}
	],
	grouping: 'tags',
	tagsGroupingFilter: (tag)=> !!tag,
	documentationPath: '/swagger',
	securityDefinitions: {
		jwt: {
			type: 'apiKey',
			name: 'Authorization',
			in: 'header'
		}
	},
	security: [ { jwt: [] } ]
};
