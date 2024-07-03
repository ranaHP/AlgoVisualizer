import { useAlgoVisualizerContext } from "../context/visualizer";

const AlogInputComponent = (props:any) => {
    const {resetArrayAndAnimation} = useAlgoVisualizerContext();
    return(
        <div className=" bg-white p-8 rounded-lg shadow-lg text-gray-800 text-sm font-light text-transparent bg-clip-text bg-gradient-to-r to-black from-blue-500">
        <p className="mb-2"><strong>Key Characteristics:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>Comparison-Based: Compares each pair of adjacent elements.</li>
          <li>In-Place: Does not require extra space for sorting (O(1) space complexity).</li>
          <li>Stable: Maintains the relative order of equal elements.</li>
          <li>Time Complexity:
            <ul className="list-disc list-inside ml-6">
              <li>Best Case: O(n) (when the list is already sorted)</li>
              <li>Average and Worst Case: O(n^2)</li>
            </ul>
          </li>
        </ul>
      </div>
    )
}

export default AlogInputComponent;