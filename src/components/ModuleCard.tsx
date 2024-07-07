import { motion } from "framer-motion";
import type { Module, ModuleTemperature } from "../types/module";
import { NavLink } from "react-router-dom";

interface Props {
  module: Module;
  temperature?: ModuleTemperature;
}

export const ModuleCard: React.FC<Props> = (props) => {
  return (
    <NavLink to={`/module?id=${props.module.id}`}>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ type: "tween", bounce: 0, duration: 0.5 }}
        animate={{ opacity: [0, 1] }}
        className={`${
          props.module.available ? "border-emerald-500" : "border-red-500"
        } relative module-card-${
          props.module.available ? "green" : "red"
        } flex flex-col justify-center rounded-lg border-solid border-2 border-b-[5px] cursor-pointer`}
      >
        <h2 className="text-lg p-1.5 pl-2">{props.module.name}</h2>
        <p className="font-light p-1.5 pl-2">
          Target Temparature:{" "}
          <span className="font-semibold">
            {props.module.targetTemperature} °C
          </span>
        </p>

        {props.module.available && (
          <p className="font-light p-1.5 pl-2">
            Actual Temparature:{" "}
            <span
              className={`font-semibold ${
                props.temperature?.temperature &&
                Math.abs(
                  props.temperature?.temperature -
                    props.module.targetTemperature
                ) <= 0.5
                  ? "text-emerald-500"
                  : "text-red-500"
              }`}
            >
              {props.temperature?.temperature} °C
            </span>
          </p>
        )}
        <p
          className={`${
            props.module.available ? "text-emerald-500" : "text-red-500"
          } font-medium p-1.5 pl-2`}
        >
          {!props.module.available && "Not"} Available
        </p>
      </motion.div>
    </NavLink>
  );
};
