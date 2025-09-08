import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

export function Card({title, link, type}: CardProps) {
    return <div>
        <div className="bg-white p-4 rounded-md border-slate-200 max-w-72 border min-h-48 min-w-72">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="text-gray-500">
                        <ShareIcon />
                    </div>
                    <h2 className="text-md">Project Ideas</h2>
                </div>
                <div className="flex gap-2">
                    <div className="text-gray-500">
                        <a href={link} target="_blank">
                            <ShareIcon />
                        </a>   
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon />
                    </div>
                </div>
                
            </div>
            <div className="pt-8">
              {type === "youtube" && <iframe className="w-full" src={link.replace("watch", "embed")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

              {type === "twitter" && <blockquote className="twitter-tweet">
                <a href={link}></a>
                </blockquote>}
            </div>
        </div>
    </div>
}