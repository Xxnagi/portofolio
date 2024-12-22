import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";

import "@/styles/styles.scss";

import Menu from "@/components/menu/Menu";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="main">
      <div>
        <Menu />
      </div>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
