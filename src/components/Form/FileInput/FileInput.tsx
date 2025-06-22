"use client";
import { FileInputProvider, useFileInput } from "@/context/FileInputContext";
import { formatBytes } from "@/utils/format-bytes";
import { Trash2, UploadCloud, User } from "lucide-react";
import { ChangeEvent, ComponentProps, useMemo } from "react";

type FileInputRootProps = ComponentProps<"div">;

export const FileInputRoot = (props: FileInputRootProps) => {
  return (
    <FileInputProvider>
      <div {...props} />
    </FileInputProvider>
  );
};

export const FileInputTrigger = () => {
  const { id } = useFileInput();

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-x-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-4 w-4 text-zinc-600 group-hover:text-violet-600" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700">Click to upload</span>{" "}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
};

export const FileInputImagePreview = () => {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    );
  } else {
    return (
      <img
        src={previewURL}
        alt=""
        className="h-16 w-16 rounded-full object-cover"
      />
    );
  }
};

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

export const FileInputList = () => {
  const { files } = useFileInput();

  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => (
        <div
          key={file.name}
          className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
        >
          <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
            <UploadCloud className="h-4 w-4" />
          </div>

          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-700">
                {file.name}
              </span>
              <span className="text-sm text-zinc-500">
                {formatBytes(file.size)}
              </span>
            </div>

            <div className="flex w-full items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-zinc-100">
                <div className="h-2 w-4/5 rounded-full bg-violet-600"></div>
              </div>
              <span className="text-sm font-medium text-zinc-700">80%</span>
            </div>
          </div>

          <button
            type="button"
            className="ml-auto rounded-md p-2 hover:bg-zinc-50"
          >
            <Trash2 className="h-5 w-5 text-zinc-500" />
          </button>
        </div>
      ))}
    </div>
  );
};
