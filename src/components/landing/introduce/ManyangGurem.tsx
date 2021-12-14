import Image from "next/image"

const ManyangGuremGrid = () => {
    return (
        <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
            <div>
                <Image className=" md:w-48  md:rounded-none rounded-full"
                    src="/images/welcomeCat.png"
                    alt="welcome cat"
                    width={260}
                    height={260} />
            </div>
            <div className="col-start-3">
                <Image className=" md:w-48  md:rounded-none rounded-full"
                    src="/images/welcomeCat.png"
                    alt="welcome cat"
                    width={260}
                    height={260} />
            </div>
            <div>       <Image className=" md:w-48  md:rounded-none rounded-full"
                src="/images/welcomeCat.png"
                alt="welcome cat"
                width={260}
                height={260} />
            </div>
            <div>       <Image className=" md:w-48  md:rounded-none rounded-full"
                src="/images/welcomeCat.png"
                alt="welcome cat"
                width={260}
                height={260} />
            </div>
            <div className="row-start-1 col-start-2 col-span-2">
                <Image className=" md:w-48  md:rounded-none rounded-full"
                    src="/images/welcomeCat.png"
                    alt="welcome cat"
                    width={260}
                    height={260} />
            </div>
        </div>
    );
};

export default ManyangGuremGrid;
