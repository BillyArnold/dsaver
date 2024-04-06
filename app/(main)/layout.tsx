import { Sidebar } from "@/components/sidebar";
import { MobileHeader } from "@/components/mobile-header";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="text-white hidden lg:flex" />
      <main className="text-white pt-[50px] lg:pt-0 lg:pl-[256px] h-full">
        <div className="h-full max-w-[1056px] mx-auto pt-6">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
