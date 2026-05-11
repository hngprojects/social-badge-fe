'use client';
import { AuthInput } from '@/app/features/auth/components/auth-input';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { useForm, useWatch } from 'react-hook-form';

const Page = () => {
  const {
    register,
    control,
    formState: { errors, touchedFields },
  } = useForm<{ password: string; confirmPassword: string }>({ mode: 'onChange' });
  const password = useWatch({
    control,
    name: 'password',
  });

  const setBorder = password && !errors.password ? 'border-[#22C55E]' : '';

  return (
    <div className="h-full flex flex-col justify-center gap-7">
      <div className="page-info sm:leading-20">
        <h1 className="page-title font-semibold text-[40px] sm:text-[52px] ">Reset Password</h1>
        <p className="font-medium text-base sm:text-[18px] text-[#978B8A] w-[70%]">
          Enter your new password below. Ensure the password matches{' '}
        </p>
      </div>

      <div className="login-form bg-[#F5F5F5] rounded-lg px-5 py-6 flex flex-col gap-7">
        <form className=" flex flex-col gap-7">
          <div className="flex flex-col gap-4">
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
                className={errors.password ? 'border-[#EF4444]' : setBorder}
              />
              {errors.password && (
                <p className="text-[#EF4444] text-xs mt-1">{errors.password.message}</p>
              )}
            </div>

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
          </div>

          <Button type="submit" name="Reset & save password" value={'Reset & save password'} />
        </form>

        <div className="text-center">
          <p className="text-md">
            Go back to{' '}
            <a href="/login" className="font-bold text-[#FA5424] hover:text-[#e14b1c]">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
