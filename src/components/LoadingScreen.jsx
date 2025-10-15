import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadComplete }) => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setLoading(false);
                        onLoadComplete();
                    }, 800);
                    return 100;
                }
                return prev + Math.random() * 12;
            });
        }, 120);

        return () => clearInterval(interval);
    }, [onLoadComplete]);

    const arrowVariants = {
        hidden: {
            pathLength: 0,
            opacity: 0
        },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 0.3 }
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 1 },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };

    const logoVariants = {
        hidden: {
            opacity: 0,
            y: 8
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.2,
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
                >
                    {/* Main Content Container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        {/* Minimalist Arrow */}
                        <div className="mb-8">
                            <motion.svg
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                className="text-black"
                                initial="hidden"
                                animate="visible"
                            >
                                {/* Simple Arrow Path */}
                                <motion.path
                                    d="M15 30 L35 30 M35 30 L27 22 M35 30 L27 38"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    variants={arrowVariants}
                                />
                            </motion.svg>
                        </div>

                        {/* Company Name */}
                        <motion.div
                            variants={logoVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-center"
                        >
                            <h1 className="text-xl font-light text-black tracking-wider mb-1">
                                <span className="font-medium bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">ONE TRILLION</span>
                                <span className="text-gray-800 ml-2">GROUP INDIA</span>
                            </h1>
                        </motion.div>

                        {/* Progress Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8, duration: 0.4 }}
                            className="mt-12"
                        >
                            {/* Minimalist Progress Bar */}
                            <div className="w-32 h-px bg-gray-200 relative overflow-hidden">
                                <motion.div
                                    className="absolute left-0 top-0 h-full bg-black"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                            </div>

                            {/* Progress Percentage */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2, duration: 0.4 }}
                                className="text-center text-gray-400 text-xs mt-3 font-light tracking-wider"
                            >
                                {Math.round(progress)}%
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    {/* Subtle Background Animation */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-96 h-96 border border-gray-100 rounded-full -translate-x-1/2 -translate-y-1/2"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.1, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;