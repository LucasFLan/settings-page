"use client";
import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

type SelectInputProps = Select.SelectProps & {
  placeholder: string;
  children: ReactNode;
};

export const SelectInput = ({
  children,
  placeholder,
  ...props
}: SelectInputProps) => {
  return (
    <Select.Root {...props}>
      <Select.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600">
        <Select.Value placeholder={placeholder} className="text-black" />
        <Select.Icon className="">
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          sideOffset={8}
          side="bottom"
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
        >
          <Select.Viewport className="outline-none">{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
