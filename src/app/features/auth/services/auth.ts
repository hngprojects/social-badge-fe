import { apiClient } from '@/lib/api/client';
import { LoginPayload, SignupPayload } from '../types';

export const signup = async (data: SignupPayload) => {
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

export const resetPassword = async ({
  token,
  new_password,
  confirm_password,
}: {
  token: string;
  new_password: string;
  confirm_password: string;
}) => {
  return apiClient<{ status: string; message: string }>('/auth/reset-password', {
    method: 'POST',
    data: { token, new_password, confirm_password },
  });
};

export const verifyEmail = async ({ token }: { token: string }) => {
  return apiClient<{ status: string; message: string }>('/auth/verify-email', {
    method: 'POST',
    data: { token },
  });
};

export const initiateGoogleAuth = (): void => {
  const BASE = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.social-badge.hng14.com/api/v1/';
  window.location.href = `${BASE}auth/google`;
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
