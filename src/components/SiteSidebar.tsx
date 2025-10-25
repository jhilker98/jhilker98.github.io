
import * as React from "react"

import { SearchForm } from "~/components/search-form"
import { VersionSwitcher } from "~/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger
} from "~/components/ui/sidebar"

import { SITE_META } from "~/consts";
export function SiteSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-between">

          <h2 className="uppercase lg:text-center p-2 font-semibold">Jacob's Website</h2>
          <SidebarTrigger className="h-full" />
        </div>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}

      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}