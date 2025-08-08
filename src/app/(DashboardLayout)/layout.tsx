import Providers from "@/global/Provider/Providers";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Providers>{children}</Providers>
    </div>
  );
};

export default layout;
