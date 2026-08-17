import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center gap-2 font-body font-semibold text-[15px] rounded-sm2 transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-[#191307] px-[22px] py-3 hover:bg-accent-hover",
  secondary:
    "bg-transparent text-primary border border-borderc-strong px-[22px] py-3 hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-secondary px-1.5 py-3 hover:text-primary",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={props.href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
