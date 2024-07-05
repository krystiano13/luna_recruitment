import { useEffect, useState } from "react";

interface Module {
    id: string;
    name: string;
    description: string;
    available: boolean;
    targetTemperature: number;
}

export function Home() {
    const [modules, setModules] = useState<Module[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/modules', { mode: "cors" })
        .then(res => res.json())
        .then((data: Module[]) => {
            const modulesArray: Module[] = [];
            data.forEach(item => {
                modulesArray.push(item);
            });
            setModules(modulesArray);
        });  
    }, []);

    return (
        <div className="w-full min-h-full overflow-y-auto">
            <h1>Modules</h1>
            <div className="w-full h-auto text-white">
                {
                    modules.map(item => <p>{ item.name }</p>)
                }
            </div>
        </div>
    )
}