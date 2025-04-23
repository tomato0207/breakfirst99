import {blogPosts}from "@/app/data/blog/blogPosts";
import {users}from "@/app/data/blog/users";
import Link from "next/link";
import {notFound}from "next/navigation";

const posts=blogPosts;

export default  async function PostPage({params}){
    const {postId}=await params;
    const post=posts.find((post)=>post.id==Number(postId));
    if(!post){
        notFound();
    } 

    const user=users[post.userId-1];
    return(
        <div className="container mx-auto p-4 max-w-2xl">
            <div>
                <div className="flex items-center gap-3 mb-6">   
            <img
            src={user.avatar}
            alt={`User${user.id}'s avatar`}
            className="w-12 h-12 rounded-full"
            />
            <Link
           href={`/blog/users/${user.id}`}
           className="text-gray-600 hover:bg-yellow-300"
           >
            作者:#{user.id}:{user.name}
           </Link>
        </div>
           <h1 className="tevt-2xl font-bold mb-6">{post.title}</h1> 
           </div>
           <article className="p-4 border bg-slate-100 round-lg shadow-sm">
            {post.content}
           </article>
        </div>
    );
}