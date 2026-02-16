import apiClient from './apiClient';

export const authApi = {
  login: (data) => apiClient.post('/auth/login', data),
  register: (data) => apiClient.post('/auth/register', data),
  forgotPassword: (data) => apiClient.post('/auth/forgot-password', data),
  resetPassword: (token, data) => apiClient.post(`/auth/reset-password/${token}`, data),
};

export const productApi = {
  list: (params) => apiClient.get('/products', { params }),
  detail: (id) => apiClient.get(`/products/${id}`),
};
