"use client";

import Header from "@/app/components/ui/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BackpackIcon, CrumpledPaperIcon, FileTextIcon, LightningBoltIcon, Link2Icon, Pencil2Icon, PersonIcon } from "@radix-ui/react-icons";
import Profile from "./components/profile";
import Links from "./components/links";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
        <TabsContent value="Link">
           <Links/>
        </TabsContent>
        <TabsContent value="Experience">
           <Experience/>
        </TabsContent>
        <TabsContent value="Project">
          <Projects/>
        </TabsContent>
        <TabsContent value="Skills">
          <Skills/>
        </TabsContent>
        <TabsContent value="Education">
          <Education/>
        </TabsContent>
        </Tabs>
    )
}

function Rightbar(){
  return (
    <>
    <div className="flex content-center justify-between">
      <div>
        <Card>
          jks
        </Card>
      </div>
      <div>
        <div className="flex flex-col">
          <Card>
          <CardContent>
            <div className="pt-10">
          <FileTextIcon/>
          </div>
          </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </>
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
