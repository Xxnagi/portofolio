import { useState } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "motion/react";
import Nav from "./Nav";

const variants = {
  open: {
    width: 480,
    height: 650,
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] },
  },
  closed: {
    width: 96,
    height: 40,
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, ease: [0.83, 0, 0.17, 1] },
  },
};

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="fixed w-full flex justify-end p-10">
        <motion.div
          className="w-[480px] h-[650px] relative bg-white rounded-[25px] border"
          variants={variants}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>
            {isActive && <Nav setIsActive={setIsActive} />}
          </AnimatePresence>
        </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
      </div>
    </>
  );
};
export default Menu;
