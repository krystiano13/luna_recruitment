import { motion } from "framer-motion";

export function ModuleEdit() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ type: "tween", bounce: 0, duration: 0.25 }}
      animate={{ opacity: [0, 1] }}
      className="w-[100vw] h-[100vh] flex justify-center items-center bg-slate-950 z-50 fixed bg-opacity-75"
    >
      <motion.form
        initial={{ scale: 0 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          delay: 0.25,
          duration: 0.25,
        }}
        animate={{ scale: [0, 1] }}
        className="min-w-[95vw] md:min-w-[30rem] min-h-[36rem] bg-slate-800 flex flex-col items-center justify-center gap-6 p-6 rounded-md"
      >
        <input
          className="text-white focus:border-b-emerald-400 transition-colors w-full p-2 outline-none border-b-2 border-b-solid border-b-emerald-500 bg-slate-900"
          name="name"
          type="text"
          placeholder="name"
          required
        />
        <textarea
          className="min-h-[12rem] resize-none text-white focus:border-b-emerald-400 transition-colors w-full p-2 outline-none border-b-2 border-b-solid border-b-emerald-500 bg-slate-900"
          name="description"
          placeholder="description"
          required
        ></textarea>
        <input
          className="text-white focus:border-b-emerald-400 transition-colors w-full p-2 outline-none border-b-2 border-b-solid border-b-emerald-500 bg-slate-900"
          name="targetTemperature"
          required
          placeholder="Target Temperature"
          type="number"
          min={0}
          max={40}
        />
        <div className="w-full flex items-center gap-3">
          <button
            type="submit"
            className="w-full hover:bg-emerald-600 hover:border-emerald-600 transition border-2 border-solid bg-emerald-500 border-emerald-500 p-1.5 pl-6 pr-6 rounded-lg cursor-pointer text-white"
          >
            Edit
          </button>
          <button
            type="submit"
            className="w-full hover:bg-red-600 hover:border-red-600 transition border-2 border-solid bg-red-500 border-red-500 p-1.5 pl-6 pr-6 rounded-lg cursor-pointer text-white"
          >
            Cancel
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}
