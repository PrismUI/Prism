import { forwardRef, useState, type HTMLAttributes } from "react";
import { cn } from "../lib/utils";
import { Avatar } from "./avatar";
import * as Dialog from "@radix-ui/react-dialog";
import {
  HamburgerMenuIcon,
  Cross2Icon,
  MagnifyingGlassIcon,
  BellIcon,
  PlusIcon,
} from "@radix-ui/react-icons";

interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

interface NavProps extends HTMLAttributes<HTMLElement> {
  brand?: string;
  links?: NavLink[];
  initials?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
  /** Avatar variant */
  avatarVariant?: "filled" | "outlined" | "initials" | "image";
  /** Avatar size */
  avatarSize?: "sm" | "md";
  /** Avatar status indicator */
  avatarStatus?: "none" | "online" | "offline" | "away" | "busy";
  /** Avatar image URL */
  avatarSrc?: string;
  /** Container element for the mobile menu portal (scopes overlay to a parent) */
  portalContainer?: HTMLElement | null;
}

const Nav = forwardRef<HTMLElement, NavProps>(
  (
    {
      brand = "Prism",
      links = [
        { label: "Dashboard", href: "#" },
        { label: "Projects", href: "#" },
        { label: "Team", href: "#" },
        { label: "Settings", href: "#" },
      ],
      initials = "JD",
      showSearch = true,
      showNotifications = true,
      avatarVariant = "initials",
      avatarSize = "sm",
      avatarStatus = "none",
      avatarSrc,
      portalContainer,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
      <nav
        ref={ref}
        className={cn(
          "@container flex items-center justify-between w-full bg-background border-b border-border",
          className
        )}
        {...props}
      >
        {/* ── Left: hamburger (mobile/tablet) + logo + links (desktop) ── */}
        <div className="flex items-center gap-4 @md:gap-6">
          {/* Hamburger — visible on mobile, hidden on desktop */}
          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <button
                className="@lg:hidden p-1 rounded-md text-foreground"
                aria-label="Open menu"
              >
                <HamburgerMenuIcon className="w-5 h-5" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal container={portalContainer ?? undefined}>
              <Dialog.Overlay className="absolute inset-0 z-40 bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <Dialog.Content className="absolute inset-y-0 left-0 z-50 w-64 bg-background border-r border-border flex flex-col data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                      <PlusIcon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-[15px] font-bold text-foreground">
                      {brand}
                    </span>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      className="text-muted-foreground hover:text-foreground"
                      aria-label="Close menu"
                    >
                      <Cross2Icon className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                </div>
                <div className="flex flex-col gap-0.5 p-3">
                  {links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      onClick={() => {
                        setActiveIndex(i);
                        setMobileOpen(false);
                      }}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-xl text-[13px] transition-colors",
                        i === activeIndex
                          ? "bg-secondary text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <PlusIcon className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-[15px] font-bold text-foreground">
              {brand}
            </span>
          </div>

          {/* Desktop pill nav links */}
          <div className="hidden @lg:flex items-center gap-1">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(i);
                }}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-[13px] transition-colors",
                  i === activeIndex
                    ? "bg-secondary text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Tablet inline tab links */}
          <div className="hidden @sm:flex @lg:hidden items-center gap-1">
            {links.slice(0, 3).map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(i);
                }}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-[13px] transition-colors",
                  i === activeIndex
                    ? "bg-secondary text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: search + bell + avatar ── */}
        <div className="flex items-center gap-3">
          {/* Search — pill on desktop, icon on mobile/tablet */}
          {showSearch && (
            <>
              <button className="hidden @lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-[12px] text-muted-foreground">
                <MagnifyingGlassIcon className="w-3.5 h-3.5" />
                <span>Search...</span>
              </button>
              <button className="@lg:hidden p-1 text-muted-foreground hover:text-foreground">
                <MagnifyingGlassIcon className="w-[18px] h-[18px]" />
              </button>
            </>
          )}

          {showNotifications && (
            <button className="p-1 text-muted-foreground hover:text-foreground">
              <BellIcon className="w-[18px] h-[18px]" />
            </button>
          )}

          {/* Avatar */}
          <Avatar
            variant={avatarVariant}
            size={avatarSize}
            initials={initials}
            src={avatarSrc}
            status={avatarStatus}
          />
        </div>

        {children}
      </nav>
    );
  }
);

Nav.displayName = "Nav";

export { Nav };
