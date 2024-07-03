import { useAlgoVisualizerContext } from "../context/visualizer";
import { MAX_ANIMATION_SPEED, MIN_ANIMATION_SPEED } from "../lib/unitil";

const SpeedControllerComponent = (props: any) => {
    const { setAnimationSpeed, animationSpeed } = useAlgoVisualizerContext();
    return (
        <div className=" w-fit mr-3 flex justify-center items-center ">
            <p className="text-sm text-gray-500 dark:text-gray-400 w-fit min-w-[100px]">Speed: {animationSpeed}</p>
            <input type="range" min={MIN_ANIMATION_SPEED} max={MAX_ANIMATION_SPEED}
                onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
        </div>
    )
}

export default SpeedControllerComponent;