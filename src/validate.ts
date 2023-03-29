import { decode } from 'jsonwebtoken';
import { verifyAccessToken } from './providers/keycloak.provider';

export const validate = async function (_, token: string) {
  try {
    await verifyAccessToken(token);
    return { isValid: true, credentials: { token }, artifacts: decode(token) };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Something went wrong';
    return { isValid: false, credentials: { token }, artifacts: { error: message } };
  }
};