'use strict';

var react = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var NavigationMenu = require('@radix-ui/react-navigation-menu');
var Dialog = require('@radix-ui/react-dialog');
var reactIcons = require('@radix-ui/react-icons');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var NavigationMenu__namespace = /*#__PURE__*/_interopNamespace(NavigationMenu);
var Dialog__namespace = /*#__PURE__*/_interopNamespace(Dialog);

// src/components/button.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var buttonVariants = classVarianceAuthority.cva(
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
var Button = react.forwardRef(
  ({ label = "Click me", variant, size, className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var Card = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var CardHeader = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "h3",
    {
      ref,
      className: cn("text-lg font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
var CardDescription = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("p", { ref, className: cn("text-sm text-muted-foreground mt-2", className), ...props })
);
CardDescription.displayName = "CardDescription";
var CardContent = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
var CardPreview = react.forwardRef(
  ({
    title = "Card Title",
    description = "This is a description of the card component.",
    imageUrl,
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(Card, { ref, className, ...props, children: [
      imageUrl && /* @__PURE__ */ jsxRuntime.jsx("img", { src: imageUrl, alt: "", className: "w-full h-48 object-cover" }),
      /* @__PURE__ */ jsxRuntime.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { children: title }),
        /* @__PURE__ */ jsxRuntime.jsx(CardDescription, { children: description })
      ] }),
      children && /* @__PURE__ */ jsxRuntime.jsx(CardContent, { children })
    ] });
  }
);
CardPreview.displayName = "CardPreview";
var Nav = react.forwardRef(
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
    const [mobileOpen, setMobileOpen] = react.useState(false);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "nav",
      {
        ref,
        className: cn(
          "flex items-center justify-between w-full px-6 py-4 border-b border-border bg-background",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-lg font-bold text-foreground", children: brand }),
          /* @__PURE__ */ jsxRuntime.jsx(NavigationMenu__namespace.Root, { className: "hidden @md:block", children: /* @__PURE__ */ jsxRuntime.jsx(NavigationMenu__namespace.List, { className: "flex items-center gap-6", children: links.map((link, i) => /* @__PURE__ */ jsxRuntime.jsx(NavigationMenu__namespace.Item, { children: /* @__PURE__ */ jsxRuntime.jsx(
            NavigationMenu__namespace.Link,
            {
              href: link.href,
              className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
              children: link.label
            }
          ) }, i)) }) }),
          children,
          /* @__PURE__ */ jsxRuntime.jsxs(Dialog__namespace.Root, { open: mobileOpen, onOpenChange: setMobileOpen, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Dialog__namespace.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx("button", { className: "@md:hidden text-foreground", "aria-label": "Open menu", children: /* @__PURE__ */ jsxRuntime.jsx(reactIcons.HamburgerMenuIcon, { className: "w-5 h-5" }) }) }),
            /* @__PURE__ */ jsxRuntime.jsxs(Dialog__namespace.Portal, { container: portalContainer ?? void 0, children: [
              /* @__PURE__ */ jsxRuntime.jsx(Dialog__namespace.Overlay, { className: "absolute inset-0 z-40 bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
              /* @__PURE__ */ jsxRuntime.jsxs(Dialog__namespace.Content, { className: "absolute inset-y-0 right-0 z-50 w-64 bg-background border-l border-border p-6 flex flex-col gap-4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(Dialog__namespace.Title, { className: "text-lg font-bold text-foreground", children: brand }),
                  /* @__PURE__ */ jsxRuntime.jsx(Dialog__namespace.Close, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx("button", { className: "text-muted-foreground hover:text-foreground", "aria-label": "Close menu", children: /* @__PURE__ */ jsxRuntime.jsx(reactIcons.Cross2Icon, { className: "w-5 h-5" }) }) })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-col gap-3 mt-4", children: links.map((link, i) => /* @__PURE__ */ jsxRuntime.jsx(
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

exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardHeader = CardHeader;
exports.CardPreview = CardPreview;
exports.CardTitle = CardTitle;
exports.Nav = Nav;
exports.buttonConfig = buttonConfig;
exports.buttonVariants = buttonVariants;
exports.cardConfig = cardConfig;
exports.cn = cn;
exports.navConfig = navConfig;
exports.registryComponents = registryComponents;
exports.registryConfigs = registryConfigs;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map