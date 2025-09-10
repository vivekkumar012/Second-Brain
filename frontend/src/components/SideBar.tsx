import { FileText, GraduationCap, Link2, Tags, Twitter, Youtube } from "lucide-react";
import { SideBarIcons } from "./SideBarIcons";

export function SideBar() {
    return <div className="h-screen border-r w-76 absolute shadow-md top-0 left-0 bg-white border-2">
        <div className="pl-4 flex gap-3 py-2">
                <GraduationCap size={30} className="text-purple-400" />
                <h1 className="text-2xl font-bold text-black">Second <span className="text-2xl font-bold text-blue-400">Brain</span></h1>
        </div>
        <div className="pt-4 pl-4 ">
            <SideBarIcons text="Twitter" icons={<Twitter />}/>
            <SideBarIcons text="Videos" icons={<Youtube />} />
            <SideBarIcons text="Documents" icons={<FileText />} />
            <SideBarIcons text="Links" icons={<Link2 />} />
            <SideBarIcons text="Tags" icons={<Tags />} />
        </div>
    </div>
}