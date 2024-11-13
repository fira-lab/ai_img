import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center m-3">
      <div className="grid max-w-1xl">
        <div className="my-20">
          <h1 className="text-7xl lg:text-9xl sm:text-4xl font-bold">
            <span className=" bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text animate-pulse">
              AI
            </span>{" "}
            Image Generator
          </h1>
        </div>
      </div>
    </div>
  );
}
