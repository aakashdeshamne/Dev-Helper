import { Badge } from "./ui/badge";
export function splitTags(tags:string){
    return tags.split(",").map((tags)=>tags.trim());
}
export function TagsList({tags}:{tags:string[]}){
    return(
        <div className="flex gap-2 flex-wrap">
                {tags.map((tags)=>(
                    <Badge className="w-fit" key={tags}>
                        {tags}
                    </Badge>
                ))}
        </div>
    )
}