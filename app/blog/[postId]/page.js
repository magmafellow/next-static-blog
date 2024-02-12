import posts from "@/app/utils/blog/data";
import Image from "next/image";

function Page({ params }) {
  const foundPost = posts.find((post) => post.id === Number(params.postId));

  return (
    <div className="col-span-3 row-span-4 overflow-auto px-2">
      <h2 className="text-center text-3xl font-bold p-4">{foundPost.title} <span className="text-sm text-slate-400">#id{foundPost.id}</span></h2>
      <p className="antialiased tracking-wide mb-4">{foundPost.content}</p>
      {/* Img wrapper */}
      <div className="w-[70%] mx-auto flex justify-center">
        <Image
          src={`/${foundPost.image}`}
          width={500}
          height={200}
          alt="Placeholder"
        />
      </div>
    </div>
  );
}

export default Page;
