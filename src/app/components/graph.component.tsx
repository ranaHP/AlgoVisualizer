import { useState } from "react";
import { useAlgoVisualizerContext } from "../context/visualizer";

const GraphComponent = (props: any) => {
    const { arrayToSort } = useAlgoVisualizerContext();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePlayPause = () => {
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : arrayToSort.length - 1);
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => prevIndex < arrayToSort.length - 1 ? prevIndex + 1 : 0);
    };

    return (
        <div className="w-full bg-white p-8 rounded-lg shadow-lg text-gray-800 text-sm font-light text-transparent bg-clip-text ">
            <div className="bg-gray-50 min-h-[350px]  mb-4 py-2 px-5 rounded-sm text-center flex justify-center items-end ">
                {
                    arrayToSort.map((item, index) => {
                        return <div key={index}>
                            <div
                                className="w-[10px] border-b-2 border-gray-500 rounded-md  
                    bg-slate-300 text-center mx-0.5 shadow-sm
                    bg-gradient-to-r "
                                style={{ height: `${item * 3}px`, width: `${500 / arrayToSort.length}px` }}
                            ></div>
                            <div className="origin-left-top transform -hue-rotate-15 font-light pt-3 text-sm">
                                {item}
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="w-full ">
                <div className="flex justify-center mb-4 gap-3">
                    <button  onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
                    <button onClick={handlePrev}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                </div>
                <div className="flex justify-center space-x-4">
                    <button id="prev-btn" className="bg-gray-500 hover:bg-gray-700 text-white font-normal py-0.5 px-2 text-sm rounded">Previous Step</button>
                    <button id="next-btn" className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-0.5 px-2 text-sm rounded">Next Step</button>
                    <button id="play-btn" className="bg-green-500 hover:bg-green-700 text-white font-normal py-0.5 px-2 text-sm rounded">Play</button>
                    <button id="stop-btn" className="bg-red-500 hover:bg-red-700 text-white font-normal py-0.5 px-2 text-sm rounded">Stop</button>
                </div>
            </div>
        </div>
          
    )
}

export default GraphComponent;