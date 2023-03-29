import { Request } from '@hapi/hapi';

export const userController = (request: Request): string => {
	return JSON.stringify(request.payload);
};
