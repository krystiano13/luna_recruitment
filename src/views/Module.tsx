import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import type { Module } from "../types/module";

export function Module() {
  const [params, setParams] = useSearchParams();
  const [notFound, setNotFound] = useState<boolean>(false);
  const [module, setModule] = useState<Module | null>(null);

  useEffect(() => {
    if (!params.get("id")) {
      setNotFound(true);
      setModule(null);
    } else {
      fetch(`http://localhost:3001/modules/${params.get("id")}`)
        .then((res) => {
          if (res.status === 404) {
            setNotFound(true);
            setModule(null);
          }
          return res.json();
        })
        .then((data) => {
          if (!notFound) {
            setModule(data);
          }
        });
    }
  }, []);

  return <>
    <h1 className="text-white">{ module?.name }</h1>
  </>;
}
