"use client";
import { ReactNode } from "react";
import "@ant-design/v5-patch-for-react-19";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store/store";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        <Provider store={store}>
          <AntdRegistry>{children}</AntdRegistry>
        </Provider>
      </div>
    </>
  );
};

export default Providers;
