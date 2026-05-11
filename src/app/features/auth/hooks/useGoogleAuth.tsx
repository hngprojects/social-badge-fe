import { useMutation } from '@tanstack/react-query';
import { initiateGoogleAuth } from '../services/auth';

export const useGoogleAuth = () => {
  const { mutate: loginWithGoogle, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      initiateGoogleAuth();
    },
  });

  return {
    loginWithGoogle,
    isLoading,
  };
};
