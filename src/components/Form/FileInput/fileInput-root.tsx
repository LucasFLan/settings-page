import { FileInputProvider } from "@/context/FileInputContext";
import { ComponentProps } from "react";

type FileInputRootProps = ComponentProps<"div">;

export const FileInputRoot = (props: FileInputRootProps) => {
  return (
    <FileInputProvider>
      <div {...props} />
    </FileInputProvider>
  );
};
