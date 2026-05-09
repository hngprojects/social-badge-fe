import { cva } from 'class-variance-authority';
import React from 'react';

type ButtonProps = { name: string } & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants = cva(
  'w-full bg-[#FA5424] text-base sm:text-[20px] font-semibold text-white py-2 px-4 rounded-full hover:bg-[#e14b1c] focus:outline-none disabled:bg-[#FF9475] disabled:cursor-not-allowed',
);

export const Button = (props: ButtonProps) => {
  return (
    <button className={buttonVariants({ className: props.className })} {...props}>
      {props.name}
    </button>
  );
};
