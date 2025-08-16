"use client";
import { ReactNode, useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store/store";
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import RootLoader from "@/shared/RootLoader";

const Providers = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // adjust delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <AntdRegistry>
          <AnimatePresence>
            {loading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black"
              >
                <RootLoader />
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Your actual app content */}
          {children}
        </AntdRegistry>
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
