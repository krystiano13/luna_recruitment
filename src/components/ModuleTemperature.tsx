import type { Module } from "../types/module";

interface Props {
  module: Module;
  temperature: number;
}

export const ModuleTemperature: React.FC<Props> = ({ module, temperature }) => {
  return (
    <p className="font-light text-white p-1.5 pl-2">
      Actual Temparature:{" "}
      <span
        id="temp"
        className={`font-semibold ${
          temperature &&
          module &&
          Math.abs(temperature - module.targetTemperature) <= 0.5
            ? "text-emerald-500"
            : "text-red-500"
        }`}
      >
        {temperature} °C
      </span>
    </p>
  );
};
