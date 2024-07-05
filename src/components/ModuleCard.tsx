import type { Module } from "../types/module";

export const ModuleCard: React.FC<Module> = (props) => {
  return (
    <div
      className={`${
        props.available ? "border-emerald-500" : "border-red-500"
      } relative module-card-${
        props.available ? "green" : "red"
      } flex flex-col justify-center rounded-lg border-solid border-2 border-b-4 cursor-pointer`}
    >
      <h2 className="text-lg p-1.5 pl-2">{props.name}</h2>
      <p className="font-light p-1.5 pl-2">
        Target Temparature: {props.targetTemperature} °C
      </p>
      <p
        className={`${
          props.available ? "text-emerald-500" : "text-red-500"
        } font-medium p-1.5 pl-2`}
      >
        {!props.available && "Not"} Available
      </p>
    </div>
  );
};
