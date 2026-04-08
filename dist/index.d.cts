import * as react from 'react';
import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost" | "destructive" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    iconOnly?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    label?: string;
    asChild?: boolean;
    iconOnly?: boolean;
    showLeftIcon?: boolean;
    leftIcon?: string;
    showRightIcon?: boolean;
    rightIcon?: string;
    /** Theme token overrides — values like "primary", "md", "sm", "none" reference theme.css tokens */
    tokenRadius?: string;
    tokenBg?: string;
    tokenText?: string;
    tokenPx?: string;
    tokenPy?: string;
    tokenShadow?: string;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const Card: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CardHeader: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CardTitle: react.ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: react.ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & react.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
interface CardPreviewProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    imageUrl?: string;
}
declare const CardPreview: react.ForwardRefExoticComponent<CardPreviewProps & react.RefAttributes<HTMLDivElement>>;

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
    /** Container element for the mobile menu portal (scopes overlay to a parent) */
    portalContainer?: HTMLElement | null;
}
declare const Nav: react.ForwardRefExoticComponent<NavProps & react.RefAttributes<HTMLElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { Button, Card, CardContent, CardDescription, CardHeader, CardPreview, CardTitle, Nav, buttonVariants, cn };
