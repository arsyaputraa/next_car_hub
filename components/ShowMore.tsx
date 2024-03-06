"use client";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import CustomButton from "./CustomButton";
import { useEffect } from "react";
import Spinner from "./Spinner";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const { ref, inView, entry } = useInView({ threshold: 0.9 });
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName, { scroll: false });
  };

  useEffect(() => {
    if (inView) {
      handleNavigation();
    }
  }, [inView]);
  return (
    <div className="w-full flex items-center justify-center gap-5 mt-10">
      {!isNext && (
        <div ref={ref}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default ShowMore;
