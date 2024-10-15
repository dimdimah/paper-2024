"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  productName: string;
  price: number;
  imageUrl: string;
  colors: { name: string; colorCode: string; imageUrl: string }[];
}

export default function ProductCard({
  productName,
  price,
  imageUrl,
  colors,
}: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(() => colors?.[0] || null);
  const formattedPrice = useMemo(() => `Rp.${price.toLocaleString()}`, [price]);

  return (
    <Card className="w-full bg-stone-200 rounded-none overflow-hidden">
      <CardHeader>
        <Image
          src={selectedColor?.imageUrl || imageUrl}
          alt={`${productName} in ${selectedColor?.name}`}
          width={500}
          height={500}
          className="w-full h-auto mb-4"
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-semibold">{productName}</h2>
        <p className="text-gray-500 mb-2">{formattedPrice}</p>
        <p className="text-gray-700">{selectedColor?.name}</p>

        <div className="flex space-x-2 mt-4">
          {colors.map((color) => (
            <Button
              key={color.colorCode}
              variant={
                selectedColor?.name === color.name ? "default" : "outline"
              }
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full p-0 ${
                selectedColor?.name === color.name
                  ? "border border-black"
                  : "border border-gray-300"
              }`}
              aria-label={`Select ${color.name} color`}
              style={{ backgroundColor: color.colorCode }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
