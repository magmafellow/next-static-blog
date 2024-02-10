import PostContent from "./PostContent"
import PostPicture from "./PostPicture"

function Post({postObj}) {
    return (
        <div className="flex items-center gap-4 min-h-48 pl-2 pr-4">
            {/* img wrapper */}
            <div className="basis-[30%]"><PostPicture src={postObj.image} /></div>
            <PostContent className="basis-[70%]" content={postObj.content} />
        </div>
    )
}

export default Post
