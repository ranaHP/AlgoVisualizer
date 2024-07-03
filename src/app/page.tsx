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
    <div className=" px-7 ">
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
        <AlogInputComponent/>
      </div>
      {/* graph section */}
      <div className=" flex">
        
        <GraphComponent />
      </div>
    </div>
  )
}
export default Home;