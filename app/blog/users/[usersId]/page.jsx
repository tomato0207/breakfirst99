import {blogPosts} from "@/app/data/blog/blogPosts";
import {users} from "@/app/data/blog/users";
import {notFound} from "next/navigation";


export default  function UserPage({params}){
  const {usersId} = params; 
  const user=users.find((user)=>user.id==Number(usersId));

  if (!user) {
    notFound(); 
  }
  const userPosts = blogPosts.filter((post) => post.userId == user.id);

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <img
          src={user.avatar}
          alt={`User ${user.name}'s avatar`}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-black-700">  Email: {user.email}</p>
          <p className="text-black-700">  Role: {user.role}</p>
          <p className="text-black-6700"> Style: {user.style}</p>
          <p className="text-xs text-black-6700">{user.avatar}</p>
        </div>
        
      </div>
      <div>
            <h1 className="text-2xl bg-slate-300 rounded shadow">
                發表文章:
            </h1>
            <ul className="space-y-4">
          {userPosts.length === 0 ? (
            <p className="text-gray-600">此用戶未發表文章。</p> 
          ) : (
            userPosts.map((post) => (
              <li key={post.id} className="border-b py-4">
                <a href={`/blog/posts/${post.id}`} className="text-green-400 hover:underline">
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-gray-600">{post.content.slice(0, 100)}...</p>
                </a>
              </li>
            ))
          )}
        </ul>
        </div>
    </div>
  );
}