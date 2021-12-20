import { useRef, useState } from "react"
import Image from "next/image"

const ManyangGuremIntroduceCard = ({ imgSrc, title, description }) => {
    const capRef = useRef(null)
    const [captionState, setCaptionState] = useState("")
    const showText = () => {
        setCaptionState("opacity-100")
    }
    const hideText = () => {
        setCaptionState("opacity-0")
    }
    return (
        <figure onMouseEnter={showText} onMouseLeave={hideText}
            className="relative max-w-lg mx-auto my-12 " >
            <picture>
                <Image className="rounded-3xl"
                    loading="lazy"
                    src={`/images/${imgSrc}.jpg`}
                    alt="manyang"
                    width={512} height={512} />
            </picture>
            {/* 글자 백그라운드 ㅓㅊ리. */}
            <figcaption className={"absolute bottom-1/4 left-1/4 font-medium opacity-0 ease-in-out duration-300 " + captionState} ref={capRef}>
                <div className="text-gray-100 font-bold text-xl">
                    {title}
                </div>
                <div className="text-indigo-50">
                    {description}
                </div>
            </figcaption>
        </figure>
    )
}

export default ManyangGuremIntroduceCard