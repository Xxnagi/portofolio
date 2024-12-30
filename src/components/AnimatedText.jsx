import { motion } from "framer-motion";

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 2,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const AnimatedText = ({ text, className, onComplete }) => {
  const textArray = Array.isArray(text) ? text : [text];
  return (
    <div>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate="visible"
        onAnimationComplete={onComplete} // Trigger callback when animation finishes
        transition={{
          delayChildren: 1,
          staggerChildren: 0.1,
        }}
        className={`aria-hidden ${className}`}
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={lineIndex}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={wordIndex}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block"
                    variants={defaultAnimation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </div>
  );
};

export default AnimatedText;
