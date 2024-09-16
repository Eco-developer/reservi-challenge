import axios from 'axios';
import { BASE_URL } from '@/const/baseUrl';

const instance = axios.create({baseURL: BASE_URL});

export const handleRequest = async ({
    url,
    params = {},
    method = 'GET',
  })=> {
    try {
      const response = await instance({
        url,
        method,
        params,
      });
      return {
        data: response.data,
        error: null,
      };

    } catch (err) {
      return {
        data: null,
        error: err?.response?.data
      };
    }
};