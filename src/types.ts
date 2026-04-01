export interface InspectorControl {
  type: "text" | "select" | "color" | "number" | "list";
  label: string;
  propKey: string;
  options?: string[];
  subFields?: { key: string; label: string }[];
  min?: number;
  max?: number;
}

export interface RegistryComponent {
  id: string;
  name: string;
  /** Symbol name to use in export if different from name */
  exportName?: string;
  category: "primitive" | "block";
  defaultProps: Record<string, unknown>;
  dependencies: string[];
  inspectorControls: InspectorControl[];
  defaultColSpan: number;
  defaultRowSpan: number;
}
