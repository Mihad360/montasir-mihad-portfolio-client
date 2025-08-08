import { StunningSidebar } from "@/shared/Sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div>
        <StunningSidebar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
