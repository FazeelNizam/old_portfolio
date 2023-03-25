import React from "react";

import { motion } from "framer-motion";

const Frame = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <>
      <motion.div
        className="backdrop"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.img
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          src={selectedImg}
        />
        <motion.button
          onClick={() => setSelectedImg(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          X
        </motion.button>
      </motion.div>
    </>
  );
};

export default Frame;
