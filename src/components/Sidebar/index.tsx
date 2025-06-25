import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  Search,
  LifeBuoy,
  Cog,
} from "lucide-react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import { Input } from "../Input";

export const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col gap-6 border-zinc-200 bg-white p-4 lg:relative lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="User" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav>
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200"></div>
        <Profile />
      </div>
    </aside>
  );
};
