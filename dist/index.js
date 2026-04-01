import { forwardRef, useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';

// src/components/button.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-border bg-transparent text-foreground hover:bg-accent"
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
var Button = forwardRef(
  ({ label = "Click me", variant, size, className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        ref,
        className: cn(buttonVariants({ variant, size }), className),
        ...props,
        children: children ?? label
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
    brand = "Brand",
    links = [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" }
    ],
    portalContainer,
    className,
    children,
    ...props
  }, ref) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    return /* @__PURE__ */ jsxs(
      "nav",
      {
        ref,
        className: cn(
          "flex items-center justify-between w-full px-6 py-4 border-b border-border bg-background",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-foreground", children: brand }),
          /* @__PURE__ */ jsx(NavigationMenu.Root, { className: "hidden @md:block", children: /* @__PURE__ */ jsx(NavigationMenu.List, { className: "flex items-center gap-6", children: links.map((link, i) => /* @__PURE__ */ jsx(NavigationMenu.Item, { children: /* @__PURE__ */ jsx(
            NavigationMenu.Link,
            {
              href: link.href,
              className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
              children: link.label
            }
          ) }, i)) }) }),
          children,
          /* @__PURE__ */ jsxs(Dialog.Root, { open: mobileOpen, onOpenChange: setMobileOpen, children: [
            /* @__PURE__ */ jsx(Dialog.Trigger, { asChild: true, children: /* @__PURE__ */ jsx("button", { className: "@md:hidden text-foreground", "aria-label": "Open menu", children: /* @__PURE__ */ jsx(HamburgerMenuIcon, { className: "w-5 h-5" }) }) }),
            /* @__PURE__ */ jsxs(Dialog.Portal, { container: portalContainer ?? void 0, children: [
              /* @__PURE__ */ jsx(Dialog.Overlay, { className: "absolute inset-0 z-40 bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
              /* @__PURE__ */ jsxs(Dialog.Content, { className: "absolute inset-y-0 right-0 z-50 w-64 bg-background border-l border-border p-6 flex flex-col gap-4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx(Dialog.Title, { className: "text-lg font-bold text-foreground", children: brand }),
                  /* @__PURE__ */ jsx(Dialog.Close, { asChild: true, children: /* @__PURE__ */ jsx("button", { className: "text-muted-foreground hover:text-foreground", "aria-label": "Close menu", children: /* @__PURE__ */ jsx(Cross2Icon, { className: "w-5 h-5" }) }) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3 mt-4", children: links.map((link, i) => /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: link.href,
                    onClick: () => setMobileOpen(false),
                    className: "text-sm text-muted-foreground hover:text-foreground transition-colors py-1",
                    children: link.label
                  },
                  i
                )) })
              ] })
            ] })
          ] })
        ]
      }
    );
  }
);
Nav.displayName = "Nav";

// src/configs/button.config.ts
var buttonConfig = {
  id: "button",
  name: "Button",
  category: "primitive",
  defaultProps: {
    label: "Click me",
    variant: "primary",
    size: "md"
  },
  dependencies: ["class-variance-authority", "@radix-ui/react-slot"],
  inspectorControls: [
    { type: "text", label: "Label", propKey: "label" },
    {
      type: "select",
      label: "Variant",
      propKey: "variant",
      options: ["primary", "secondary", "outline"]
    },
    {
      type: "select",
      label: "Size",
      propKey: "size",
      options: ["sm", "md", "lg"]
    }
  ],
  defaultColSpan: 1,
  defaultRowSpan: 1
};

// src/configs/card.config.ts
var cardConfig = {
  id: "card",
  name: "Card",
  exportName: "CardPreview",
  category: "block",
  defaultProps: {
    title: "Card Title",
    description: "This is a description of the card component.",
    imageUrl: ""
  },
  dependencies: [],
  inspectorControls: [
    { type: "text", label: "Title", propKey: "title" },
    { type: "text", label: "Description", propKey: "description" },
    { type: "text", label: "Image URL", propKey: "imageUrl" }
  ],
  defaultColSpan: 1,
  defaultRowSpan: 1
};

// src/configs/nav.config.ts
var navConfig = {
  id: "nav",
  name: "Nav",
  category: "block",
  defaultProps: {
    brand: "Brand",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" }
    ]
  },
  dependencies: ["@radix-ui/react-icons", "@radix-ui/react-navigation-menu", "@radix-ui/react-dialog"],
  inspectorControls: [
    { type: "text", label: "Brand", propKey: "brand" },
    {
      type: "list",
      label: "Links",
      propKey: "links",
      subFields: [
        { key: "label", label: "Label" },
        { key: "href", label: "URL" }
      ]
    }
  ],
  defaultColSpan: 1,
  defaultRowSpan: 1
};

// src/index.ts
var registryConfigs = {
  button: buttonConfig,
  card: cardConfig,
  nav: navConfig
};
var registryComponents = {
  button: Button,
  card: CardPreview,
  nav: Nav
};

export { Button, Card, CardContent, CardDescription, CardHeader, CardPreview, CardTitle, Nav, buttonConfig, buttonVariants, cardConfig, cn, navConfig, registryComponents, registryConfigs };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map