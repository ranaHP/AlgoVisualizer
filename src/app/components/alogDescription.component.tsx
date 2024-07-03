import { useAlgoVisualizerContext } from "../context/visualizer";

const AlogDescriptionComponent = (props: any) => {
    const { selectedAlgo } = useAlgoVisualizerContext();
    return (
        <div className="bg-gray-50 min-h-[200px] mb-4 text-center flex  flex-col justify-start rounded-md shadow-sm pt-4">
            <div className="text-sm font-light text-transparent bg-clip-text bg-gradient-to-r to-black from-blue-500 flex">
                <div className="mx-auto bg-white p-8 rounded-lg shadow-lg text-gray-800">
                    <h1 className="text-2xl font-bold mb-4"> {`${selectedAlgo} Sorting Algorithm`.toWellFormed()}</h1>
                    <p className="mb-2"><strong>Overview:</strong> Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</p>

                    <p className="mb-2"><strong>Algorithm Steps:</strong></p>
                    <ol className="list-decimal list-inside mb-4">
                        <li>Start at the beginning of the list.</li>
                        <li>Compare the first two elements.</li>
                        <li>If the first element is greater than the second, swap them.</li>
                        <li>Move to the next pair of elements, and repeat step 3.</li>
                        <li>Continue this process for the entire list.</li>
                        <li>Repeat steps 1-5 for n-1 passes.</li>
                    </ol>
                </div>
                <div className="mx-auto bg-white p-8 rounded-lg shadow-lg text-gray-800">
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
            </div>
        </div>
    )
}

export default AlogDescriptionComponent;