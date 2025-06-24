"use client";
import { useFileInput } from "@/context/FileInputContext";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FileInputItem } from "./fileInput-item";

export const FileInputList = () => {
  const { files } = useFileInput();

  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => (
        <FileInputItem
          key={file.name}
          name={file.name}
          size={file.size}
          state="progress"
        />
      ))}
    </div>
  );
};
