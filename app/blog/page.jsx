import Link from "next/link";
import {blogPost} from "@/app/data/blog/blogPosts";
import {avatar} from "@/app/data/blog/avatar"

const posts = blogPost;
const users = avatar;

export default function PostPage(){
    return(
      <div>
        <h1>技術文章{posts.length}篇</h1>
        <div>
            {posts.map((post)=>{
                const user = users[post.userId-1];
                
                return(
                    <div key={post.postId}>
                        <div>
                            <img src={user.avatar}
                                alt={`User ${post.userId}'s avatar`}
                                className="w-10 h-10 rounded-full"
                                ></img>
                            <Link href={`/blog/posts/${post.postId}`}>
                                {`${post.postId}: ${post.title}`}
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>  
    );
}