"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      style={{
        borderRadius: "4px",
        boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",
      }}
      className="px-12 py-20 bg-gray-800 border border-yellow-600  text-slate-300"
    >
      <motion.h2 layout="position">Framer Motion</motion.h2>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-96"
        >
          <p className="pt-4 leading-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            consequatur et praesentium blanditiis incidunt, earum suscipit harum
            fugiat vitae aliquid.
          </p>
          <p className="pt-4 leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            beatae.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;
