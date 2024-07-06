import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import type { Module } from "../types/module";

export function Module() {
  const [params, setParams] = useSearchParams();
  const [notFound, setNotFound] = useState<boolean>(false);
  const [module, setModule] = useState<Module | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!params.get("id")) {
      setNotFound(true);
      setModule(null);
    } else {
      fetch(`http://localhost:3001/modules/${params.get("id")}`)
        .then((res) => {
          if (res.status === 404) {
            setNotFound(true);
            setModule(null);
          }
          return res.json();
        })
        .then((data) => {
          if (!notFound) {
            setModule(data);
          }
        });
    }
  }, []);

  return (
    <>
      <div className="w-full min-h-full overflow-y-auto p-6 md:p-12">
        <h1 className="relative title text-white text-4xl">
          {module ? module.name : "Module Not Found"}
        </h1>
        <div
          className={`${
            module?.available ? "border-emerald-500" : "border-red-500"
          } mt-8 p-2 relative w-auto flex flex-col items-start justify-center rounded-lg border-solid border-2 border-b-[5px]`}
        >
          <p className="p-1.5 pl-2 text-white text-lg font-light max-w-full md:max-w-[50%]">
            <span className="font-medium">Description:</span>{" "}
            {module?.description}
          </p>
          <p
            className={`${
              module?.available ? "text-emerald-500" : "text-red-500"
            } font-medium p-1.5 pl-2`}
          >
            {!module?.available && "Not"} Available
          </p>
          <p className="font-light text-white p-1.5 pl-2">
            Target Temparature:{" "}
            <span className="font-semibold">
              {module?.targetTemperature} °C
            </span>
          </p>
          <div className="flex items-center gap-3 p-1.5 pl-2 text-white">
            <button className="hover:text-white hover:bg-emerald-500 transition border-2 border-solid border-emerald-500 p-1.5 pl-6 pr-6 rounded-lg text-emerald-500 cursor-pointer bg-transparent">
              Edit
            </button>
            <button
              onClick={() => navigate("/")}
              className="hover:bg-emerald-600 hover:border-emerald-600 transition border-2 border-solid border-emerald-500 p-1.5 pl-6 pr-6 rounded-lg cursor-pointer bg-emerald-500"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
