import { forwardRef, type HTMLAttributes, type CSSProperties } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const avatarVariants = cva(
  "relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0",
  {
    variants: {
      variant: {
        filled: "bg-primary text-primary-foreground",
        outlined: "bg-muted text-muted-foreground border border-border",
        initials: "bg-primary text-primary-foreground",
        image: "bg-surface text-muted-foreground",
      },
      size: {
        sm: "w-8 h-8 text-[11px]",
        md: "w-11 h-11 text-sm",
        lg: "w-14 h-14 text-lg",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  }
);

const iconSizeMap = { sm: 15, md: 18, lg: 20 } as const;
const statusDotSizeMap = { sm: 10, md: 12, lg: 14 } as const;

/** Map a token-select value to a CSS value referencing the theme variable */
function tokenToColor(token: string | undefined): string | undefined {
  if (!token) return undefined;
  return `var(--color-${token})`;
}

interface AvatarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  /** Display initials (overrides icon). 1-2 characters recommended. */
  initials?: string;
  /** Image URL. When set, displays as background image. */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Status indicator */
  status?: "none" | "online" | "offline" | "away" | "busy";
  /** Theme token overrides */
  tokenBg?: string;
  tokenText?: string;
  tokenBorder?: string;
}

const statusColorMap: Record<string, string> = {
  none: "bg-border",
  online: "bg-success",
  offline: "bg-muted-foreground",
  away: "bg-warning",
  busy: "bg-destructive",
};

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      variant,
      size = "md",
      initials,
      src,
      alt,
      status,
      tokenBg,
      tokenText,
      tokenBorder,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const iconSize = iconSizeMap[size ?? "md"];
    const dotSize = statusDotSizeMap[size ?? "md"];

    // Build token style overrides
    const tokenStyle: CSSProperties = { ...style };
    const bg = tokenToColor(tokenBg);
    if (bg) tokenStyle.backgroundColor = bg;
    const color = tokenToColor(tokenText);
    if (color) tokenStyle.color = color;
    const borderColor = tokenToColor(tokenBorder);
    if (borderColor) tokenStyle.borderColor = borderColor;

    // Image variant: use background-image
    if (src) {
      tokenStyle.backgroundImage = `url(${src})`;
      tokenStyle.backgroundSize = "cover";
      tokenStyle.backgroundPosition = "center";
    }

    // Determine effective variant based on props
    const effectiveVariant = src ? "image" : initials ? "initials" : variant;

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ variant: effectiveVariant, size }), className)}
        style={Object.keys(tokenStyle).length > 0 ? tokenStyle : style}
        role="img"
        aria-label={alt ?? initials ?? "Avatar"}
        {...props}
      >
        {/* Content: initials, icon placeholder, or nothing (image bg) */}
        {!src && initials ? (
          <span>{initials}</span>
        ) : !src ? (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        ) : null}

        {/* Status indicator dot */}
        {status && (
          <span
            className={cn(
              "absolute rounded-full border-2 border-background",
              statusColorMap[status]
            )}
            style={{
              width: dotSize,
              height: dotSize,
              bottom: size === "sm" ? -1 : 0,
              right: size === "sm" ? -1 : 0,
            }}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };
