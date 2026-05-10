import { useMutation } from '@tanstack/react-query';
import { resetPassword as resetPasswordApi } from '../services/auth';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { ApiError } from '../types';

export const useResetPassword = () => {
  const {
    mutate: resetPassword,
    isPending: isLoading,
    isError,
  } = useMutation({
    mutationFn: resetPasswordApi,

    onSuccess: (data: { message?: string }) => {
      console.log(data);
      toast.success(data?.message || 'Password reset successful! Please check your email.');
    },
    onError: (error) => {
      const axiosError = error as AxiosError<ApiError>;

      const message =
        axiosError.response?.data?.message || 'Failed to reset password. Please try again.';

      toast.error(message);
    },
  });

  return {
    resetPassword,
    isLoading,
    isError,
  };
};
