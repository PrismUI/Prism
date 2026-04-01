import type { RegistryComponent } from "../types";

export const cardConfig: RegistryComponent = {
  id: "card",
  name: "Card",
  exportName: "CardPreview",
  category: "block",
  defaultProps: {
    title: "Card Title",
    description: "This is a description of the card component.",
    imageUrl: "",
  },
  dependencies: [],
  inspectorControls: [
    { type: "text", label: "Title", propKey: "title" },
    { type: "text", label: "Description", propKey: "description" },
    { type: "text", label: "Image URL", propKey: "imageUrl" },
  ],
  defaultColSpan: 1,
  defaultRowSpan: 1,
};
