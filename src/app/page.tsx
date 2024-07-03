"use client"
import { useEffect } from "react";
import AlgoSelectorComponent from "./components/algoSelector.component";
import AlogDescriptionComponent from "./components/alogDescription.component";
import AlogInputComponent from "./components/alogInput.component";
import GraphComponent from "./components/graph.component";
import SpeedControllerComponent from "./components/speedController.component";
import TitleComponent from "./components/title.component";
import { useAlgoVisualizerContext } from "./context/visualizer";

const Home = () => {
  const { arrayToSort, resetArrayAndAnimation } = useAlgoVisualizerContext();

  useEffect(() => {
    resetArrayAndAnimation();
  }, [])

  return (
    <div className=" px-7 flex gap-2 flex-col">
      {/* for title section */}
      <div className=" flex flex-row  justify-between py-5">
        <TitleComponent />
        <div className="flex flex-row">
          <SpeedControllerComponent />
          <AlgoSelectorComponent />
        </div>
      </div>
      {/* algo desc section*/}
      <div>
        <AlogDescriptionComponent />
      </div>
      {/* algo inputs section */}
      <div>
      </div>
      {/* graph section */}
      <div className=" flex justify-around gap-4">
        <AlogInputComponent />
        <GraphComponent />
      </div>
    </div>
  )
}
export default Home;