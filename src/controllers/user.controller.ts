import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

export const userController = (request: Request, h: ResponseToolkit): ResponseObject => {
	const { name, email } = request.auth.artifacts;
	return h.response({ name, email }).code(200);
};
