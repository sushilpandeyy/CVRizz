"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DragHandleDots2Icon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,

  } from "@/components/ui/sheet"
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

interface cardinfo{
    Title: string;
    Designation: string;
    Key: string;
}

function Cardit(props:cardinfo){
    return(
        <>
        <Sheet key="bottom">
          <SheetTrigger asChild>
          <Card className="p-5">
            <div className="flex justify-start content-center">
            <div className="flex justify-center content-center pt-3 p-2">
                <DragHandleDots2Icon/>
            </div>
            <div>
               <CardTitle>{props.Title}</CardTitle>
               <CardDescription>{props.Designation}</CardDescription>
            </div>
            </div>
        </Card>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Edit Links</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Update</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        </>
    )
    
}

export default function Projects(){
    return (
        <>
         <Cardit
         Key="test"
         Title="Projects"
         Designation="Web Developer"
         />
         <AlertDialog>
  <AlertDialogTrigger>
  <div className="flex justify-end content-end">
            <div className="p-2">
         <Button variant="outline"><PlusIcon/> Add New Item</Button>
         </div>
         </div>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
        </>
    )
}