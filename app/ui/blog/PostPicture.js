import Image from "next/image"

function PostPicture({ src }) {
    return <Image className="h-full rounded w-full object-cover" src={`/${src}`} width={300} height={180} alt="placeholder picture" />
}

export default PostPicture
