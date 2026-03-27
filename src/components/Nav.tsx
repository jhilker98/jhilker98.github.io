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
        <NavigationMenu className="bg-blue-500 h-16 w-full">

            <NavigationMenuList className="space-x-4 h-16">

                {NAV_LINKS.map((link: Link) => (
                    // TODO center text
                    <NavigationMenuLink href={link.href} key={link.href} className="h-full items-center text-center my-auto">
                        {link.name}
                    </NavigationMenuLink>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}