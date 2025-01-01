import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Curve from "@/components/Layout/Curve";

const index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-6 h-6" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="w-6 h-6" />, href: "#", label: "Email" },
  ];

  return (
    <Curve>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white z-50">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
          className="container mx-auto px-4 py-20 min-h-screen flex flex-col justify-center"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-lg text-blue-400 font-medium">
                  Hello, I'm
                </h2>
                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Mustafa Ali
                </h1>
                <p className="text-xl text-gray-300">
                  Full Stack Developer & UI/UX Enthusiast
                </p>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed max-w-xl"
              >
                I craft exceptional digital experiences through clean code and
                creative design. Specializing in modern web technologies and
                responsive applications that make an impact.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-medium transition-all transform hover:scale-105">
                  View Projects
                </button>
                <button className="px-8 py-3 border border-blue-400 hover:bg-blue-400/10 rounded-full font-medium transition-all">
                  Contact Me
                </button>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-blue-900/30 rounded-lg hover:bg-blue-800/50 transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Curve>
  );
};

export default index;
