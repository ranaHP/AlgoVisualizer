import { useAlgoVisualizerContext } from "../context/visualizer";

const AlogInputComponent = (props:any) => {
    const {resetArrayAndAnimation} = useAlgoVisualizerContext();
    return(
        <div  className="bg-gray-200 min-h-[150px] mb-4 text-center flex  flex-col justify-center">
            AlogInputComponent
            <button onClick={() => resetArrayAndAnimation()}>
                run 
            </button>
        </div>
    )
}

export default AlogInputComponent;