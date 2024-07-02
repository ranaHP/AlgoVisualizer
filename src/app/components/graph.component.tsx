import { useAlgoVisualizerContext } from "../context/visualizer";

const GraphComponent = (props: any) => {
    const { arrayToSort } = useAlgoVisualizerContext();
    return (
        <div className="bg-gray-100 min-h-[350px] mb-4 p-2 rounded-sm text-center flex  flex justify-center items-end">
            {
                arrayToSort.map((item, index) => {
                    return <div key={index}>
                        <div
                            className="w-[10px] border-b-2 border-gray-500 rounded-md  
                    bg-slate-300 text-center mx-0.5 shadow-sm
                    bg-gradient-to-r 
                    "
                            style={{ height: `${item * 3}px`,width: `${500 / arrayToSort.length }px` }}
                        ></div>
                        <div className="origin-left-top transform -hue-rotate-15 font-light pt-3 text-sm">
                            {item}
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default GraphComponent;