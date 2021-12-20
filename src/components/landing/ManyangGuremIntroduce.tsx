
import Image from "next/image"
import ManyangGuremIntroduceCard from "./ManyangGuremIntroduceCard";

const ManyangGuremIntroduce = () => {
    return (
        <div className="relative block lg:flex border-2 mx-auto">
            <ManyangGuremIntroduceCard imgSrc={"manyang_1"} title={"만냥"} description={"나에게는 애교만점 첫째"} ></ManyangGuremIntroduceCard>
            <ManyangGuremIntroduceCard imgSrc={"gurem_1"} title={"구름"} description={"모두에게 애교만점 둘째"}></ManyangGuremIntroduceCard>
        </div>
    )
};

export default ManyangGuremIntroduce;