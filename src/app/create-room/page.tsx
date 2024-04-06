import { CreateRoomForm } from "./create-room-form";

export default function CreateRoomPage(){
    return(
        <div className="container mx-auto flex flex-col gap-8 pt-12 pb-24">
            <h1 className="text-4xl font-bold">Create room</h1>
            <CreateRoomForm/>
        </div>
    )
}