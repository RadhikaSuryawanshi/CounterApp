"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

export async function Loadings() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <h1 className="text-2xl text-center mt-10">Welcome to Home Page</h1>;
}

export default function MainPage() {
  const [value, setValue] = useState(0);
  // console.log(value);
  function handleminus() {
    setValue(value - 1);
  }
  function handleplus() {
    setValue(value + 1);
  }
  const reverse = useCallback(() => {
    setValue(0);
    toast("Start Again");
  }, []);
  useEffect(() => {
    reverse();
  }, [reverse]);

  return (
    <div className="w-full h-full  flex flex-col justify-center items-center  p-1">
      {/* <h1 className="text-4xl font-bold text-shadow-pink-300 text-shadow-md">Counting Start</h1> */}
      <div className="w-full h-full flex justify-center p-4 items-center">
        <div className="w-full flex justify-between items-center mt-[14%]">
          <div className="w-[8%] h-[20%] shadow-xl flex justify-center items-center rounded-[60%]">
            <button
              type="button"
              className="text-9xl font-bold text-shadow-red-600 text-shadow-lg"
              onClick={handleminus}
            >
              -
            </button>
          </div>
          <div className="  flex justify-center items-center">
            <h1 className="text-9xl font-extrabold text-shadow-pink-800 text-shadow-lg">
              {value}
            </h1>
          </div>
          <div className="w-[8%] h-[20%] shadow-xl flex justify-center items-center rounded-[60%]">
            <button
              type="button"
              className="text-9xl font-bold text-shadow-green-500 text-shadow-lg"
              onClick={handleplus}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <footer className="w-full flex flex-col justify-center items-center mt-[13%] pb-2 ">
        <button type="button" className="text-3xl font-bold" onClick={reverse}>
          {" "}
          ⟲
        </button>
      </footer>
    </div>
  );
}
