import Image from "next/image"

const PostSeriesCard = ({ imgSrc }) => {
    return (
        <div className="m-8 cursor-pointer">
            <Image className="rounded-3xl"
                loading="lazy"
                src={`/images/${imgSrc}.jpg`}
                alt="manyang"
                width={512} height={512} />
        </div>
    )
}

export default PostSeriesCard