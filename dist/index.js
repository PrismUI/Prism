import { forwardRef, useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import * as RadixIcons from '@radix-ui/react-icons';
import { HamburgerMenuIcon, PlusIcon, Cross2Icon, MagnifyingGlassIcon, BellIcon } from '@radix-ui/react-icons';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as Dialog from '@radix-ui/react-dialog';

// src/components/button.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var iconSizeMap = { sm: "w-3.5 h-3.5", md: "w-[15px] h-[15px]", lg: "w-4 h-4" };
function resolveIcon(name) {
  if (!name) return null;
  const key = `${name}Icon`;
  return RadixIcons[key] ?? null;
}
var buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        tertiary: "bg-tertiary text-tertiary-foreground hover:bg-tertiary/90",
        outline: "border border-border bg-background text-foreground hover:bg-accent",
        ghost: "text-foreground hover:bg-accent",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
      },
      size: {
        sm: "gap-1 rounded-full px-3 py-1 text-xs",
        md: "gap-2 rounded-full px-4 py-2 text-xs",
        lg: "gap-3 rounded-full px-6 py-4 text-sm"
      },
      iconOnly: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      { iconOnly: true, size: "sm", className: "p-1.5 gap-0" },
      { iconOnly: true, size: "md", className: "p-2 gap-0" },
      { iconOnly: true, size: "lg", className: "p-3 gap-0" }
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      iconOnly: false
    }
  }
);
function tokenToRadius(token) {
  if (!token) return void 0;
  if (token === "none") return "0px";
  if (token === "full") return "9999px";
  return `var(--radius-${token})`;
}
function tokenToColor(token) {
  if (!token) return void 0;
  return `var(--color-${token})`;
}
function tokenToShadow(token) {
  if (!token || token === "none") return void 0;
  return `var(--shadow-${token})`;
}
function tokenToSpacing(token) {
  if (!token) return void 0;
  if (["xs", "sm", "md", "lg", "xl", "2xl"].includes(token)) return `var(--spacing-${token})`;
  const num = parseFloat(token);
  if (isNaN(num)) return void 0;
  return `${num * 0.25}rem`;
}
var Button = forwardRef(
  ({
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
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    const iconCls = iconSizeMap[size ?? "md"];
    const LeftComp = resolveIcon(leftIcon);
    const RightComp = resolveIcon(rightIcon);
    const IconOnlyComp = resolveIcon(leftIcon) ?? RadixIcons.PlusIcon;
    const tokenStyle = { ...style };
    const r = tokenToRadius(tokenRadius);
    if (r) tokenStyle.borderRadius = r;
    const bg = tokenToColor(tokenBg);
    if (bg) tokenStyle.backgroundColor = bg;
    const color = tokenToColor(tokenText);
    if (color) tokenStyle.color = color;
    const px = tokenToSpacing(tokenPx);
    if (px) {
      tokenStyle.paddingLeft = px;
      tokenStyle.paddingRight = px;
    }
    const py = tokenToSpacing(tokenPy);
    if (py) {
      tokenStyle.paddingTop = py;
      tokenStyle.paddingBottom = py;
    }
    const shadow = tokenToShadow(tokenShadow);
    if (shadow) tokenStyle.boxShadow = shadow;
    return /* @__PURE__ */ jsx(
      Comp,
      {
        ref,
        className: cn(buttonVariants({ variant, size, iconOnly }), className),
        style: Object.keys(tokenStyle).length > 0 ? tokenStyle : style,
        ...props,
        children: children ?? (iconOnly ? /* @__PURE__ */ jsx(IconOnlyComp, { className: iconCls }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          showLeftIcon && LeftComp && /* @__PURE__ */ jsx(LeftComp, { className: iconCls }),
          label,
          showRightIcon && RightComp && /* @__PURE__ */ jsx(RightComp, { className: iconCls })
        ] }))
      }
    );
  }
);
Button.displayName = "Button";
var Card = forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "rounded-lg border border-border bg-background text-foreground shadow-sm overflow-hidden",
        className
      ),
      ...props
    }
  )
);
Card.displayName = "Card";
var CardHeader = forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "h3",
    {
      ref,
      className: cn("text-lg font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
var CardDescription = forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("p", { ref, className: cn("text-sm text-muted-foreground mt-2", className), ...props })
);
CardDescription.displayName = "CardDescription";
var CardContent = forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
var CardPreview = forwardRef(
  ({
    title = "Card Title",
    description = "This is a description of the card component.",
    imageUrl,
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs(Card, { ref, className, ...props, children: [
      imageUrl && /* @__PURE__ */ jsx("img", { src: imageUrl, alt: "", className: "w-full h-48 object-cover" }),
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: title }),
        /* @__PURE__ */ jsx(CardDescription, { children: description })
      ] }),
      children && /* @__PURE__ */ jsx(CardContent, { children })
    ] });
  }
);
CardPreview.displayName = "CardPreview";
var Nav = forwardRef(
  ({
    brand = "Prism",
    links = [
      { label: "Dashboard", href: "#" },
      { label: "Projects", href: "#" },
      { label: "Team", href: "#" },
      { label: "Settings", href: "#" }
    ],
    initials = "JD",
    showSearch = true,
    showNotifications = true,
    portalContainer,
    className,
    children,
    ...props
  }, ref) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    return /* @__PURE__ */ jsxs(
      "nav",
      {
        ref,
        className: cn(
          "@container flex items-center justify-between w-full bg-background border-b border-border",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 @md:gap-6", children: [
            /* @__PURE__ */ jsxs(Dialog.Root, { open: mobileOpen, onOpenChange: setMobileOpen, children: [
              /* @__PURE__ */ jsx(Dialog.Trigger, { asChild: true, children: /* @__PURE__ */ jsx(
                "button",
                {
                  className: "@lg:hidden p-1 rounded-md text-foreground",
                  "aria-label": "Open menu",
                  children: /* @__PURE__ */ jsx(HamburgerMenuIcon, { className: "w-5 h-5" })
                }
              ) }),
              /* @__PURE__ */ jsxs(Dialog.Portal, { container: portalContainer ?? void 0, children: [
                /* @__PURE__ */ jsx(Dialog.Overlay, { className: "absolute inset-0 z-40 bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
                /* @__PURE__ */ jsxs(Dialog.Content, { className: "absolute inset-y-0 left-0 z-50 w-64 bg-background border-r border-border flex flex-col data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded-md bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsx(PlusIcon, { className: "w-4 h-4 text-primary-foreground" }) }),
                      /* @__PURE__ */ jsx("span", { className: "text-[15px] font-bold text-foreground", children: brand })
                    ] }),
                    /* @__PURE__ */ jsx(Dialog.Close, { asChild: true, children: /* @__PURE__ */ jsx(
                      "button",
                      {
                        className: "text-muted-foreground hover:text-foreground",
                        "aria-label": "Close menu",
                        children: /* @__PURE__ */ jsx(Cross2Icon, { className: "w-5 h-5" })
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-0.5 p-3", children: links.map((link, i) => /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: link.href,
                      onClick: () => {
                        setActiveIndex(i);
                        setMobileOpen(false);
                      },
                      className: cn(
                        "flex items-center gap-2 px-3 py-2 rounded-xl text-[13px] transition-colors",
                        i === activeIndex ? "bg-secondary text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                      ),
                      children: link.label
                    },
                    i
                  )) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded-md bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsx(PlusIcon, { className: "w-4 h-4 text-primary-foreground" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-[15px] font-bold text-foreground", children: brand })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "hidden @lg:flex items-center gap-1", children: links.map((link, i) => /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                onClick: (e) => {
                  e.preventDefault();
                  setActiveIndex(i);
                },
                className: cn(
                  "px-3 py-1.5 rounded-xl text-[13px] transition-colors",
                  i === activeIndex ? "bg-secondary text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                ),
                children: link.label
              },
              i
            )) }),
            /* @__PURE__ */ jsx("div", { className: "hidden @sm:flex @lg:hidden items-center gap-1", children: links.slice(0, 3).map((link, i) => /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                onClick: (e) => {
                  e.preventDefault();
                  setActiveIndex(i);
                },
                className: cn(
                  "px-3 py-1.5 rounded-xl text-[13px] transition-colors",
                  i === activeIndex ? "bg-secondary text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                ),
                children: link.label
              },
              i
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            showSearch && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("button", { className: "hidden @lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-[12px] text-muted-foreground", children: [
                /* @__PURE__ */ jsx(MagnifyingGlassIcon, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsx("span", { children: "Search..." })
              ] }),
              /* @__PURE__ */ jsx("button", { className: "@lg:hidden p-1 text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsx(MagnifyingGlassIcon, { className: "w-[18px] h-[18px]" }) })
            ] }),
            showNotifications && /* @__PURE__ */ jsx("button", { className: "p-1 text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsx(BellIcon, { className: "w-[18px] h-[18px]" }) }),
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 @max-sm:w-7 @max-sm:h-7 rounded-full bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold text-primary-foreground", children: initials }) })
          ] }),
          children
        ]
      }
    );
  }
);
Nav.displayName = "Nav";

export { Button, Card, CardContent, CardDescription, CardHeader, CardPreview, CardTitle, Nav, buttonVariants, cn };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map