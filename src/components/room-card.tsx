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
import { Room } from "@/db/schema";
import { DeleteIcon, GithubIcon } from "lucide-react";
import { TagsList, splitTags } from "@/components/tags-list";

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
    <CardFooter>
      <Button asChild>
         <Link href={`/rooms/${room.id}`}>Join Room</Link>
      </Button>
    </CardFooter>
   </Card>
  )
}

