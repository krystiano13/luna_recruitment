import { motion } from "framer-motion";
import { useState } from "react";
import type { Module } from "../types/module";

interface Props {
  module: Module | null;
  close: () => void;
}

const divVariant = {
  close: { opacity: [1, 0] },
  open: { opacity: [0, 1] },
};

const formVariant = {
  close: { scale: [1, 0] },
  open: { scale: [0, 1] },
};

export const ModuleEdit: React.FC<Props> = (props) => {
  const [isModalClose, setIsModalClose] = useState<boolean>(false);
  return (
    <motion.div
      initial={isModalClose ? { opacity: 1 } : { opacity: 0 }}
      transition={{ type: "tween", bounce: 0, duration: 0.25 }}
      variants={divVariant}
      animate={isModalClose ? "close" : "open"}
      className="w-[100vw] h-[100vh] flex justify-center items-center bg-slate-950 z-50 fixed bg-opacity-75"
    >
      <motion.form
        initial={isModalClose ? { scale: 1 } : { scale: 0 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          delay: 0.25,
          duration: 0.25,
        }}
        variants={formVariant}
        animate={isModalClose ? "close" : "open"}
        className="min-w-[95vw] md:min-w-[30rem] min-h-[36rem] bg-slate-800 flex flex-col items-center justify-center gap-6 p-6 rounded-md"
      >
        <input
          className="text-white focus:border-b-emerald-400 transition-colors w-full p-2 outline-none border-b-2 border-b-solid border-b-emerald-500 bg-slate-900"
          name="name"
          type="text"
          placeholder="name"
          required
          defaultValue={props.module?.name}
        />
        <textarea
          className="min-h-[12rem] resize-none text-white focus:border-b-emerald-400 transition-colors w-full p-2 outline-none border-b-2 border-b-solid border-b-emerald-500 bg-slate-900"
          name="description"
          placeholder="description"
          required
        >
          {props.module?.description}
        </textarea>
        <input
          className="text-white focus:border-b-emerald-400 transition-colors w-full p-2 outline-none border-b-2 border-b-solid border-b-emerald-500 bg-slate-900"
          name="targetTemperature"
          required
          placeholder="Target Temperature"
          type="number"
          min={0}
          max={40}
          defaultValue={props.module?.targetTemperature}
        />
        <div className="w-full flex items-center gap-3">
          <button
            type="submit"
            className="w-full hover:bg-emerald-600 hover:border-emerald-600 transition border-2 border-solid bg-emerald-500 border-emerald-500 p-1.5 pl-6 pr-6 rounded-lg cursor-pointer text-white"
          >
            Edit
          </button>
          <button
            onClick={() => {
              setIsModalClose(true);
              setTimeout(() => {
                props.close();
              }, 250);
            }}
            type="button"
            className="w-full hover:bg-red-600 hover:border-red-600 transition border-2 border-solid bg-red-500 border-red-500 p-1.5 pl-6 pr-6 rounded-lg cursor-pointer text-white"
          >
            Cancel
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};
