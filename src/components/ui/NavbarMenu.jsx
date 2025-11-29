import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-sm text-white/90 hover:text-orange-400 transition-colors"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={{ duration: 0.3 }}
                layoutId="active"
                className="bg-black/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link to={href} className="flex space-x-2 group">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-md object-cover"
      />
      <div>
        <h4 className="text-base font-semibold mb-1 text-white group-hover:text-orange-400 transition-colors">
          {title}
        </h4>
        <p className="text-white/70 text-sm max-w-[200px]">
          {description}
        </p>
      </div>
    </Link>
  );
};

