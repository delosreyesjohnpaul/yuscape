"use client";

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

export const OrgSidebar = () => {
    const searchParams = useSearchParams();

    const favourites = searchParams.get("favourites");

    return (
        <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
            <Link href="/">
                <div className="flex items-center gap-x-0">
                    <Image src="/logo.png" alt="Logo" height={20} width={20} />
                    <span className={cn("bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 inline-flex tracking-tight font-extrabold text-transparent bg-clip-text text-2xl", 
                        font.className
                    )}>
                        uScape
                    </span>
                </div>
            </Link>

            <OrganizationSwitcher
                hidePersonal
                appearance={{
                    elements: {
                        rootBox: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        },
                        organizationSwitcherTrigger: {
                        padding: "6px",
                        width: "100%",
                        borderRadius: "6px",
                        border: "1px solid #E5E7EB",
                        justifyContent: "space-between",
                        backgroundColor: "white",
                        },
                    },
                }}
            />

            <div className="space-y-1 w-full">
                <Button
                    variant={favourites ? "ghost" : "secondary"}
                    asChild
                    size="lg"
                    className="font-normal justify-start px-2 w-full"
                >
                    <Link href="/">
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Team Boards
                    </Link>
                </Button>

                <Button
                    variant={favourites ? "secondary" : "ghost"}
                    asChild
                    size="lg"
                    className="font-normal justify-start px-2 w-full"
                    >
                    <Link
                        href={{
                        pathname: "/",
                        query: {
                            favourites: "true",
                        },
                        }}
                    >
                        <Star className="h-4 w-4 mr-2" />
                        Favourite Boards
                    </Link>
                </Button>
            </div>

        </div>
    )
}