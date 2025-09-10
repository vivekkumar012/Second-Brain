import { X } from "lucide-react";
import { Button } from "./Button";
import { useRef } from "react";


export function CreateContentModel({open, setClose}) {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();

    function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
    }

    return <div>
        {open && <div className="w-full fixed h-screen top-0 left-0 opacity-60 bg-slate-500">
            <div className="flex justify-center mt-20">
                <div className="w-[200px] h-[300px] bg-white opacity-100 p-4">
                   <div className="flex justify-end cursor-pointer">
                     <X size={25} onClick={setClose}/>
                   </div>
                    <div className="mb-4">
                        <input reference={titleRef} type="text" placeholder="Text" className="w-full rounded-md p-4" />
                    </div>
                    <div className="mb-4">
                        <input reference={linkRef} type="text" placeholder="Link" className="w-full rounded-md p-4" />
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={addContent} variant='primary' text='Submit' />
                    </div>
                </div>
            </div>
        </div>}
    </div>
}