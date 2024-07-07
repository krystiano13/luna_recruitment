export interface Module {
    id: string;
    name: string;
    description: string;
    available: boolean;
    targetTemperature: number;
}

export interface ModuleTemperature {
    id: string;
    temperature: number;
}

export interface HistoricalData {
    timestamp: string;
    temperature: number;
}