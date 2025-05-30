"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { HiMenu, HiX } from "react-icons/hi";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactElement;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Enhanced smooth scroll function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();

    // Close mobile menu when nav item is clicked
    setIsMobileMenuOpen(false);

    // Handle home/hero section
    if (link === '#' || link === '#hero' || link === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    // Handle other sections
    const targetElement = document.querySelector(link);
    if (targetElement) {
      const navHeight = 100; // Account for floating nav height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[100vw] lg:min-w-fit fixed z-[5000] top-4 sm:top-6 md:top-10 inset-x-0 mx-auto px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-6 w-full">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              onClick={(e) => handleNavClick(e, navItem.link)}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors duration-200"
              )}
            >
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Logo or Brand (optional) */}
          <div className="text-white font-bold text-lg">
            WASEL
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-neutral-300 transition-colors duration-200 p-2"
          >
            {isMobileMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 mx-4 md:hidden"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.9)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
            >
              <div className="flex flex-col py-4">
                {navItems.map((navItem: any, idx: number) => (
                  <Link
                    key={`mobile-link=${idx}`}
                    href={navItem.link}
                    onClick={(e) => handleNavClick(e, navItem.link)}
                    className="flex items-center px-6 py-3 text-neutral-50 hover:bg-white/10 transition-colors duration-200"
                  >
                    {navItem.icon && (
                      <span className="text-lg">{navItem.icon}</span>
                    )}
                    <span className="text-base font-medium">{navItem.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};