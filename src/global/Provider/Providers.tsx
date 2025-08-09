"use client";
import { ReactNode } from "react";
import "@ant-design/v5-patch-for-react-19";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        <AntdRegistry>{children}</AntdRegistry>
      </div>
    </>
  );
};

export default Providers;
