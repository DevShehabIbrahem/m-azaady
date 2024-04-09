import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  children: ReactNode;
  width?: "w-full" | "w-fit";
}

const Button = (props: IProps) => {
  const defaultclass =
    "bg-gradient-to-r from-[#d82947] to-orange-400 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400";
  const { className, children, width = "w-fit", ...rest } = props;

  return (
    <button className={`${defaultclass} ${width} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
