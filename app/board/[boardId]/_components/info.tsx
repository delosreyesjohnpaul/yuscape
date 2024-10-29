"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Hint } from "@/components/hint";
import { useRenameModal } from "@/store/use-rename-modal"; 
import { Actions } from "@/components/actions";
import { Menu } from "lucide-react";


interface InfoProps {
    boardId: string;
}

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

const TabSeparator = () => {
    return <div className="text-neutral-300 px-1.5">|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
    const { onOpen } = useRenameModal();

    const data = useQuery(api.board.get, {
        id: boardId as Id<"boards">,
      });
    
    if (!data) return <InfoSkeleton />;

    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
             <Hint label="Go to boards" side="bottom" sideOffset={10}>
                <Button className="px-2 items-center gap-x-1" variant="board" asChild>
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" height={25} width={25}/>
                        <span className={cn("bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 inline-flex tracking-tight font-extrabold text-transparent bg-clip-text text-2xl", 
                            font.className
                        )}>
                            uScape
                        </span>
                    </Link>
                </Button>
            </Hint>
            <TabSeparator />

            <Hint label="Edit title" side="bottom" sideOffset={10}>
                <Button
                    variant="board"
                    className="text-base font-normal px-2"
                    onClick={() => onOpen(data._id, data.title)}
                >
                {data.title}
                </Button>
            </Hint>
            <TabSeparator />

            <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
                <div>
                <Hint label="Main menu" side="bottom" sideOffset={10}>
                    <Button size="icon" variant="board">
                    <Menu />
                    </Button>
                </Hint>
                </div>
            </Actions>
        </div>
    )
}


export function InfoSkeleton() {
    return (
      <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
    );
}