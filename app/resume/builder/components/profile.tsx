"use client";

import { Button } from "@/components/ui/button"
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

export default function Profile(){
    return (
        <>
         <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
            Edit personal details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-3">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="flex justify-around content-center mb-3">
            <div className="w-1/2 mr-2">
              <Label htmlFor="name">Email</Label>
              <Input id="Email" type="email" defaultValue="Pedro@gmai.com" />
            </div> 
            <div className="w-1/2 ml-2">
              <Label htmlFor="name">Phone</Label>
              <Input id="Email" type="number" defaultValue="Pedro@gmai.com" />
            </div>  
            </div>        
            </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
        </>
    )
}