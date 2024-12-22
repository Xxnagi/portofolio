import { motion } from "motion/react";
const Button = ({ isActive, setIsActive }) => {
  return (
    <div
      className="h-10 w-24 absolute top-10 right-10 rounded-full cursor-pointer  overflow-hidden"
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
      >
        <div className="w-full h-full bg-black text-white  flex items-center justify-center">
          <p>MENU</p>
        </div>

        <div className="w-full h-full absolute top-full flex items-center justify-center bg-white text-black">
          <p>CLOSE</p>
        </div>
      </motion.div>
    </div>
  );
};
export default Button;
