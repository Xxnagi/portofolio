import { motion } from "framer-motion";

const anim = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const AnimatedText = ({ text }) => {
  return (
    <div>
      <span className="sr-only">{text}</span>
      <motion.span className="aria-hidden">
        {text.split("").map((char) => (
          <motion.span>{char}</motion.span>
        ))}
      </motion.span>
    </div>
  );
};
export default AnimatedText;
