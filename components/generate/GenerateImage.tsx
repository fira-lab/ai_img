"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { useImage } from "@/app/context/image";
export default function GenerateImage() {
  const { generateImage } = useImage();
  return (
    <div className="my-5  flex space-x-2">
      <Input className="p-5  w-1/2 " placeholder="generate ai image" />
      <Button onClick={generateImage} className="p-6">
        Generate Image
      </Button>
    </div>
  );
}
