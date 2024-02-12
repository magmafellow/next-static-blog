import Link from "next/link"
import PostContent from "./PostContent"
import PostPicture from "./PostPicture"

function Post({postObj}) {
    return (
        <Link href={`/blog/${postObj.id}`} className="flex hover:bg-gradient-to-l hover:from-white hover:to-stone-200 rounded-xl transition items-center gap-4 min-h-48 pl-2 pr-4">
            {/* img wrapper */}
            <div className="basis-[30%]"><PostPicture src={postObj.image} /></div>
            <PostContent className="basis-[70%]" content={postObj.content} title={postObj.title} />
        </Link>
    )
}

export default Post
