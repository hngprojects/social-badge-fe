import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../services/auth';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { ApiError } from '../types';

export const useLogin = () => {
  const {
    mutate: login,
    isPending: isLoading,
    isError,
  } = useMutation({
    mutationFn: loginApi,

    onSuccess: (data) => {
      console.log(data);
      toast.success('Login successful!');
    },

    onError: (error) => {
      const axiosError = error as AxiosError<ApiError>;

      const message = axiosError.response?.data?.message || 'Login failed. Please try again.';

      toast.error(message);
    },
  });

  return {
    login,
    isLoading,
    isError,
  };
};
