"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  "Bootstrapping your project...",
  "Generating files based on your prompt...",
  "Building your application...",
  "Deploying your website...",
  "Finalizing setup...",
];

export default function Loading() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-6">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Setting things up...
        </h2>

        {/* Step text */}
        <div className="h-10 flex items-center justify-center">
          <motion.p
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm text-gray-600 text-center"
          >
            {steps[currentStep]}
          </motion.p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.6 }}
            className="h-full bg-orange-400"
          ></motion.div>
        </div>

        {/* Dots animation */}
        <div className="flex justify-center gap-2 mt-4">
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>
      </div>
    </div>
  );
}
