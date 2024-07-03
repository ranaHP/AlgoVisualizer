import { useAlgoVisualizerContext } from "../context/visualizer";
import { AlgoType } from "../lib/type";

const AlgoSelectorComponent = (props:any) => {
    const {setSelectedAlgo} = useAlgoVisualizerContext();
    return(
        <div className="bg-slate-50 rounded-md text-center flex justify-center items-center px-3 w-fit ">
            <select name="algo" id="algo" className="bg-slate-50 rounded-md text-center px-4  text-sm cursor-pointer"
            onChange={(e) => setSelectedAlgo((e.target.value) as AlgoType)}> 
                <option className="w-[150px] cursor-pointer" value="bubble">BubbleSort</option>
                <option value="selection">SelectionSort</option>
                <option value="insertioin">InsertionSort</option>
                <option value="HeapSort">HeapSort</option>
                <option value="merge">MergeSort</option>
                <option value="quick">QuickSort</option>
            </select>
        </div>
    )
}

export default AlgoSelectorComponent;