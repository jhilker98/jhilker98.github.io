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
        <NavigationMenu>

            <NavigationMenuList>

                {NAV_LINKS.map((link: Link) => (
                    <NavigationMenuLink href={link.href}>
                        {link.name}
                    </NavigationMenuLink>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}