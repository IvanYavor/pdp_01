import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface FilterProps {
  searchValue?: string;
  year?: number;
  type?: string;
  genre?: number;
}
