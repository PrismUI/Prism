import { forwardRef, useState } from 'react';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Slot } from '@radix-ui/react-slot';
import * as RadixIcons from '@radix-ui/react-icons';
import { HamburgerMenuIcon, PlusIcon, Cross2Icon, MagnifyingGlassIcon, BellIcon } from '@radix-ui/react-icons';
import * as Dialog from '@radix-ui/react-dialog';

// src/components/avatar.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var avatarVariants = cva(
  "relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0",
  {
    variants: {
      variant: {
        filled: "bg-primary text-primary-foreground",
        outlined: "bg-muted text-muted-foreground border border-border",
        initials: "bg-primary text-primary-foreground",
        image: "bg-surface text-muted-foreground"
      },
      size: {
        sm: "w-8 h-8 text-[11px]",
        md: "w-11 h-11 text-sm",
        lg: "w-14 h-14 text-lg"
      }
    },
    defaultVariants: {
      variant: "filled",
      size: "md"
    }
  }
);
var iconSizeMap = { sm: 15, md: 18, lg: 20 };
var statusDotSizeMap = { sm: 10, md: 12, lg: 14 };
function tokenToColor(token) {
  if (!token) return void 0;
  return `var(--color-${token})`;
}
var statusColorMap = {
  none: "bg-border",
  online: "bg-success",
  offline: "bg-muted-foreground",
  away: "bg-warning",
  busy: "bg-destructive"
};
var Avatar = forwardRef(
  ({
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
  }, ref) => {
    const iconSize = iconSizeMap[size ?? "md"];
    const dotSize = statusDotSizeMap[size ?? "md"];
    const tokenStyle = { ...style };
    const bg = tokenToColor(tokenBg);
    if (bg) tokenStyle.backgroundColor = bg;
    const color = tokenToColor(tokenText);
    if (color) tokenStyle.color = color;
    const borderColor = tokenToColor(tokenBorder);
    if (borderColor) tokenStyle.borderColor = borderColor;
    if (src) {
      tokenStyle.backgroundImage = `url(${src})`;
      tokenStyle.backgroundSize = "cover";
      tokenStyle.backgroundPosition = "center";
    }
    const effectiveVariant = src ? "image" : initials ? "initials" : variant;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(avatarVariants({ variant: effectiveVariant, size }), className),
        style: Object.keys(tokenStyle).length > 0 ? tokenStyle : style,
        role: "img",
        "aria-label": alt ?? initials ?? "Avatar",
        ...props,
        children: [
          !src && initials ? /* @__PURE__ */ jsx("span", { children: initials }) : !src ? /* @__PURE__ */ jsxs(
            "svg",
            {
              width: iconSize,
              height: iconSize,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                /* @__PURE__ */ jsx("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
                /* @__PURE__ */ jsx("circle", { cx: "12", cy: "7", r: "4" })
              ]
            }
          ) : null,
          status && status !== "none" && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "absolute rounded-full border-2 border-background",
                statusColorMap[status]
              ),
              style: {
                width: dotSize,
                height: dotSize,
                bottom: size === "sm" ? -1 : 0,
                right: size === "sm" ? -1 : 0
              }
            }
          )
        ]
      }
    );
  }
);
Avatar.displayName = "Avatar";
var iconSizeMap2 = { sm: "w-3.5 h-3.5", md: "w-[15px] h-[15px]", lg: "w-4 h-4" };
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
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
        tertiary: "bg-tertiary text-tertiary-foreground hover:bg-tertiary/90",
        outline: "border border-border bg-background text-foreground hover:bg-accent",
        ghost: "text-foreground hover:bg-accent",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
      },
      size: {
        sm: "gap-1 rounded-full px-sm py-xs text-xs",
        md: "gap-2 rounded-full px-md py-sm text-xs",
        lg: "gap-3 rounded-full px-xl py-md text-sm"
      },
      iconOnly: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      { iconOnly: true, size: "sm", className: "p-xs gap-0" },
      { iconOnly: true, size: "md", className: "p-sm gap-0" },
      { iconOnly: true, size: "lg", className: "p-md gap-0" }
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
function tokenToColor2(token) {
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
    const iconCls = iconSizeMap2[size ?? "md"];
    const LeftComp = resolveIcon(leftIcon);
    const RightComp = resolveIcon(rightIcon);
    const IconOnlyComp = resolveIcon(leftIcon) ?? RadixIcons.PlusIcon;
    const tokenStyle = { ...style };
    const r = tokenToRadius(tokenRadius);
    if (r) tokenStyle.borderRadius = r;
    const bg = tokenToColor2(tokenBg);
    if (bg) tokenStyle.backgroundColor = bg;
    const color = tokenToColor2(tokenText);
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

export { Avatar, Button, Card, CardContent, CardDescription, CardHeader, CardPreview, CardTitle, Nav, avatarVariants, buttonVariants, cn };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map