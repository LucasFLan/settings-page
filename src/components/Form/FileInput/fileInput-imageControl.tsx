"use client";
import { useFileInput } from "@/context/FileInputContext";
import { ChangeEvent, ComponentProps } from "react";

type FileInputImageControlProps = ComponentProps<"input">;

export const FileInputImageControl = ({
  multiple = false,
  ...props
}: FileInputImageControlProps) => {
  const { id, onFilesSelected } = useFileInput();

  const handleFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      return;
    }

    const files = Array.from(event.target.files);

    onFilesSelected(files, multiple);
  };

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  );
};
