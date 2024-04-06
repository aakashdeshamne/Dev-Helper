"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { GemIcon, LogInIcon, LogOutIcon, TvIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";
import Link from "next/link";
 
function AccountDropdown(){
    const session =useSession();
    const isLoggedIn=!!session.data;
    return(
        
        <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant={"link"}>
            <Avatar className="mr-2">
                <AvatarImage src={session.data?.user?.image?? ""}/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
                
                {session.data?.user?.name}</Button></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => signOut({
                    callbackUrl: "/",
                })} ><LogOutIcon className="mr-2"/>Sign Out</DropdownMenuItem>
                <Link href="/your-rooms" passHref>
                <DropdownMenuItem>
              <TvIcon className="mr-2" /> Your Room 
           </DropdownMenuItem>
    </Link>
            </DropdownMenuContent>
            
        </DropdownMenu>
    )
}
export function Header(){
    const session =useSession();

    return(
        <header className="bg-gray-50 py-2 dark:bg-gray-900 container mx-auto">
            <div className="flex justify-between items-center">
                <Link href="/" className="flex gap-3 items-center text-xl font-bold hover:underline">
                <Image
                    src="/icon.png"
                    width={60}
                    height={60}
                    style={{ borderRadius: '9px' }}
                    alt="logo"
                />     
                    DevHelper</Link>
                <div className="flex items-center gap-4"> 
                
                {session.data &&<AccountDropdown/>}
                {!session.data && <Button variant="link" onClick={() => signIn()}><LogInIcon className="mr-2"/>Sign In</Button>}
                <ModeToggle/>
            </div>
            </div>
            
        </header>
    )
}