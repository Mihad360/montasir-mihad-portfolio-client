"use client";
import { ReactNode } from "react";
import "@ant-design/v5-patch-for-react-19";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store/store";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <AntdRegistry>{children}</AntdRegistry>
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
