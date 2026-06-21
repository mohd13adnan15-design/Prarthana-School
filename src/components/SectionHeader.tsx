import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClass} ${className}`}
    >
      {subtitle && (
        <span className="text-xs md:text-sm font-semibold tracking-widest text-accent uppercase mb-2 md:mb-3 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
          {subtitle}
        </span>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-dark-navy leading-tight mt-1">
        {title}
      </h2>
      
      <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4 mb-2" />
      
      {description && (
        <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-4">
          {description}
        </p>
      )}
    </motion.div>
  );
}
