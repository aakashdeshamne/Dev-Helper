"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
import { Room } from "@/db/schema";
import { DeleteIcon, GithubIcon, TrashIcon } from "lucide-react";
import { TagsList, splitTags } from "@/components/tags-list";
import { deleteRoomAction } from "./action";

export function RoomCard({room}:{room:Room}){
  return(
    <Card>
    <CardHeader>
      <CardTitle>{room.name}</CardTitle>
      <CardDescription>{room.description}</CardDescription>
    </CardHeader>
    <CardContent>
      {room.githubRepo &&(
        <Link 
           href={room.githubRepo} 
           className="flex items-center gap-2 mb-2"
           target="_blank"
           rel="noopener noreferrer">
          <GithubIcon/>
          Visit GitHub Repo
        </Link>
      )}
    <TagsList tags={splitTags(room.tags)}/>
    </CardContent>
    <CardFooter className="flex gap-2">
      <Button asChild>
         <Link href={`/rooms/${room.id}`}>Join Room</Link>
      </Button>
      
      <AlertDialog>
        <AlertDialogTrigger asChild>
        <Button variant={"destructive"} >
            <TrashIcon className="w-3 h-4 mr-2"/>Delete Room
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your room  from your account and any data associated with the room
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
            onClick={()=>{
                deleteRoomAction(room.id);
               }}
            >Conferm Delete</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    </CardFooter>
   </Card>
  )
}

