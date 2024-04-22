"use client";
import { GridIcon, ListBulletIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Header from "../components/ui/Header";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import ResumeGrid from "../components/ResumeGrid";


export default function Resume(){
    const [selectedItem, setSelectedItem] = useState('grid');
    const handleSelectItem = (item:string) => {
        setSelectedItem(item);
      };    
    function MenubarDemo() {
        return (
            <div className="flex">
            <Menubar>
            <MenubarMenu>
              <MenubarTrigger onClick={() => handleSelectItem('grid')}>
                <GridIcon />
                <p className={`pl-2 pr-2`}>Grid</p>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger onClick={() => handleSelectItem('list')}>
                <ListBulletIcon />
                <p className={`pl-2 pr-2`}>List</p>
              </MenubarTrigger>
            </MenubarMenu>
            </Menubar>
          </div>
        )
      }
    function Heading(){
        return (
            <>
             <div className="flex justify-between content-center">
            <div>
            <h2 className="scroll-m-20 text-3xl tracking-tight">
            RESUME<br/></h2>
            </div>
            <div className="flex items-center justify-center">
            <div className="flex items-center justify-between">
                <MenubarDemo/>
            </div>
            </div>
            </div>
            </>
        )
    }


    return(
        <>
        <Header/>
        <div className="mx-8 mt-3">
        <Heading/>
        {(selectedItem=='grid')?<ResumeGrid/>:" "}
        </div>
        </>
    )
}