"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PublicityPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show immediately — before the campaign popup
    const timer = setTimeout(() => setOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] bg-black/65 backdrop-blur-sm flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              aria-label="Close publicity popup"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 transition cursor-pointer"
            >
              <X size={20} className="text-white" />
            </button>

            {/* Image */}
            <div className="relative w-full aspect-[16/10]">
              <Image
                src="/career-quest.png"
                alt="Career Quest Publicity"
                fill
                className="object-contain bg-[#020B2D]"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PublicityPopup;
