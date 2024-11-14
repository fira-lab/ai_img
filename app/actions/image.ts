"use server";
// app/actions/image.ts
"use server";
import { auth } from "@clerk/nextjs/server"; // Use Clerk's auth method
import { redirect } from "next/navigation";

export async function generateImageAi() {
  await auth.protect();
  try {
    // Check if user is authenticated

    console.log("Here we go again");
    // Your image generation logic goes here
    // Generate the image or any other logic here
  } catch (err) {
    console.error("Error during image generation:", err);
    redirect("/"); // Redirect to home or show an error page if something goes wrong
  }
}
