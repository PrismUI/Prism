import * as react from 'react';
import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    label?: string;
    asChild?: boolean;
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
}
interface NavProps extends HTMLAttributes<HTMLElement> {
    brand?: string;
    links?: NavLink[];
    /** Container element for the mobile menu portal (scopes overlay to a parent) */
    portalContainer?: HTMLElement | null;
}
declare const Nav: react.ForwardRefExoticComponent<NavProps & react.RefAttributes<HTMLElement>>;

interface InspectorControl {
    type: "text" | "select" | "color" | "number" | "list";
    label: string;
    propKey: string;
    options?: string[];
    subFields?: {
        key: string;
        label: string;
    }[];
    min?: number;
    max?: number;
}
interface RegistryComponent {
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

declare const buttonConfig: RegistryComponent;

declare const cardConfig: RegistryComponent;

declare const navConfig: RegistryComponent;

declare function cn(...inputs: ClassValue[]): string;

declare const registryConfigs: Record<string, RegistryComponent>;
declare const registryComponents: Record<string, React.ComponentType<Record<string, unknown>>>;

export { Button, Card, CardContent, CardDescription, CardHeader, CardPreview, CardTitle, type InspectorControl, Nav, type RegistryComponent, buttonConfig, buttonVariants, cardConfig, cn, navConfig, registryComponents, registryConfigs };
