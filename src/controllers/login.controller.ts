import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

export const loginController = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
	return h.response(JSON.stringify(request.payload)).code(200);
};
