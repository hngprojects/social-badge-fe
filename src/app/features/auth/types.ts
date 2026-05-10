export type endpointSignupPayload = {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
};
export type SignupPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export type ApiError = {
  message: string;
  status: string;
};
