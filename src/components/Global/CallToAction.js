import React from "react";
import Link from "next/link";

const CallToAction = ({
  title = "Você se Interessou?",
  subtitle = "Tem algum projeto a ser construído?",
  buttonText = "Vamos Trabalhar Juntos!",
  link = "/contact",
}) => {
  return (
    <div className="w-full relative py-10 px-20 mt-24 mb-20 flex items-center justify-between rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light lg:px-10 sm:-ml-4">
        
      <div className="absolute top-1 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <div className="absolute top-3 -right-5 -z-20 w-[102%] h-[103%] rounded-[2rem] bg-gray-700 rounded-br-3xl" />
      <div className="absolute top-5 -right-7 -z-30 w-[102%] h-[103%] rounded-[2rem] bg-gray-600 rounded-br-3xl" />
      <div className="absolute top-7 -right-9 -z-40 w-[102%] h-[103%] rounded-[2rem] bg-gray-300 rounded-br-3xl" />

      <div className="px-20 lg:px-14 md:px-0">
        <h3 className="text-dark dark:text-light text-4xl font-medium md:text-2xl xs:text-sm">
          {title}
        </h3>
        <p className="text-dark dark:text-light text-lg md:text-sm xs:text-xs">
          {subtitle}
        </p>
      </div>

      <Link
        href={link}
        className="flex items-center bg-dark text-light p-2.5 px-5
          rounded-lg text-base font-semibold text-nowrap hover:bg-light hover:text-dark
          border-2 border-solid border-transparent hover:border-dark
          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
          md:ml-4 sm:text-xs xs:text-wrap xs:text-center"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default CallToAction;
