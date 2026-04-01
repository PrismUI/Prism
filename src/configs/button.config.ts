import type { RegistryComponent } from "../types";

export const buttonConfig: RegistryComponent = {
  id: "button",
  name: "Button",
  category: "primitive",
  defaultProps: {
    label: "Click me",
    variant: "primary",
    size: "md",
  },
  dependencies: ["class-variance-authority", "@radix-ui/react-slot"],
  inspectorControls: [
    { type: "text", label: "Label", propKey: "label" },
    {
      type: "select",
      label: "Variant",
      propKey: "variant",
      options: ["primary", "secondary", "outline"],
    },
    {
      type: "select",
      label: "Size",
      propKey: "size",
      options: ["sm", "md", "lg"],
    },
  ],
  defaultColSpan: 1,
  defaultRowSpan: 1,
};
