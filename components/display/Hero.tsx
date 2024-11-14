"use client";
import React from "react";
import Image from "next/image";

const thumbnails = [
  "/images/mountain.jpg",
  "/images/fall.jpg",
  "/images/eagle.jpg",
  "/images/cross.jpg",
  "/images/sea.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = React.useState(thumbnails[0]);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentImageIndex = thumbnails.indexOf(prevImage);
        const nextImageIndex = (currentImageIndex + 1) % thumbnails.length;

        return thumbnails[nextImageIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-full h-[50vh] p-8 max-w-4xl mx-auto">
      {/* Main Hero Image */}
      <div className="relative w-full h-full">
        <Image
          src={currentImage}
          alt="Hero Image"
          layout="fill" // This will make the image cover the container
          objectFit="cover"
          className="rounded-[20px] shadow-lg"
        />
      </div>
      <ThumbnailRow
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
    </div>
  );
}

interface ThumbnailRowProps {
  currentImage: string;
  setCurrentImage: React.Dispatch<React.SetStateAction<string>>;
}

const ThumbnailRow = ({ currentImage, setCurrentImage }: ThumbnailRowProps) => {
  return (
    <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex bg-white bg-opacity-70 p-4 rounded-[20px] shadow-xl w-auto max-w-full space-x-4 overflow-x-auto">
      {thumbnails.map((src, index) => (
        <div
          key={index}
          className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-[15px] overflow-hidden shadow-md transition-transform transform hover:scale-105 flex-shrink-0 cursor-pointer ${
            currentImage === src ? "border-4 border-blue-500" : ""
          }`}
          onClick={() => setCurrentImage(src)} // Updates the current image on click
        >
          <Image
            src={src}
            alt={`Thumbnail ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-[15px]"
          />
        </div>
      ))}
    </div>
  );
};
