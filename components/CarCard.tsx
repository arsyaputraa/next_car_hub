"use client";

import { Car } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
type CarCardProps = { car: Car };

const CarCard = ({ car }: CarCardProps) => {
  const carRent = calculateCarRent(car.city_mpg, car.year);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {car.make} {car.model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          alt="car model"
          src="https://cdn.imagin.studio/getimage"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2 ">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] ">
              {(car.transmission = "a" ? "Automatic" : "Manual")}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px] ">{car.drive.toUpperCase()}</p>
          </div>
          <div className="flex  flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              width={20}
              height={20}
              alt="gas"
              className="w-auto h-auto"
            />
            <p className="text-[14px] ">{car.city_mpg} MPG</p>
          </div>
        </div>
        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomButton
            text="View More"
            className="w-full py-[16px] bg-primary-blue rounded-full text-white text-[14px] leading-[17px] font-bold"
            onClick={() => setIsOpen(true)}
            rightIcon="/right-arrow.svg"
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
