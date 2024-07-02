"use client"
import { createContext, useContext, useState } from "react";
import { AlgoType } from "../lib/type";
import { MAX_ANIMATION_SPEED } from "../lib/unitil";

interface AlgoVisualizerContextType {
    arrayToSort : number[];
    setArrayToSort: (array: number[]) => void;
    selectedAlgo: AlgoType;
    setSelectedAlgo: (algo: AlgoType) => void
    isSorting: boolean
    setIsSorting: (value: boolean) => void;
    isAnimationComplete: boolean;
    setIsAnimationComplete: (value: boolean) => void,
    animationSpeed: number;
    setAnimationSpeed : (value: number) => void;
    resetArrayAndAnimation: () => void;
    runAnimation: () => void
};

const AlgoVisualizerContext = createContext<AlgoVisualizerContextType | null>(null);

/* 
    This code defines a React context provider named AlgoVisualizerProvider 
    that manages state for an algorithm visualization application. 
    It initializes state variables for sorting, animation speed, and algorithm selection. 
    It also provides functions to reset the array and run the animation. 
    The context provider wraps its children components with the context value that 
    includes the state variables and functions for managing the visualization.
*/

const generateRandomArray = (size: number, min: number, max: number): number[] => {
    return Array.from({length: 10}, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

export const AlgoVisualizerProvider = ({children}: {children: React.ReactNode}) => {
    const [arrayToSort, setArrayToSort] = useState<number[]>([8,1,9,2,3]);
    const [selectedAlgo, setSelectedAlgo] = useState<AlgoType>('bubble');
    const [isSorting, setIsSorting] = useState<boolean>(false);
    const [animationSpeed, setAnimationSpeed] = useState<number>(MAX_ANIMATION_SPEED);
    const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false);

    const resetArrayAndAnimation =() => {
        setArrayToSort(generateRandomArray(50, 1, 100));
    }
    const runAnimation = () => {}
    
    const value = {
        arrayToSort,
        setArrayToSort,
        selectedAlgo,
        setSelectedAlgo,
        isSorting,
        setIsSorting,
        isAnimationComplete,
        setIsAnimationComplete,
        animationSpeed,
        setAnimationSpeed,
        resetArrayAndAnimation,
        runAnimation
    }
    return <AlgoVisualizerContext.Provider value={value}> {children} </AlgoVisualizerContext.Provider>
}

/*
    This code defines a custom hook named useAlgoVisualizerContext
    that retrieves the context from AlgoVisualizerContext. 
    Finally, it returns the context obtained from AlgoVisualizerContext.
*/
export const useAlgoVisualizerContext = () => {
    const context = useContext(AlgoVisualizerContext);
    if (!context){
        throw new Error('useAlgoVisualizerContext must be used within a AlgoVisualizerProvider');
    }
    return context;
}