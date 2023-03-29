import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import { LoginPayload } from '../interfaces';
import { getAccessToken } from '../providers/keycloak.provider';

export const loginController = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
	try {
		const token = await getAccessToken(request.payload as LoginPayload);
		return h.response(`Bearer ${token}`).code(200);
	} catch (e: unknown) {
		const message = e instanceof Error ? e.message : 'Something went wrong';
		return h.response(message).code(401);
	}
};
