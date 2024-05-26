import { motion } from "framer-motion";
import React, { useEffect, useRef} from "react";

const Quote = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textRef.current) {
        textRef.current.classList.add("line-through");
      }
    }, 4000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-2xl dark:text-light 
      lg:mt-14 md:text-lg md:-ml-10">
        <motion.div
          className="inline"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.0, ease: "linear" }}
        >
          <p className="text-3xl">&#34;SEU </p>
          <p className="text-5xl">
            <span className="text-primary dark:text-primaryDark text-5xl">
              {" "}
              &ensp; FUTURO &ensp;
            </span>
          </p>
          <p className="text-3xl text-nowrap">É&ensp;CRIADO&ensp;PELO&ensp;QUE</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: "anticipate" }}
        >
          <div className="flex flex-col justify-start">
            <div className="mt-2">
              <p className="text-5xl xl:text-4xl text-right text-nowrap">VOCÊ FAZ</p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.5, delay: 1.5, ease: "anticipate" }}
            >
              <p className="flex justify-end mt-4">NÃO</p>
            </motion.div>
          </div>
          <div className="flex flex-row">
            <div className="">
              <p className="text-9xl">{"{"}</p>
            </div>
            <div className="">
              <div className="flex">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2.5, delay: 2, ease: "anticipate" }}
                >
                  <p className="text-7xl">HOJE</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2.5, ease: "anticipate" }}
                >
                  <p className="text-7xl">{"}"}</p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 2.7, ease: "anticipate" }}
              >
                <p ref={textRef} className="text-2xl">
                  AMANHÃ&#34;
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Quote;
