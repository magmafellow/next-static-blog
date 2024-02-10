import Post from "../ui/blog/Post";
import posts from "../utils/blog/data";

function BlogApp() {
  return (
    // Posts
    <div className="col-span-3 row-span-4 overflow-auto flex flex-col bg-gradient-to-r gap-2 from-white to-stone-200">
      {posts.map((post) => (
        <Post key={post.id} postObj={post} />
      ))}
    </div>
  );
}

export default BlogApp;
