import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  designer: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  designer,
  price,
}) => {
  return (
    <Card className="w-full bg-stone-200 rounded-none overflow-hidden">
      <CardHeader className="relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">by {designer}</p>
        <p className="text-xl font-semibold mt-2">Rp.{price}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
