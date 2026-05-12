'use client';
import { AuthInput } from '@/app/features/auth/components/auth-input';
import { AuthModal } from '@/app/features/auth/components/auth-modal';
import { Button } from '@/app/features/auth/components/button';
import { GoogleAuth } from '@/app/features/auth/components/google-auth';
import { useSignup } from '@/app/features/auth/hooks/useSignup';
import { SignupPayload } from '@/app/features/auth/types';
import { Icons } from '@/components/ui/icons';
import { MiniSpinner } from '@/components/ui/mini-spinner';
import {
  hasPasswordSpecialCharacter,
  PASSWORD_SPECIAL_CHAR_MESSAGE,
} from '@/lib/validation/password';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

const Page = () => {
  // THIS IS COMMENTED OUT BECAUSE THE API ENDPOINT FOR CHECKING EMAIL AVAILABILITY IS NOT YET IMPLEMENTED.
  // const [emailStatus, setEmailStatus] = useState<'idle' | 'checking' | 'available' | 'taken'>(
  //   'idle',
  // );
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm<SignupPayload>({ mode: 'onChange' });
  const { signup, isLoading } = useSignup();

  const password = useWatch({
    control,
    name: 'password',
  });
  const email = useWatch({
    control,
    name: 'email',
  });
  // THIS IS COMMENTED OUT BECAUSE THE API ENDPOINT FOR CHECKING EMAIL AVAILABILITY IS NOT YET IMPLEMENTED. UNCOMMENT AND REPLACE THE DEBOUNCED FUNCTION WITH THE ACTUAL API CALL ONCE THE ENDPOINT IS READY.
  // const emailStatusStyle = emailStatus === 'available' ? 'border-[#22C55E]' : '';

  // const debouncedEmailCheck = useMemo(
  //   () =>
  //     debounce(async () => {
  //       setEmailStatus('checking');
  //       // replace with the actual api call to check email availability
  //       await new Promise((resolve) => setTimeout(resolve, 500));
  //       const exists = false;

  //       setEmailStatus(exists ? 'taken' : 'available');
  //     }, 500),
  //   [],
  // );

  const onSubmit = (data: SignupPayload) => {
    console.log(data);
    signup(
      {
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        password: data.password,
      },
      {
        onSuccess: () => {
          setShowModal(true);
        },
      },
    );
  };

  return (
    <>
      <div className="page-info sm:leading-20">
        <h1 className="page-title font-semibold text-[40px] sm:text-[52px] ">Create Account</h1>
        <p className="font-medium text-base sm:text-[18px] text-[#978B8A]">
          Sign up and create an account with Social Badge{' '}
        </p>
      </div>

      <div className="login-form bg-[#F5F5F5] rounded-lg px-5 py-6 flex flex-col gap-7">
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <div className="first flex justify-between gap-4 w-full ">
              <div className="w-full">
                <AuthInput
                  {...register('first_name', { required: 'First name is required' })}
                  type="first-name"
                  placeholder="John"
                  label={'First Name'}
                  disabled={isSubmitting || isLoading}
                  icon={errors.first_name ? <Icons.InfoCircle /> : null}
                  className={errors.first_name ? 'border-[#EF4444]' : ''}
                />
                {errors.first_name && (
                  <p className="text-[#EF4444] text-xs mt-1">{errors.first_name.message}</p>
                )}
              </div>

              <div className="w-full">
                <AuthInput
                  {...register('last_name', { required: 'Last name is required' })}
                  type="last-name"
                  placeholder="Doe"
                  label={'Last Name'}
                  disabled={isSubmitting || isLoading}
                  icon={errors.last_name ? <Icons.InfoCircle /> : null}
                  className={errors.last_name ? 'border-[#EF4444]' : ''}
                />
                {errors.last_name && (
                  <p className="text-[#EF4444] text-xs mt-1">{errors.last_name.message}</p>
                )}
              </div>
            </div>

            <div className="w-full">
              <AuthInput
                {...register('email', {
                  required: 'Email is required',
                  // THIS IS COMMENTED OUT BECAUSE THE API ENDPOINT FOR CHECKING EMAIL AVAILABILITY IS NOT YET IMPLEMENTED.
                  // onChange: (e) => {
                  //   const value = e.target.value;

                  //   if (!value) {
                  //     setEmailStatus('idle');
                  //     return;
                  //   }

                  //   debouncedEmailCheck();
                  // },
                })}
                type="email"
                disabled={isSubmitting || isLoading}
                placeholder="usersocialbadge@hng.com"
                label={'Email'}
                id="email"
                icon={errors.email ? <Icons.InfoCircle /> : null}
                className={errors.email ? 'border-[#EF4444]' : ''}
              // THIS IS COMMENTED OUT BECAUSE THE API ENDPOINT FOR CHECKING EMAIL AVAILABILITY IS NOT YET IMPLEMENTED.
              // icon={emailStatus === 'available' ? <Icons.Check stroke="#22C55E" /> : null}
              // className={
              //   errors.email || emailStatus === 'taken' ? 'border-[#EF4444]' : emailStatusStyle
              // }
              />
              {errors.email && (
                <p className="text-[#EF4444] text-xs mt-1">{errors.email.message}</p>
              )}

              {/*
               // THIS IS COMMENTED OUT BECAUSE THE API ENDPOINT FOR CHECKING EMAIL AVAILABILITY IS NOT YET IMPLEMENTED.
               {emailStatus === 'taken' && (
                <p className="text-[#EF4444] text-xs mt-1">Email is already in use</p>
              )}
              {emailStatus === 'available' && !errors.email && (
                <p className="text-[#15803D] text-xs mt-1">Email address is available</p>
              )} */}
            </div>

            <div className="">
              <AuthInput
                {...register('password', {
                  validate: {
                    hasUpperCase: (value) =>
                      /[A-Z]/.test(value) || 'Password should have at least a CAPITAL letter',

                    hasLowerCase: (value) =>
                      /[a-z]/.test(value) || 'Password should have at least a small letter',

                    hasNumber: (value) =>
                      /\d/.test(value) || 'Password should have at least a number',

                    hasSpecialCharacter: (value) =>
                      hasPasswordSpecialCharacter(value) || PASSWORD_SPECIAL_CHAR_MESSAGE,

                    minLength: (value) =>
                      value.length >= 8 || 'Password should be at least eight characters',
                  },
                  required: 'Password is required',
                })}
                disabled={isSubmitting || isLoading}
                type="password"
                placeholder="***********"
                label={'Password'}
                className={
                  errors.password
                    ? 'border-[#EF4444]'
                    : password && !errors.password
                      ? 'border-[#22C55E]'
                      : ''
                }
              />
              {errors.password && (
                <p className="text-[#EF4444] text-xs mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="">
              <div className="w-full">
                <AuthInput
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value) => value === password || 'Passwords do not match!',
                  })}
                  disabled={isSubmitting || isLoading}
                  type="password"
                  placeholder="***********"
                  label={'Confirm Password'}
                  icon={errors.confirmPassword ? <Icons.InfoCircle /> : null}
                  className={
                    errors.confirmPassword
                      ? 'border-[#EF4444]'
                      : !errors.confirmPassword && touchedFields.confirmPassword
                        ? 'border-[#22C55E]'
                        : ''
                  }
                />
                {errors.confirmPassword && (
                  <p className="text-[#EF4444] text-xs mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>

              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded-[5px] border border-[#727272] accent-[#FA5424]"
                  name="remember-me"
                  id="remember-me"
                  disabled={isSubmitting || isLoading}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  checked={isChecked}
                />
                <label htmlFor="remember-me" className="text-xs text-[#978B8A]">
                  I agree to Social Badge Terms of Service and Privacy Policy. I may receive product
                  update emails.
                </label>
              </div>
            </div>
          </div>

          <Button type="submit" disabled={!isChecked || isSubmitting || isLoading}>
            {isLoading ? (
              <>
                {' '}
                <MiniSpinner /> Signing up...{' '}
              </>
            ) : (
              'Sign Up'
            )}
          </Button>
        </form>

        {/* google auth */}
        <GoogleAuth />

        <div className="text-center">
          <p className="text-md">
            Don&apos;t have an account?{' '}
            <a href="/login" className="font-bold text-[#FA5424] hover:text-[#e14b1c]">
              Log in
            </a>
          </p>
        </div>
      </div>

      {showModal && (
        <AuthModal
          closeModal={() => setShowModal(false)}
          email={email}
          title="Verify your email addresss"
          description={
            <>
              <p>We have sent a link to verify your email address. </p>
              <p>Check your email for the link to verify your email address</p>
            </>
          }
        />
      )}
    </>
  );
};

export default Page;
