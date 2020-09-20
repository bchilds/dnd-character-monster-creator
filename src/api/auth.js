import apiBase from './api-base';
export const googleLogin = () => apiBase.get('/auth/google');
