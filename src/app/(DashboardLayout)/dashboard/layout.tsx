import { StunningSidebar } from "@/shared/Sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div className="overflow-y-auto hide-scrollbar h-full w-72 hidden lg:block">
        <StunningSidebar />
      </div>
      <div className="flex-1 overflow-y-auto h-full">
        <div className="mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default layout;
