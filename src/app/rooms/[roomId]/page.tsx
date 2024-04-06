import { getRoom } from "@/data-access/rooms";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { TagsList, splitTags } from "@/components/tags-list";
import { DevFinderVideo } from "./video-player";

export default async function RoomPage(props:{ params: { roomId: string}}){
    const roomId=props.params.roomId;
    const room =await getRoom(roomId);
    if(!room){
        return <div>No Room Found here</div>
    }
    const tags=splitTags(room.tags);
    return (
        <div className="grid grid-cols-4 min-h-screen">
            <div className="col-span-3 p-4 pr-2">
               <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
               <DevFinderVideo room={room}/>
               </div>
            </div>
            <div className="col-span-1 p-4 pl-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
                <h1 className="text-base">{room?.name}</h1>
                <p className="text-base text-gray-600">{room?.description}</p>
                <TagsList tags={tags}/>
                {room.githubRepo &&(
                    <Link 
                        href={room.githubRepo} 
                        className="flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer">
                        <GithubIcon/>
                        Visit GitHub Repo
                    </Link>
                    )}
               </div>
            </div>
        </div>

    )
}