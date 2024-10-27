
import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/logo.png"
        width={120}
        height={120}
        alt="Logo"
        className="animate-pulse duration-700"
      />
    </div>
  );
};
