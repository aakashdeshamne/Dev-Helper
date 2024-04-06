import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getUserRooms } from "@/data-access/rooms";
import { SearchBar } from "../search-bar";
import { RoomCard } from "./user-room-card";

export default async function YourRoomsPage({searchParams}:{searchParams:{search:string}}) {
  const rooms=await getUserRooms(searchParams.search);
  return (
    <main className=" min-h-screen p-24">
      <div className="flex justify-between items-center mb-10">
      <h1 className="text-4xl">Your Dev Rooms</h1>
      <Button asChild>
        <Link href="/create-room">Create Room</Link>
      </Button>
      </div>
      <div className="mb-12">
      <SearchBar/>
      </div>
      <div className="grid grid-cols-3 gap-4">
      {rooms.map(room =>{
        return <RoomCard key={room.id} room= {room}/>
      })
      
      } 
    </div>   
  </main>
  );
}
