"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Link2 } from "lucide-react";
import { toast } from "sonner";

interface ActionsProp {
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideOffset?: DropdownMenuContentProps["sideOffset"];
    id: string;
    title: string;
};

export const Actions = ({
    children,
    side,
    sideOffset,
    id,
    title,
}: ActionsProp) => {
    const onCopyLink = () => {
        navigator.clipboard
          .writeText(`${window.location.origin}/boards/${id}`)
          .then(() => toast.success("Link copied!"))
          .catch(() => toast.error("Failed to copy link"));
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent
                onClick={(e) => e.stopPropagation()}
                side={side}
                sideOffset={sideOffset}
                className="w-60"
            >
                <DropdownMenuItem
                    className="p-3 cursor-pointer"
                    onClick={onCopyLink}
                >
                    <Link2 className="h-4 w-4 mr-2" />
                    Copy board link
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
  