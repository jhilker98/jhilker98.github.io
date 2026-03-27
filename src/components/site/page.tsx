import { SiteSidebar } from "@/components/SiteSidebar"
import Nav from "@/components/Nav"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { Toggle } from "@/components/ui/toggle"
import { MoonIcon, SunIcon } from "lucide-react";

interface Props {
  children: React.ReactNode
}

export default function Page(props: Props) {
  return (
    <SidebarProvider>
      <SiteSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          
          <Nav />
          <Toggle x-on:click="darkMode = !darkMode" className="ml-auto mr-0">
            <SunIcon className="h-5 w-5 hidden dark:block" />
            <MoonIcon className="h-5 w-5 block dark:hidden" />
          </Toggle>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {props.children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
