import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Sidebar } from "./sidebar";
import { Menu } from "lucide-react";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-zinc-800" />
      </SheetTrigger>
      <SheetContent className="p-0 border-zinc-800 z-[100]" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
