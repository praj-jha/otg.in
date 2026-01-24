"use client";

import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { GradientButton } from "./ui/GradientButton";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleScheduleMeeting = () => {
    const appointmentLink = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1r1erspdw8QBh9sMgt0ikdTjkd9nnwIv-vyoM8RcRbExxkGzREe6avsGRzzrJweVNfb25UXV9R';
    window.open(appointmentLink, '_blank');
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav
        className={cn(
          "py-1 flex items-center justify-between max-w-6xl mx-auto px-3 md:px-5 rounded-xl md:rounded-2xl backdrop-blur-md bg-black/60 border border-white/10 shadow-lg transition-all duration-300 mt-2 md:mt-4"
        )}
      >
        <div className="flex items-center gap-2 py-1 md:py-2 px-1 md:px-2 rounded-md flex-shrink-0">
          <button onClick={() => navigate('/')}>
            <img
              src="/otglogo.png"
              alt="OTG Logo"
              className="w-24 md:w-32 h-auto object-contain"
            />
          </button>
        </div>

        {/* Desktop Navigation Items */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => navigate('/services')}
            className="text-white/90 hover:text-blue-400 transition-colors"
          >
            Services
          </button>

          <button
            onClick={() => navigate('/projects')}
            className="text-white/90 hover:text-blue-400 transition-colors"
          >
            Projects
          </button>

          <button
            onClick={() => navigate('/about')}
            className="text-white/90 hover:text-blue-400 transition-colors"
          >
            About
          </button>

          <button
            onClick={() => navigate('/blogs')}
            className="text-white/90 hover:text-blue-400 transition-colors"
          >
            Blogs
          </button>

          <button
            onClick={() => navigate('/summit')}
            className="text-white/90 hover:text-purple-400 transition-colors font-medium"
          >
            Summit
          </button>

          <div className="flex items-center gap-2">
            <GradientButton
              variant="blue"
              text="Schedule a Call"
              size="sm"
              onClick={handleScheduleMeeting}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            variant="blue"
            size="sm"
            className="text-xs px-2 bg-blue-600 text-white hover:bg-blue-700"
            onClick={handleScheduleMeeting}
          >
            Schedule
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-64 bg-neutral-900 border-l border-white/10 shadow-lg p-4 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Menu</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-md transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-blue-500">Quick Links</h3>
                  <div className="space-y-2 ml-4">
                    <button
                      onClick={() => {
                        navigate('/services');
                        setMobileMenuOpen(false);
                      }}
                      className="block py-2 text-sm text-white/80 hover:text-blue-400 transition-colors text-left w-full"
                    >
                      Services
                    </button>
                    <button
                      onClick={() => {
                        navigate('/projects');
                        setMobileMenuOpen(false);
                      }}
                      className="block py-2 text-sm text-white/80 hover:text-blue-400 transition-colors text-left w-full"
                    >
                      Projects
                    </button>
                    <button
                      onClick={() => {
                        navigate('/about');
                        setMobileMenuOpen(false);
                      }}
                      className="block py-2 text-sm text-white/80 hover:text-blue-400 transition-colors text-left w-full"
                    >
                      About
                    </button>
                    <button
                      onClick={() => {
                        navigate('/blogs');
                        setMobileMenuOpen(false);
                      }}
                      className="block py-2 text-sm text-white/80 hover:text-blue-400 transition-colors text-left w-full"
                    >
                      Blogs
                    </button>
                    <button
                      onClick={() => {
                        navigate('/summit');
                        setMobileMenuOpen(false);
                      }}
                      className="block py-2 text-sm text-white/80 hover:text-purple-400 transition-colors text-left w-full font-medium"
                    >
                      Summit
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
