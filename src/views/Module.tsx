import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ModuleEdit } from "../components/ModuleEdit";
import { HistoryChart } from "../components/HistoryChart";
import { HistoryForm } from "../components/HistoryForm";
import { ModuleTemperature as ModuleTemp } from "../components/ModuleTemperature";
import type {
  Module,
  ModuleTemperature,
  HistoricalData,
} from "../types/module";
import { io } from "socket.io-client";

export function Module() {
  const [params, setParams] = useSearchParams();
  const [module, setModule] = useState<Module | null>();
  const [temperature, setTemperature] = useState<number | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [history, setHistory] = useState<HistoricalData[]>([]);

  const navigate = useNavigate();

  async function showHistoricalData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);

    const startDate = new Date(data.get("start") as string).toISOString();
    const stopDate = new Date(data.get("stop") as string).toISOString();
    const mode = data.get("mode");

    await fetch(
      `http://localhost:3001/modules/${module?.id}/history?start=${startDate}&stop=${stopDate}&mode=${mode}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHistory(data);
      });
  }

  useEffect(() => {
    if (!params.get("id")) {
      navigate("/404");
    } else {
      fetch(`http://localhost:3001/modules/${params.get("id")}`)
        .then((res) => {
          if (res.status === 404) {
            setModule(null);
            navigate("/404");
          }
          return res.json();
        })
        .then((data) => {
          setModule(data);
        });
    }

    const socket = io("http://localhost:3001", {
      transports: ["websocket"],
    });

    socket.on("moduleUpdate", (message: ModuleTemperature[]) => {
      const index = message.findIndex((item) => item.id === params.get("id"));
      if (index !== -1) {
        setTemperature(message[index].temperature);
      } else {
        setTemperature(null);
      }
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <>
      {modal && module && (
        <ModuleEdit
          module={module}
          update={(module: Module) => setModule(module)}
          close={() => setModal(false)}
        />
      )}
      <div className="w-full min-h-full overflow-y-auto p-6 md:p-12">
        <h1 className="relative title text-white text-4xl">{module?.name}</h1>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ type: "tween", bounce: 0, duration: 0.5 }}
          animate={{ opacity: [0, 1] }}
          className={`${
            module?.available ? "border-emerald-500" : "border-red-500"
          } mt-8 p-2 relative w-auto flex flex-col items-start justify-center rounded-lg border-solid border-2 border-b-[5px]`}
        >
          <p className="p-1.5 pl-2 text-white text-lg font-light max-w-full md:max-w-[50%]">
            <span className="font-medium">Description:</span>{" "}
            {module?.description}
          </p>
          <p className="font-light text-white p-1.5 pl-2">
            Target Temparature:{" "}
            <span className="font-semibold">
              {module?.targetTemperature} °C
            </span>
          </p>
          {temperature && (
            <ModuleTemp module={module as Module} temperature={temperature} />
          )}
          <p
            className={`${
              module?.available ? "text-emerald-500" : "text-red-500"
            } font-medium p-1.5 pl-2`}
          >
            {!module?.available && "Not"} Available
          </p>
          <div className="flex items-center gap-3 p-1.5 pl-2 text-white">
            {module?.available && (
              <button
                onClick={() => setModal(true)}
                className="hover:text-white hover:bg-emerald-500 transition border-2 border-solid border-emerald-500 p-1.5 pl-6 pr-6 rounded-lg text-emerald-500 cursor-pointer bg-transparent"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => navigate("/")}
              className={`${
                module?.available
                  ? "hover:bg-emerald-600 hover:border-emerald-600"
                  : "hover:bg-red-600 hover:border-red-600"
              } transition border-2 border-solid ${
                module?.available
                  ? "bg-emerald-500 border-emerald-500"
                  : "bg-red-500 border-red-500"
              } p-1.5 pl-6 pr-6 rounded-lg cursor-pointer `}
            >
              Go Back
            </button>
          </div>
        </motion.div>
        {module?.available && (
          <div className="flex flex-col md:flex-row justify-start md:justify-between w-full">
            <HistoryForm submit={showHistoricalData} />
            <div className="w-full md:w-[95%] pt-6 h-[12rem] md:h-auto">
              {history && <HistoryChart history={history} />}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
