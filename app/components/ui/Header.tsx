"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function menu(){
  return(
    <>
    <div className="ml-5 mr-5">
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/Resume" legacyBehavior passHref>
            <NavigationMenuLink>
              Resume
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      <NavigationMenuItem>
          <Link href="/Coverletter" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Cover Letter
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/Links" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Links
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
    </>
  )
}

export default function Header(){
    return(
        <>
        <div className="flex content-center justify-between p-5 border-b-4 border-slate-300">
            <div className="flex content-center justify-between">
                <h2>CVRIZZ</h2>
            </div>
            <div className="">
              <div className="flex space-evenly">
            {menu()}
        <DropdownMenu>
  <DropdownMenuTrigger>
  <Avatar>
         <AvatarImage src="https://github.com/shadcn.png" />
         <AvatarFallback>CN</AvatarFallback>
        </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
    <Link href="/user" legacyBehavior passHref>
      Profile
    </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <Link href="/Resume" legacyBehavior passHref>
      Logout
    </Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

         </div>
            </div>
        </div>
        </>
    )
}