import "./App.css";
import React from "react";
import Tag from "./Components/Tag";
import Random from "./Components/Random";



function App() {


  return (
    <div className="w-full h-screen flex flex-col background overflow-x-hidden items-center">

      <h1 className="text-2xl font-semibold md:font-bold text-center bg-white mt-10 w-11/12
      rounded-lg py-2 uppercase px-10">Random gifs</h1>

      <div className="flex flex-col w-full items-center gap-10 mt-8">
        <Random/>

        <Tag/>
      </div>



    </div>
  );
}

export default App;

