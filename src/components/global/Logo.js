import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logoRedu from "../../../public/images/logo-redu.png";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

const Logo = () => {
  const [bg, setBg] = useState("");
  const intervalRef = useRef(null);
  const indexRef = useRef(0);

  const images = [
    "/images/svgs/mobile-development.svg",
    "/images/svgs/web-development.svg",
    "/images/svgs/html5.svg",
    "/images/svgs/javascript.svg",
    "/images/svgs/react.svg",
    "/images/svgs/node.svg",
    "/images/svgs/next.svg",
    "/images/svgs/tailwind.svg",
    "/images/svgs/github.svg",
  ];

  const startImageCycle = () => {
    if (intervalRef.current) return; // Impede múltiplos intervalos

    setBg(images[0]);
    indexRef.current = 1;

    intervalRef.current = setInterval(() => {
      setBg(images[indexRef.current]);
      indexRef.current = (indexRef.current + 1) % images.length;
    }, 1000);
  };

  const stopImageCycle = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setBg("");
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const [mode] = useThemeSwitcher();

  return (
    <div className="flex items-center justify-center mt-2 xl:hidden lg:flex">
      <Link
        href="/"
        onMouseEnter={startImageCycle}
        onMouseLeave={stopImageCycle}
        className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden border border-solid border-transparent bg-dark dark:bg-light"
        style={{
          backgroundImage: bg ? `url(${bg})` : "none",
          backgroundSize: "60% 60%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: mode === "dark" ? "invert(1)" : "invert(0)",
        }}
      >
        <Image
          src={logoRedu}
          alt={"Logo"}
          className="p-1 w-full h-auto z-10 relative"
        />
      </Link>
    </div>
  );
};

export default Logo;