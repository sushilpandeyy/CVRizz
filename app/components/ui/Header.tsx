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
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

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

function DesktopMenu(){
  return(
    <>
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
    </>
  )
}


function detectDeviceType(userAgent: string): string {
    if (/mobi|android/i.test(userAgent)) {
        return 'mobile';
    } else if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
        return 'tablet';
    } else {
        return 'desktop';
    }
}

function Mobileslide(){
  return(
    <>
    <Sheet>
  <SheetTrigger><HamburgerMenuIcon/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>
        <div className="mt-10 flex justify-between content-center">
          <div>
            Sushil Pandey
          </div>
          <div>
          <Avatar>
         <AvatarImage src="https://github.com/shadcn.png" />
         <AvatarFallback>CN</AvatarFallback>
        </Avatar>
          </div>
        </div>
      </SheetTitle>
    </SheetHeader>
    <ul>
      <li className="pt-4 pl-2">
        <Link href={'/Resume'}>Resume</Link>
      </li>
      <li className="pt-4 pl-2">
        <Link href={'/cover'}>Cover Letter</Link>
         
      </li>
      <li className="pt-4 pl-2">
        <Link href={'/links'}>Links</Link>
      </li>
      <li className="pt-4 pl-2">
        <Link href={"/logout"}>Logout</Link>
      </li>
    </ul>
  </SheetContent>
</Sheet>

    </>
  )
}

export default function Header(){
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36';
    return(
        <>
        <div className="flex content-center justify-between p-5 border-b-4 border-slate-300">
            <div className="flex content-center justify-between">
                <h2>CVRIZZ</h2>
            </div>
            <div className="">
              {(detectDeviceType(userAgent)=="mobile")?<Mobileslide/>:<DesktopMenu/>}
            </div>
        </div>
        </>
    )
}