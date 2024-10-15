"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";

interface HoverCardProps {
  imageA: string;
  imageB: string;
  title: string;
  description: string;
}

const HoverCard: React.FC<HoverCardProps> = ({
  imageA,
  imageB,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full rounded-none overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="relative h-64 overflow-hidden">
        <Image
          src={isHovered ? imageB : imageA}
          alt={title}
          fill
          className="object-cover transition-all duration-500 ease-in-out transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={isHovered}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </CardHeader>
    </Card>
  );
};

export default HoverCard;
