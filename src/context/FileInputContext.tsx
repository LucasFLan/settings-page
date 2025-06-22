"use client";

import { createContext, ReactNode, useContext, useId, useState } from "react";

type FileInputContextType = {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], multiple: boolean) => void;
};

type FileInputProviderProps = {
  children: ReactNode;
};

export const FileInputContext = createContext({} as FileInputContextType);

export const FileInputProvider = ({ children }: FileInputProviderProps) => {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files]);
    } else {
      setFiles(files);
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      {children}
    </FileInputContext.Provider>
  );
};

export const useFileInput = () => useContext(FileInputContext);
