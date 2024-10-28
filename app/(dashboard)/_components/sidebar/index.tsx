import { List } from "./list";
import { NewButton } from "./new-button"; 

export function Sidebar() {
    return (
        <aside className="fixed z-[1] left-0 bg-gradient-to-b from-yellow-500 via-orange-400 to-pink-300  h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
            <List/>
            <NewButton />
        </aside>
    )
}