'use client';
import { AuthInput } from '@/app/features/auth/components/auth-input';
import { Button } from '@/app/features/auth/components/button';
import { GoogleAuth } from '@/app/features/auth/components/google-auth';
import { UserAuth } from '@/app/features/auth/types';
import { Icons } from '@/components/ui/icons';
import { debounce } from '@/lib/utils';
import { useMemo, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

const Page = () => {
  const [emailStatus, setEmailStatus] = useState<'idle' | 'checking' | 'available' | 'taken'>(
    'idle',
  );
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, touchedFields },
  } = useForm<UserAuth>({ mode: 'onChange' });

  const password = useWatch({
    control,
    name: 'password',
  });

  const emailStatusStyle = emailStatus === 'available' ? 'border-[#22C55E]' : '';

  const debouncedEmailCheck = useMemo(
    () =>
      debounce(async () => {
        setEmailStatus('checking');
        // replace with the actual api call to check email availability
        await new Promise((resolve) => setTimeout(resolve, 500));
        const exists = false;

        setEmailStatus(exists ? 'taken' : 'available');
      }, 500),
    [],
  );

  const onSubmit = (data: UserAuth) => {
    console.log(data);
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
                  {...register('firstName', { required: 'First name is required' })}
                  type="first-name"
                  placeholder="John"
                  label={'First Name'}
                  className={errors.firstName ? 'border-[#EF4444]' : ''}
                />
                {errors.firstName && (
                  <p className="text-[#EF4444] text-xs mt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div className="w-full">
                <AuthInput
                  {...register('lastName', { required: 'Last name is required' })}
                  type="last-name"
                  placeholder="Doe"
                  label={'Last Name'}
                  className={errors.lastName ? 'border-[#EF4444]' : ''}
                />
                {errors.lastName && (
                  <p className="text-[#EF4444] text-xs mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="w-full">
              <AuthInput
                {...register('email', {
                  required: 'Email is required',
                  onChange: (e) => {
                    const value = e.target.value;

                    if (!value) {
                      setEmailStatus('idle');
                      return;
                    }

                    debouncedEmailCheck();
                  },
                })}
                type="email"
                placeholder="usersocialbadge@hng.com"
                label={'Email'}
                id="email"
                icon={emailStatus === 'available' ? <Icons.Check stroke="#22C55E" /> : null}
                className={
                  errors.email || emailStatus === 'taken' ? 'border-[#EF4444]' : emailStatusStyle
                }
              />
              {errors.email && (
                <p className="text-[#EF4444] text-xs mt-1">{errors.email.message}</p>
              )}
              {emailStatus === 'taken' && (
                <p className="text-[#EF4444] text-xs mt-1">Email is already in use</p>
              )}
              {emailStatus === 'available' && !errors.email && (
                <p className="text-[#15803D] text-xs mt-1">Email address is available</p>
              )}
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
                      /[!@#$%^&*]/.test(value) ||
                      'Password should have at least a special character',

                    minLength: (value) =>
                      value.length >= 6 || 'Password should be at least six characters',
                  },
                  required: 'Password is required',
                })}
                type="password"
                placeholder="***********"
                label={'Password'}
                icon={password && !errors.password ? <Icons.Check stroke="#22C55E" /> : null}
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
                  type="password"
                  placeholder="***********"
                  label={'Confirm Password'}
                  icon={errors.confirmPassword ? <Icons.InfoCircle /> : null}
                  className={errors.confirmPassword ? 'border-[#EF4444]' : ''}
                />
                {errors.confirmPassword && (
                  <p className="text-[#EF4444] text-xs mt-1">{errors.confirmPassword.message}</p>
                )}

                {!errors.confirmPassword && touchedFields.confirmPassword && (
                  <p className="text-[#15803D] text-xs mt-1">Passwords match!</p>
                )}
              </div>

              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded-[5px] border border-[#727272] accent-[#FA5424]"
                  name="remember-me"
                  id="remember-me"
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

          <Button type="submit" disabled={!isChecked} name="Sign Up" />
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
    </>
  );
};

export default Page;
