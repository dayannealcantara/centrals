import create from "zustand";

import { Central } from "../types/central";
import { Model } from "../types/models.t";

interface CentralStore {
  centrals: Central[];
  setCentrals: (data: Central[]) => void;
  models: Model[];
  setModels: (data: Model[]) => void;
}

export const useCentralStore = create<CentralStore>((set) => ({
  centrals: [],
  setCentrals: (data) => set({ centrals: data }),
  models: [],
  setModels: (data) => set({ models: data }),
}));
