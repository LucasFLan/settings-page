import { ComponentProps } from "react";

type InputControlProps = ComponentProps<"input">;

export const InputControl = (props: InputControlProps) => {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
      {...props}
    />
  );
};
