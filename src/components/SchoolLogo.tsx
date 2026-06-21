import { Link } from "react-router-dom";

interface SchoolLogoProps {
  size?: "sm" | "md" | "lg" | "hero";
  showText?: boolean;
  variant?: "light" | "dark";
  className?: string;
  linkToHome?: boolean;
}

const sizes = {
  sm: { img: "h-8 w-auto", text: "text-sm", sub: "text-[7px]" },
  md: { img: "h-10 w-auto", text: "text-base", sub: "text-[8px]" },
  lg: { img: "h-12 w-auto", text: "text-lg", sub: "text-[9px]" },
  hero: { img: "h-14 md:h-16 w-auto", text: "text-lg", sub: "text-[9px]" },
};

export default function SchoolLogo({
  size = "md",
  showText = true,
  variant = "dark",
  className = "",
  linkToHome = false,
}: SchoolLogoProps) {
  const s = sizes[size];
  const textColor = variant === "light" ? "text-white" : "text-dark-navy";
  const subColor = variant === "light" ? "text-white/70" : "text-slate-500";

  const content = (
    <div className={`flex items-center gap-2.5 md:gap-3 ${className}`}>
      <img
        src="/assets/logoschool.png"
        alt="Prarthana English Medium School"
        className={`${s.img} object-contain shrink-0`}
        width={160}
        height={64}
        decoding="async"
      />
      {showText && (
        <div className="flex flex-col text-left leading-none">
          <span className={`font-serif font-bold ${s.text} tracking-tight ${textColor}`}>
            Prarthana
          </span>
          <span className={`${s.sub} uppercase tracking-widest mt-0.5 font-sans font-medium ${subColor}`}>
            English Medium School
          </span>
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link to="/" className="group transition-opacity hover:opacity-90">
        {content}
      </Link>
    );
  }

  return content;
}
