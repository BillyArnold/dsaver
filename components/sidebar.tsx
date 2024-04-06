import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex lg:fixed bg-zinc-800 h-full lg:w-[256px] left-0 top-0 px-4 border-r-zinc-800 flex-col",
        className,
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="/logo.png"
            className="rounded-full"
            height={40}
            width={40}
            alt="logo"
          />
          <h1 className="text-2xl font-bold tracking-wide text-pink-200">
            DSAver
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" />
        <SidebarItem label="Shop" href="/shop" />
        <SidebarItem label="Useful Links" href="/links" />
        <SidebarItem label="Contact" href="/" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
