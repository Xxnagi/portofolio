import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
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
              <h2 className="text-lg text-blue-400 font-medium">Hello, I'm</h2>
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

          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="relative z-10 rounded-2xl overflow-hidden border-4 border-blue-400/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/gambar.jpg"
                width={600}
                height={600}
                alt="Mustafa Ali"
                className="rounded-2xl object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </motion.div>

            {/* Background decoration */}
            <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl rounded-full" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default index;
