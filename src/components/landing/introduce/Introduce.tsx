
import Image from "next/image"

const Introduce = () => {
    return <div className="flex h-128 border-2 justify-center">
        <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-4 shadow-2xl">
            <Image className=" md:w-48  md:rounded-none rounded-full"
                src="/images/welcomeCat.png"
                alt="welcome cat"
                width={260}
                height={260} />
            <div className="pt-6 md:p-8 max-w-2xl text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. Itss easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500">
                        Sarah Dayan
                    </div>
                    <div className="text-gray-700">
                        Staff Engineer, Algolia
                    </div>
                </figcaption>
            </div>
        </figure>
    </div>
};

export default Introduce;

    // return <div className="flex h-96 border-2 mx-12 justify-center">
    //      <div className="flex border-2 items-center justify-center">
    //          <IntroducePic></IntroducePic>
    //      </div>
    //      <div className="flex border-2 items-center justify-center">
    //          <IntroducePhrase></IntroducePhrase>
    //      </div>
    //   </div>