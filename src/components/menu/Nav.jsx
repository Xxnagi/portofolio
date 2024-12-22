import Link from "next/link";
import { Links } from "../../data/links";
import { motion } from "framer-motion";

const perspective = {
  initial: { opacity: 0, rotateX: 90, translateY: 80, translateX: -20 },
  enter: (index) => ({
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      delay: 0.25 + index * 0.1,
    },
    translateY: 0,
    translateX: 0,
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] },
  },
};

const Nav = ({ setIsActive }) => {
  return (
    <div className="h-full box-border pt-[100px] px-[40px] pb-[50px] ">
      <div className="text-black text-5xl flex flex-col gap-2.5 font-semibold">
        {Links.map((link, index) => (
          <div key={index} className="">
            <motion.div
              custom={index}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Link
                href={link.href}
                className=""
                onClick={() => setIsActive(false)}
              >
                {link.title}
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};
export default Nav;
