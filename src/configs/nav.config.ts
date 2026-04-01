import type { RegistryComponent } from "../types";

export const navConfig: RegistryComponent = {
  id: "nav",
  name: "Nav",
  category: "block",
  defaultProps: {
    brand: "Brand",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
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
        { key: "href", label: "URL" },
      ],
    },
  ],
  defaultColSpan: 1,
  defaultRowSpan: 1,
};
