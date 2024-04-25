"use client";

import Header from "@/app/components/ui/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BackpackIcon, CrumpledPaperIcon, LightningBoltIcon, Link2Icon, Pencil2Icon, PersonIcon } from "@radix-ui/react-icons";
import Profile from "./components/profile";

function Alltabs(){
    return (
        <Tabs defaultValue="Profile">
        <TabsList>
        <TabsTrigger value="Profile"><PersonIcon/>Profile</TabsTrigger>
        <TabsTrigger value="Link"><Link2Icon/>Link</TabsTrigger>
        <TabsTrigger value="Experience"><BackpackIcon/>Experience</TabsTrigger>
        <TabsTrigger value="Education"><Pencil2Icon/>Education</TabsTrigger>
        <TabsTrigger value="Project"><CrumpledPaperIcon/>Project</TabsTrigger>
        <TabsTrigger value="Skills"><LightningBoltIcon/>Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="Profile">
           <Profile/>
        </TabsContent>
        </Tabs>
    )
}

export default function Build() {
    return (
        <>
         <Header />
         <div className="mx-8 mt-3">
         <Alltabs/>
         </div>
        </>
    );
}
