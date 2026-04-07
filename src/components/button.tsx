import { forwardRef, type ButtonHTMLAttributes, type CSSProperties } from "react";
import { Slot } from "@radix-ui/react-slot";
import * as RadixIcons from "@radix-ui/react-icons";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const iconSizeMap = { sm: "w-3.5 h-3.5", md: "w-[15px] h-[15px]", lg: "w-4 h-4" } as const;

function resolveIcon(name: string | undefined): React.ComponentType<{ className?: string }> | null {
  if (!name) return null;
  const key = `${name}Icon` as keyof typeof RadixIcons;
  return (RadixIcons[key] as React.ComponentType<{ className?: string }>) ?? null;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        tertiary:
          "bg-tertiary text-tertiary-foreground hover:bg-tertiary/90",
        outline:
          "border border-border bg-background text-foreground hover:bg-accent",
        ghost:
          "text-foreground hover:bg-accent",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "gap-1 rounded-full px-3 py-1 text-xs",
        md: "gap-2 rounded-full px-4 py-2 text-xs",
        lg: "gap-3 rounded-full px-6 py-4 text-sm",
      },
      iconOnly: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { iconOnly: true, size: "sm", className: "p-1.5 gap-0" },
      { iconOnly: true, size: "md", className: "p-2 gap-0" },
      { iconOnly: true, size: "lg", className: "p-3 gap-0" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      iconOnly: false,
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label?: string;
  asChild?: boolean;
  iconOnly?: boolean;
  showLeftIcon?: boolean;
  leftIcon?: string;
  showRightIcon?: boolean;
  rightIcon?: string;
  /** Theme token overrides — values like "primary", "md", "sm", "none" reference theme.css tokens */
  tokenRadius?: string;
  tokenBg?: string;
  tokenText?: string;
  tokenPx?: string;
  tokenPy?: string;
  tokenShadow?: string;
}

/** Map a token-select value to a CSS value referencing the theme variable */
function tokenToRadius(token: string | undefined): string | undefined {
  if (!token) return undefined;
  if (token === "none") return "0px";
  if (token === "full") return "9999px";
  return `var(--radius-${token})`;
}

function tokenToColor(token: string | undefined): string | undefined {
  if (!token) return undefined;
  return `var(--color-${token})`;
}

function tokenToShadow(token: string | undefined): string | undefined {
  if (!token || token === "none") return undefined;
  return `var(--shadow-${token})`;
}

function tokenToSpacing(token: string | undefined): string | undefined {
  if (!token) return undefined;
  // Named spacing tokens reference theme variables
  if (["xs", "sm", "md", "lg", "xl", "2xl"].includes(token)) return `var(--spacing-${token})`;
  // Numeric values use Tailwind spacing scale (value * 0.25rem)
  const num = parseFloat(token);
  if (isNaN(num)) return undefined;
  return `${num * 0.25}rem`;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label = "Click me",
      variant,
      size = "md",
      iconOnly = false,
      showLeftIcon = false,
      leftIcon = "Plus",
      showRightIcon = false,
      rightIcon = "ArrowRight",
      tokenRadius,
      tokenBg,
      tokenText,
      tokenPx,
      tokenPy,
      tokenShadow,
      className,
      children,
      style,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const iconCls = iconSizeMap[size ?? "md"];
    const LeftComp = resolveIcon(leftIcon);
    const RightComp = resolveIcon(rightIcon);
    const IconOnlyComp = resolveIcon(leftIcon) ?? RadixIcons.PlusIcon;

    // Build inline style overrides from token props
    const tokenStyle: CSSProperties = { ...style };
    const r = tokenToRadius(tokenRadius);
    if (r) tokenStyle.borderRadius = r;
    const bg = tokenToColor(tokenBg);
    if (bg) tokenStyle.backgroundColor = bg;
    const color = tokenToColor(tokenText);
    if (color) tokenStyle.color = color;
    const px = tokenToSpacing(tokenPx);
    if (px) { tokenStyle.paddingLeft = px; tokenStyle.paddingRight = px; }
    const py = tokenToSpacing(tokenPy);
    if (py) { tokenStyle.paddingTop = py; tokenStyle.paddingBottom = py; }
    const shadow = tokenToShadow(tokenShadow);
    if (shadow) tokenStyle.boxShadow = shadow;

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, iconOnly }), className)}
        style={Object.keys(tokenStyle).length > 0 ? tokenStyle : style}
        {...props}
      >
        {children ?? (
          iconOnly ? (
            <IconOnlyComp className={iconCls} />
          ) : (
            <>
              {showLeftIcon && LeftComp && <LeftComp className={iconCls} />}
              {label}
              {showRightIcon && RightComp && <RightComp className={iconCls} />}
            </>
          )
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
