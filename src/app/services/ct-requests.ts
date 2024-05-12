import API_KEYS from './ct-constants';
import { ITFLoginData } from '../interfaces/interfaces';

export const getTokensByPass = async (data: ITFLoginData) => {
  const response = await fetch(
    `${API_KEYS.CTP_AUTH_URL}/oauth/${API_KEYS.CTP_PROJECT_KEY}/customers/token?grant_type=password&username=${data.login}&password=${data.password}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${API_KEYS.CTP_CLIENT_ID}:${API_KEYS.CTP_CLIENT_SECRET}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  return response;
};

export default getTokensByPass;
