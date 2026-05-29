import { create } from "zustand";

type DocumentStore = {

  extractedText: string;

  fileName: string;
  
  summary:string;

  history: any[];

  addHistory: (item: any) => void;
  
  setExtractedText: (text: string) => void;

  setFileName: (name: string) => void;
  
  setSummary:(summary:string) => void;

};

export const useDocumentStore = create<DocumentStore>((set) => ({

  extractedText: "",

  fileName: "",
  summary: "",
  setSummary:(summary) =>
    set({ summary: summary }),
  setExtractedText: (text) =>
    set({ extractedText: text }),

  setFileName: (name) =>
    set({ fileName: name }),
  history: [],
  addHistory: (item) =>
    set((state) => ({ 
      history: [...state.history, item]
    })),  

}));