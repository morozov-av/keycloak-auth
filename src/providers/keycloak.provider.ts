import { Keycloak } from 'keycloak-backend';
import config from '../config';
import { LoginPayload } from '../interfaces';

const getKeycloakInstance = (payload?: LoginPayload) => {
	return new Keycloak({
		'realm': config.REALM as string,
		'keycloak_base_url': config.KEYCLOAK_BASE_URL as string,
		'client_id': config.CLIENT_ID as string,
		'client_secret': config.CLIENT_SECRET as string,
		'is_legacy_endpoint': false,
		'username': payload?.email,
		'password': payload?.password
	});
};

export const getAccessToken = async (payload: LoginPayload): Promise<string> => {
	const keycloak = getKeycloakInstance(payload);

	return await keycloak.accessToken.get();
};

export const verifyAccessToken = async (token: string): Promise<void> => {
	const keycloak = getKeycloakInstance();
	await keycloak.jwt.verify(token);
};



