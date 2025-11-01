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
    console.log(window.location.pathname)
    return (
        <NavigationMenu className="h-16 w-full items-stretch">
            <NavigationMenuList className="space-x-4 h-16">

                {NAV_LINKS.map((link: Link) => (
                    <NavigationMenuLink href={link.href} key={link.href} className="justify-center">
                        {link.name}
                    </NavigationMenuLink>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}