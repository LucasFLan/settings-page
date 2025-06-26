import { Button } from "@/components/Button";
import { LogOut } from "lucide-react";

export const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/LucasFLan.png"
        alt="Lucas Lan"
        className="rounded-full"
        width={40}
        height={40}
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Lucas F Lan
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          Lucas@hotmailasdasdasdasdasdadasdas.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  );
};
