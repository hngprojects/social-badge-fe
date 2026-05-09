import { AuthInput } from '@/app/features/auth/components/auth-input';
import { Button } from '@/components/ui/button';

const page = () => {
  return (
    <div className="h-full flex flex-col justify-center gap-7">
      <div className="page-info sm:leading-20">
        <h1 className="page-title font-semibold text-[40px] sm:text-[52px] ">Reset Password</h1>
        <p className="font-medium text-base sm:text-[18px] text-[#978B8A] w-[70%]">
          Enter your registered email address to receive password reset link{' '}
        </p>
      </div>

      <div className="login-form bg-[#F5F5F5] rounded-lg px-5 py-6 flex flex-col gap-7">
        <form className=" flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <AuthInput type="email" placeholder="usersocialbadge@hng.com" label={'Email'} />
          </div>

          <Button type="submit" name="Reset Password" />
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

export default page;
