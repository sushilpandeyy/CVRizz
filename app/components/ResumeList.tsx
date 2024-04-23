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
  import { ResumeTableRow } from "./ui/ResumeTableRow";
import Link from "next/link";
import React from "react";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
export default function ResumeGrid(){
    const ab: Date = new Date();
    const d: string = formatDate(ab);

    function formatDate(date: Date): string {
      const year: number = date.getFullYear();
      const month: string = String(date.getMonth() + 1).padStart(2, '0');
      const day: string = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    
    return (
        <>
        <div className="pt-10">
        <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="font-bold text-left">Title</TableHead>
      <TableHead className="font-bold text-center">Updated on</TableHead>
      <TableHead className="font-bold text-right">Options</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="">
      <TableCell className="p-5 text-left">Add New Resume</TableCell>
      <TableCell className="p-5 text-center"></TableCell>
      <TableCell className="p-5 text-right">
      </TableCell>
    </TableRow>
        <ResumeTableRow 
        key="test"
        title="TESTING 2"
        update="08-May-23"
        img="tesr.png"
        /> 
  </TableBody>
</Table>

</div>
        </>
    )
}