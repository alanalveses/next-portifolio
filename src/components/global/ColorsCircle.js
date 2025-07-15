import React from "react";
import { motion } from "framer-motion";
import { ArrowIcon } from "./Icons";

function ColorsCircle() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-4 flex items-center justify-center overflow-hidden">
      <motion.div
        onClick={scrollToTop}
        className="flex items-center justify-center mt-2"
      >
        <motion.div
          className="w-16 h-16 bg-dark text-light flex items-center justificar-center rounded-full text-2x1 font-bold p-5 border border-transparent dark:border-light"
          whileHover={{
            backgroundColor: [
              "#121212",
              "rgba(131,58,180,1)",
              "rgba(0, 0, 255, 1)",
              "rgba(0, 216, 255, 1)",
              "rgba(253,29,29,1)",
              "rgba(255, 0, 0, 1)",
              "rgba(255, 90, 0, 1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "rgba(245, 40, 145, 0.8)",
              "rgba(255, 0, 154, 1)",
              "rgba(255, 0, 255, 1)",
              "rgba(169, 255, 34, 1)",
              "rgba(46, 255, 154, 1)",
              "#121212",
            ],
            scale: 1.7,
            transition: { duration: 3,},
          }}
        >
          <ArrowIcon />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ColorsCircle;
