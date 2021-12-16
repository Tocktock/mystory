import Image from "next/image"
import ManyangGuremCard from "./ManyangGuremCard";

const ManyangGuremGrid = () => {
    return (
            <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 my-12 mx-auto">
                <ManyangGuremCard></ManyangGuremCard>
                <ManyangGuremCard></ManyangGuremCard>
                <ManyangGuremCard></ManyangGuremCard>
                <ManyangGuremCard></ManyangGuremCard>
                <ManyangGuremCard></ManyangGuremCard>
                <ManyangGuremCard></ManyangGuremCard>
            </div>
    );
};

export default ManyangGuremGrid;
