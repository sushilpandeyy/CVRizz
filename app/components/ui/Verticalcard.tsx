"use client";

import React from "react";
import Link from "next/link";

interface cardstruct{
    key: string;
    title: string;
    update: string;
    img: string;
}

export const Verticalcard: React.FC<cardstruct> = ({ title, update, img }) => {
    return (
    <>
    <div className="max-w-xl min-h-80 rounded overflow-hidden shadow-lg bg-transparent p-2 border rounded border-white transition-transform transform-gpu hover:scale-105">
  <img className="w-full h-auto object-cover " src={img} alt="Resume"/>
    </div>
    </>    
    )
}
