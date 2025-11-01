import * as React from "react";
import type { Link } from "@/types";
import { NAV_LINKS } from "@/consts";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    NavigationMenuLinkActive
} from "@/components/ui/navigation-menu";


export default function Nav() {
    return (
        <NavigationMenu className="h-16 w-full">

            <NavigationMenuList className="space-x-4 h-full">

                {NAV_LINKS.map((link: Link) => (
                    <NavigationMenuLink href={link.href} key={link.href} className="h-16 justify-center">
                        {link.name}
                    </NavigationMenuLink>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}