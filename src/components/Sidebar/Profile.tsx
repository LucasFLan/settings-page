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
        <span className="truncate text-sm font-semibold text-zinc-700">
          Lucas F Lan
        </span>
        <span className="truncate text-sm text-zinc-500">
          Lucas@hotmailasdasdasdasdasdadasdas.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
};
