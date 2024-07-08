interface Props {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const HistoryForm: React.FC<Props> = ({ submit }) => {
  return (
    <form
      onSubmit={submit}
      className="mt-6 flex flex-col items-start justify-start gap-2"
    >
      <h2 className="text-white text-xl">Module History:</h2>
      <div className="flex-col flex items-start justify-start gap-2 mt-4">
        <label className="text-white">Start:</label>
        <input type="datetime-local" required name="start" />
      </div>
      <div className="flex-col flex items-start justify-start gap-2">
        <label className="text-white">Stop:</label>
        <input type="datetime-local" required name="stop" />
      </div>
      <div className="flex-col flex items-start justify-start gap-2">
        <label className="text-white">Mode:</label>
        <select name="mode" required>
          <option>hourly</option>
          <option>daily</option>
        </select>
      </div>
      <button
        className="mt-2 hover:bg-emerald-600 hover:border-emerald-600 transition border-2 border-solid bg-emerald-500 border-emerald-500 p-1 pl-4 pr-4 rounded-lg cursor-pointer text-white"
        type="submit"
      >
        Show History
      </button>
    </form>
  );
};
