import { useEffect, useState } from "react";
import { ModuleCard } from "../components/ModuleCard";
import { io } from "socket.io-client";
import type { Module, ModuleTemperature } from "../types/module";

export function Home() {
  const [modules, setModules] = useState<Module[]>([]);
  const [moduleTemperatures, setModuleTemperatures] = useState<
    ModuleTemperature[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:3001/modules", { mode: "cors" })
      .then((res) => res.json())
      .then((data: Module[]) => {
        const modulesArray: Module[] = [];
        data.forEach((item) => {
          modulesArray.push(item);
        });
        setModules(modulesArray);
      });

    const socket = io("http://localhost:3001", {
      transports: ["websocket"],
    });

    socket.on("moduleUpdate", (message) => {
      setModuleTemperatures(message);
    });

    return () => {
      socket.close();
    }
  }, []);

  return (
    <div className="w-full min-h-full overflow-y-auto p-6 md:p-12">
      <h1 className="relative title text-white text-4xl">Modules</h1>
      <div className="overflow-hidden w-full h-auto text-white mt-8 flex flex-col gap-4">
        {modules.map((item) => (
          <ModuleCard
            key={item.id}
            module={{ ...item }}
            temperature={moduleTemperatures.find((el) => el.id === item.id)}
          />
        ))}
      </div>
    </div>
  );
}
