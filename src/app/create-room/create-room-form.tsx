"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createRoomAction } from "./actions";
import { useRouter } from "next/navigation";
const formSchema=z.object({
    name:z.string().min(2).max(50),
    description:z.string().min(10),
    githubRepo:z.string().min(8).max(50),
    tags:z.string().min(2).max(50),
});
export function CreateRoomForm(){
    const router=useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          description: "",
          githubRepo:"",
          tags: ""
        },
      })
      async function onSubmit(values: z.infer<typeof formSchema>) {
         await createRoomAction(values)
         router.push("/");
      }
      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>name</FormLabel>
                  <FormControl>
                    <Input  {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public Room name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

        <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>description</FormLabel>
                  <FormControl>
                    <Input  {...field} />
                  </FormControl>
                  <FormDescription>
                    Please Describe Your Room what purpose of room.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

          <FormField
              control={form.control}
              name="githubRepo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github Link</FormLabel>
                  <FormControl>
                    <Input  {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public Github Repository name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

          <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input  {...field} placeholder="java,c++,TypeScript" />
                  </FormControl>
                  <FormDescription>
                     List The Tags of Topics on which You want to take metting so people can able to find it.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )
}