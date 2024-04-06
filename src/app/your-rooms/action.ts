"use server";

import { deleteRoom, getRoom } from "@/data-access/rooms";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function deleteRoomAction(roomId:string){
    const session=await getSession();
    if(!session) throw new Error("you must Logged in for creating any room");
    const room=await getRoom(roomId);
    if(room?.userId !== session.user.id){
        throw new Error("You are not authorized to delete this room")
    }
    await deleteRoom(roomId);
    revalidatePath("/your-rooms")
}