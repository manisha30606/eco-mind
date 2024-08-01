import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Router/Home";
import Data2 from "./Router/Data2"
import Data1 from "./Router/Data1";
export default function App() {
  return (
    //Routes.........
    <>
      <Routes>
      <Route path="/eco-mind/" element={<Home />} />
        <Route path="/eco-mind/data" element={<Data1 />} />
        <Route path="/eco-mind/data1" element={<Data2/>}/>
     


      </Routes>


    </>
  );
}
