import { create } from "zustand";

// Описываем тип одного элемента поисковой выдачи
type OrganicItem = {
  position: number;
  title: string;
  link: string;
  snippet: string;
};

// Расширяем тип основного результата
type Result = {
  domain: string;
  keyword: string;
  location: string;
  position: number;
  organicResults: OrganicItem[];
};

interface State {
  searchResult: Result | null;
  setSearchResult: (result: Result) => void;
  clearResult: () => void;
}

export const useStore = create<State>((set) => ({
  searchResult: null,
  setSearchResult: (result) => set({ searchResult: result }),
  clearResult: () => set({ searchResult: null }),
}));
