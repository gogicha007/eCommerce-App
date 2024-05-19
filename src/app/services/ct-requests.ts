import API_KEYS from './ct-constants';
import {
  ITFCreateCustomer,
  ITFLoginData,
  ITFUpdateAddress,
} from '../interfaces/interfaces';

export const getTokensByCredentials = async () => {
  const response = await fetch(
    `${API_KEYS.CTP_AUTH_URL}/oauth/token?grant_type=client_credentials`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${API_KEYS.CTP_CLIENT_ID}:${API_KEYS.CTP_CLIENT_SECRET}`)}`,
      },
    },
  );
  return response;
};

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

export const createCustomer = async (data: ITFCreateCustomer) => {
  console.log(data);
  const response = await fetch(
    `${API_KEYS.CTP_API_URL}/${API_KEYS.CTP_PROJECT_KEY}/customers`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${data.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.login,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      }),
    },
  );
  return response;
};

export const updateCustomer = async (data: ITFUpdateAddress) => {
  const response = await fetch(
    `${API_KEYS.CTP_API_URL}/oauth/${API_KEYS.CTP_PROJECT_KEY}/customers`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${data.token}}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        version: data.version,
        actions: [
          {
            action: 'addAddress',
            address: {
              streetName: data.streetName,
              streetNumber: data.streetNumber,
              postalCode: data.postalCode,
              city: data.city,
              country: data.country,
            },
          },
        ],
      }),
    },
  );
  return response;
};
