import { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react";

export type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  rightIcon?: string;
};

export type FooterLink = {
  title: string;
  links: { title: string; url: string }[];
};

export type SearchManufacturerProps = {
  setManufacturer: Dispatch<SetStateAction<string>>;
  manufacturer: string;
};

export type Car = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type SearchButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type CarFilterProps = {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number;
  model?: string;
};

export type HomePageProps = {
  searchParams: CarFilterProps;
};

export type CustomFilterProps = {
  title: string;
  options: FilterOptions[];
};

export type FilterOptions = { title: string; value: string };

export type ShowMoreProps = { pageNumber: number; isNext: boolean };
