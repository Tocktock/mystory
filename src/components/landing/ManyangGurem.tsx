import { useState } from "react";
import ManyangGuremCard from "./ManyangGuremCard";


// 정렬하는 알고리즘 필요할 듯.
const ManyangGuremGrid = () => {
    const [listOverflow, setListOverFlow] = useState("h-192 overflow-hidden")
    const [showMoreDisplay, setShowMoreDisplay] = useState("block")
    const [showFoldButton, setShowFoldButton] = useState("hidden")
    // 추후에 생가갷보자...

    const showMore = () => {
        setListOverFlow("")
        setShowMoreDisplay("hidden")
        setShowFoldButton("block")
    }

    const foldGrid = () => {
        setListOverFlow("h-192 overflow-hidden")
        setShowMoreDisplay("blodk")
        setShowFoldButton("hidden")
    }
    return (
        <div className={"relative mt-12 flex flex-col"}>
            <div className={"relative w-3/4 grid grid-flow-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto " + listOverflow}>
                <ul>
                    <ManyangGuremCard src="manyang_2"></ManyangGuremCard>
                    <ManyangGuremCard src="manyang_3"></ManyangGuremCard>
                    <ManyangGuremCard src="manyang_4"></ManyangGuremCard>
                    <ManyangGuremCard src="manyang_5"></ManyangGuremCard>
                    <ManyangGuremCard src="manyang_6"></ManyangGuremCard>
                    <ManyangGuremCard src="manyang_1"></ManyangGuremCard>
                </ul>
                <ul>
                    <ManyangGuremCard src="manyang_8"></ManyangGuremCard>
                    <ManyangGuremCard src="manyang_10"></ManyangGuremCard>
                    <ManyangGuremCard src="manyang_11"></ManyangGuremCard>
                    <ManyangGuremCard src="manyang_9"></ManyangGuremCard>
                    <ManyangGuremCard src="manyang_13"></ManyangGuremCard>
                    <ManyangGuremCard src="manyang_12"></ManyangGuremCard>
                </ul>
                <ul>
                    <ManyangGuremCard src="gurem_2"></ManyangGuremCard>
                    <ManyangGuremCard src="gurem_1"></ManyangGuremCard>
                    <ManyangGuremCard src="gurem_3"></ManyangGuremCard>
                    <ManyangGuremCard src="gurem_4"></ManyangGuremCard>
                    <ManyangGuremCard src="gurem_5"></ManyangGuremCard>
                    <ManyangGuremCard src="gurem_6"></ManyangGuremCard>
                </ul>
                <div className={"inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none absolute " + showMoreDisplay}>
                    <button onClick={showMore} className="relative bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center pointer-events-auto">Show more...</button>
                </div>
            </div>
            <div className={" inset-x-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none " + showFoldButton}>
                <button onClick={foldGrid} className="relative bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center pointer-events-auto">Fold...</button>
            </div>
        </div>
    );
};

export default ManyangGuremGrid;
