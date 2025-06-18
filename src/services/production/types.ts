export type GasControl = { day: string; percentage: number; value: number };
export type DrumProductionByHour = { range: string; count: number };
export type DrumStock = { initial: number; used: number; total: number };
export type BagStock = { initial: number; used: number; damaged: number; total: number };
export type BinsStatus = { source: string; quantity: number };
export type BinKey = 'inicio' | 'chechito' | 'donluis' | 'otros' | 'malos';

export type ProductionRecord = {
  id?: string;
  date: string;
  startTime: string;
  endTime: string;
  gasControl: GasControl[];
  drumProductionByHour: DrumProductionByHour[];
  drumStock: DrumStock;
  bagStock: BagStock;
  binsStatus: BinsStatus[];
  binsMalfunction: number;
  totalExistence: number;
  totalProcessed: number;
  totalFinal: number;
  brix: {
    1: number;
    2: number;
    3: number;
    average: number;
  };
  totalDrumsWeight: number;
  comments?: string;
};
