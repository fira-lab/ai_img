"use client";
import React from "react";
import { generateImageAi } from "../actions/image";

interface ImageContextType {
  imagePrompt: string;
  setImage: (query: string) => void; // Setter for image prompt
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  generateImage: () => void; // Function to generate image
}

const ImageContext = React.createContext<ImageContextType | undefined>(
  undefined
);

export const ImageProvider = ({ children }: { children: React.ReactNode }) => {
  const [imagePrompt, setImagePrompt] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  // Function to generate image
  const generateImage = async () => {
    try {
      await generateImageAi();
    } catch (error) {
      console.error("Redirect error:", error);
    }
  };

  return (
    <ImageContext.Provider
      value={{
        imagePrompt,
        setImage: setImagePrompt, // Update the prompt
        loading,
        setLoading,
        generateImage, // Pass function to generate the image
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = (): ImageContextType => {
  const context = React.useContext(ImageContext);
  if (context === undefined) {
    throw new Error("useImage must be used within an ImageProvider");
  }
  return context;
};
