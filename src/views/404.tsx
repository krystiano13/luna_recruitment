import { NavLink } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col items-center text-white justify-center gap-6 w-full min-h-[100vh] overflow-y-auto p-6 md:p-12">
      <h1 className="op-transition text-4xl">404 - Not Found</h1>
      <NavLink to="/">
        <button
          className={`hover:bg-emerald-600 hover:border-emerald-600 transition border-2 border-solid bg-emerald-500 border-emerald-500 p-1.5 pl-6 pr-6 rounded-lg cursor-pointer flex flex-col justify-center rounded-lg border-solid border-2 border-b-[5px] cursor-pointer`}
        >
          Return to Home Page
        </button>
      </NavLink>
    </div>
  );
}
