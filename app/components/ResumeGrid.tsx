"use client";

import React from "react";
import {Verticalcard} from "./ui/Verticalcard";
export default function ResumeGrid(){

    return (
        <>
  <div className="pt-10 grid grid-cols-4 gap-4">
  <Verticalcard
      title="Create New"
      img="https://res.cloudinary.com/djug8zfu7/image/upload/v1713766056/u5fum5pixijgpqy8bpqm.png"
      key="Jildjas"
      update="12-Jan-23"
    />
    <Verticalcard
      title="Title"
      img="https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg"
      key="Jildjas"
      update="12-Jan-23"
    />
    <Verticalcard
      title="Title"
      img="https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg"
      key="Jildjas"
      update="12-Jan-23"
    />
  </div>
</>
    )
}