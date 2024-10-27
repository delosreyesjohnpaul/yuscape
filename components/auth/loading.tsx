
import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="flex items-center gap-0">
          <Image 
            src="/logo.png"
            width={120}
            height={120}
            alt="Logo"
            className="animate-pulse duration-700"
          />
           <h1 className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 
             inline-flex tracking-tight font-extrabold text-transparent 
             bg-clip-text text-6xl sm:text-8xl animate-pulse duration-700">
            uScape
          </h1>
      </div>
    </div>
  );
};
