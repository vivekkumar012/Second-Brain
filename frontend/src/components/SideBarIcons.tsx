import type { ReactElement } from "react";


export function SideBarIcons ({text, icons} : {
    text: string;
    icons: ReactElement;
}) {
    return (
        <div>
        <div className="flex gap-3 text-gray-700 py-2 cursor-pointer hover:bg-gray-300 rounded max-w-48 transition-all duration-300">
            <div className="mb-4 flex items-center ">
                {icons}
            </div>
             <div>
                {text}
             </div>
        </div>
        </div>
    )
}