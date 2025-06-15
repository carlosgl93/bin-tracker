export type ProductionRecord = {
  id?: string;
  date: string;
  startTime: string;
  endTime: string;
  gasControl: { day: string; percentage: number; value: number }[];
  drumProductionByHour: { range: string; count: number }[];
  drumStock: { initial: number; used: number; total: number };
  bagStock: { initial: number; used: number; damaged: number; total: number };
  binsStatus: { source: string; quantity: number }[];
  binsMalfunction: number;
  totalExistence: number;
  totalProcessed: number;
  totalFinal: number;
};
