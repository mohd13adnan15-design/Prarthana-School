import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "glass";
  size?: "sm" | "md" | "lg";
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary:
      "bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg focus:ring-primary",
    secondary:
      "bg-white hover:bg-slate-50 text-primary border border-slate-200 shadow-sm focus:ring-primary-light",
    accent:
      "bg-accent hover:bg-accent-dark text-dark-navy shadow-md hover:shadow-lg focus:ring-accent",
    glass:
      "glass-panel hover:bg-white/60 text-primary-dark border border-white/50 shadow-sm focus:ring-primary-light",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.025, y: disabled ? 0 : -1 },
    whileTap: { scale: disabled ? 1 : 0.975 },
    transition: { type: "spring" as const, stiffness: 400, damping: 15 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={combinedStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
