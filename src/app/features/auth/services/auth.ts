import { apiClient } from '@/lib/api/client';
import { endpointSignupPayload, LoginPayload } from '../types';

export const signup = async (data: endpointSignupPayload) => {
  return apiClient('/auth/signup', {
    method: 'POST',
    data,
  });
};
export const login = async (data: LoginPayload) => {
  return apiClient('/auth/login', {
    method: 'POST',
    data,
  });
};

export const forgotPassword = async ({ email }: { email: string }) => {
  return apiClient<{ status: string; message: string }>('/auth/forgot-password', {
    method: 'POST',
    data: { email },
  });
};

export const resetPassword = async ({ password, token }: { password: string; token: string }) => {
  return apiClient<{ status: string; message: string }>('/auth/reset-password', {
    method: 'POST',
    data: { password, token },
  });
};

export const verifyEmail = async ({ token }: { token: string }) => {
  return apiClient<{ status: string; message: string }>('/auth/verify-email', {
    method: 'POST',
    data: { token },
  });
};

// export const checkEmailAvailability = async (email: string) => {
//   return apiClient<CheckEmailResponse>(`/auth/check-email`, {
//     method: 'POST',
//     data: { email },
//   });
// };

// export const logout = async () => {
//   return apiClient('/auth/logout', {
//     method: 'POST',
//   });
// };

// export const getCurrentUser = async () => {
//   return apiClient<AuthResponse>('/auth/me');
// };
