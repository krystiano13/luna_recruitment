import { motion } from "framer-motion";
import type { Module } from "../types/module";

export const ModuleCard: React.FC<Module> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ type: "tween", bounce: 0, duration: 0.5 }}
      animate={{ opacity: [0, 1] }}
      className={`${
        props.available ? "border-emerald-500" : "border-red-500"
      } relative module-card-${
        props.available ? "green" : "red"
      } flex flex-col justify-center rounded-lg border-solid border-2 border-b-[5px] cursor-pointer`}
    >
      <h2 className="text-lg p-1.5 pl-2">{props.name}</h2>
      <p className="font-light p-1.5 pl-2">
        Target Temparature: <span className="font-semibold">{props.targetTemperature} °C</span>
      </p>
      <p
        className={`${
          props.available ? "text-emerald-500" : "text-red-500"
        } font-medium p-1.5 pl-2`}
      >
        {!props.available && "Not"} Available
      </p>
    </motion.div>
  );
};
