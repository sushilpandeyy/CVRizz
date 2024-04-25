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

export default function links(){
    return (
        <>
         <Card>
          <CardHeader>
            <CardTitle>Links</CardTitle>
            <CardDescription>
            Attach Your Social Profiles
            </CardDescription>
          </CardHeader>
          <CardContent>
                   
            </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
        </>
    )
}