import { useEffect, useState } from "react";
import { ModuleCard } from "../components/ModuleCard";
import type { Module } from "../types/module";

export function Home() {
  const [modules, setModules] = useState<Module[]>([]);

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
  }, []);

  return (
    <div className="w-full min-h-full overflow-y-auto p-6">
      <h1 className="relative title text-white text-4xl">Modules</h1>
      <div className="overflow-hidden w-full h-auto text-white mt-8 flex flex-col gap-4">
        {modules.map((item) => (
          <ModuleCard {...item} />
        ))}
      </div>
    </div>
  );
}
