import { create } from "zustand";

type DocumentStore = {

  extractedText: string;

  fileName: string;

  setExtractedText: (text: string) => void;

  setFileName: (name: string) => void;

};

export const useDocumentStore = create<DocumentStore>((set) => ({

  extractedText: "",

  fileName: "",

  setExtractedText: (text) =>
    set({ extractedText: text }),

  setFileName: (name) =>
    set({ fileName: name }),

}));