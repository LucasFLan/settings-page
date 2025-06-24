import { ComponentProps } from "react";

type InputPrefixProps = ComponentProps<"div">;

export const InputPrefix = (props: InputPrefixProps) => {
  return <div {...props} />;
};
