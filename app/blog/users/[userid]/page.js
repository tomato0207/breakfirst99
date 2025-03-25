import { blogPost } from "@/app/data/blog/blogPosts";
import { users } from "@/app/data/blog/users";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts = blogPost;

export default function PostPage({ params }) {
    const { userid } = params;  
    const user = users.find((user) => user.id === Number(userid));

    if (!user) {
        notFound();
    }


    const userPosts = posts.filter((post) => post.userId === user.id);

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <div>
                
                <div className="flex items-center gap-3 mb-6">
                    <img
                        src={user.avatar}
                        alt={`User ${user.id}'s avatar`}
                        className="w-12 h-12 rounded-full"
                    />
                    <span className="text-gray-600 hover:bg-yellow-300">
                        作者: #{user.id} {user.name}
                    </span>
                </div>
                <h1 className="text-2xl font-bold mb-6">作者文章</h1> 
            </div>
            
            <div className="grid gap-6">
                {userPosts.map((post) => (
                    <div key={post.id} className="p-4 border bg-slate-100 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-700">
                            <Link href={`/blog/posts/${post.id}`} className="hover:text-yellow-500">
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-gray-600">{post.content.slice(0, 150)}...</p> {/* 簡短顯示文章內容 */}
                    </div>
                ))}
            </div>
        </div>
    );
}
