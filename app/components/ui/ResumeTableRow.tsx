"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link";
import React from "react";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

interface liststruct{
    key: string;
  title: string;
  update: string;
  img: string;
}

export const ResumeTableRow: React.FC<liststruct> = ({ title, update, img }) => {
    return (
    <>
    <TableRow className="">
      <TableCell className="p-5 text-left">{title}</TableCell>
      <TableCell className="p-5 text-center">{update}</TableCell>
      <TableCell className="p-5 text-right">
      <DropdownMenu>
      <DropdownMenuTrigger>
        <DotsVerticalIcon/>
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
      </TableCell>
    </TableRow>
    </>    
    )
}
