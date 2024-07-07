import { motion } from "framer-motion";

export function ModuleEdit() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ type: "tween", bounce: 0, duration: 0.25 }}
      animate={{ opacity: [0, 1] }}
      className="w-[100vw] h-[100vh] flex justify-center items-center bg-slate-950 z-50 fixed bg-opacity-75"
    >
      <motion.form>
        <input name="name" type="text" placeholder="name" required />
        <textarea
          name="description"
          placeholder="description"
          required
        ></textarea>
        <input
          name="targetTemperature"
          required
          type="number"
          min={0}
          max={40}
        />
        <button>Edit</button>
      </motion.form>
    </motion.div>
  );
}
