import Image from "next/image"
interface Props {
    src: string,
}

// image 사이즈 조절
// 누르면 확대 or 좋아요?
const ManyangGuremCard = ({ src }) => {
    return (
        <div className="flex w-full p-2 border-2 justify-center items-center">
            <img className="" loading="lazy" src={`/images/${src}.jpg`} alt="manyang" />
        </div>
    )
}

export default ManyangGuremCard