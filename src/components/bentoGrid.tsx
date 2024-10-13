import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  width?: string; // Optional width prop
  height?: string; // Optional height prop
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  width = "100%", // Default responsive width
  height = "100vh", // Default responsive height
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: width,
    height: height,
  };

  return (
    <div
      className="mt-4 mx-auto w-full max-w-full md:w-1/2 lg:w-1/3"
      style={cardStyle}
    >
      <div className="flex items-center justify-center h-full px-6 py-3 bg-black bg-opacity-30 flex-col">
        <div className="mb-2 text-lg font-bold text-white">{title}</div>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default Card;
