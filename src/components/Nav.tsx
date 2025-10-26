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
} from "@/components/ui/navigation-menu";


export default function Nav() {
    return (
        <NavigationMenu className="bg-blue-500 h-full w-full">

            <NavigationMenuList className="space-x-4 bg-red-500 h-full">

                {NAV_LINKS.map((link: Link) => (
                    <NavigationMenuLink href={link.href} key={link.href} className="h-full">
                        {link.name}
                    </NavigationMenuLink>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}