import { forwardRef, useState, type HTMLAttributes } from "react";
import { cn } from "../lib/utils";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

interface NavLink {
  label: string;
  href: string;
}

interface NavProps extends HTMLAttributes<HTMLElement> {
  brand?: string;
  links?: NavLink[];
  /** Container element for the mobile menu portal (scopes overlay to a parent) */
  portalContainer?: HTMLElement | null;
}

const Nav = forwardRef<HTMLElement, NavProps>(
  (
    {
      brand = "Brand",
      links = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
      ],
      portalContainer,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
      <nav
        ref={ref}
        className={cn(
          "flex items-center justify-between w-full px-6 py-4 border-b border-border bg-background",
          className
        )}
        {...props}
      >
        <span className="text-lg font-bold text-foreground">{brand}</span>

        {/* Desktop: Radix NavigationMenu */}
        <NavigationMenu.Root className="hidden @md:block">
          <NavigationMenu.List className="flex items-center gap-6">
            {links.map((link, i) => (
              <NavigationMenu.Item key={i}>
                <NavigationMenu.Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {children}

        {/* Mobile: Radix Dialog sheet */}
        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Dialog.Trigger asChild>
            <button className="@md:hidden text-foreground" aria-label="Open menu">
              <HamburgerMenuIcon className="w-5 h-5" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal container={portalContainer ?? undefined}>
            <Dialog.Overlay className="absolute inset-0 z-40 bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <Dialog.Content className="absolute inset-y-0 right-0 z-50 w-64 bg-background border-l border-border p-6 flex flex-col gap-4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
              <div className="flex items-center justify-between">
                <Dialog.Title className="text-lg font-bold text-foreground">
                  {brand}
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button className="text-muted-foreground hover:text-foreground" aria-label="Close menu">
                    <Cross2Icon className="w-5 h-5" />
                  </button>
                </Dialog.Close>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                {links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    );
  }
);

Nav.displayName = "Nav";

export { Nav };
