// Components
export { Button, buttonVariants } from "./components/button";
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardPreview } from "./components/card";
export { Nav } from "./components/nav";

// Configs
export { buttonConfig } from "./configs/button.config";
export { cardConfig } from "./configs/card.config";
export { navConfig } from "./configs/nav.config";

// Types
export type { RegistryComponent, InspectorControl } from "./types";

// Utils
export { cn } from "./lib/utils";

// Registry maps (convenience re-exports matching the old registry/index.ts API)
import type { RegistryComponent } from "./types";
import { Button } from "./components/button";
import { CardPreview } from "./components/card";
import { Nav } from "./components/nav";
import { buttonConfig } from "./configs/button.config";
import { cardConfig } from "./configs/card.config";
import { navConfig } from "./configs/nav.config";

export const registryConfigs: Record<string, RegistryComponent> = {
  button: buttonConfig,
  card: cardConfig,
  nav: navConfig,
};

export const registryComponents: Record<string, React.ComponentType<Record<string, unknown>>> = {
  button: Button as React.ComponentType<Record<string, unknown>>,
  card: CardPreview as React.ComponentType<Record<string, unknown>>,
  nav: Nav as React.ComponentType<Record<string, unknown>>,
};
