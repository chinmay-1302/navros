"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/app/page";

function ChartsNav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="grid items-start gap-2">
      {navItems.map( (item, index) => (
        <Link key={index} href={item.href}>
          <span className={cn(
            "group flex items-center rounded-md px-3 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground", pathname === item.href ? 'bg-accent' : 'bg-transparent'
          )}>
            <span>{item.name}</span>
          </span>
        </Link>
      ) )}
    </nav>
  )
}

export default ChartsNav
